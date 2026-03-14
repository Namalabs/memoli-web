---
applyTo: "**/*.swift"
---

# Senior Modern iOS Skill — SwiftUI, MVVM-C, SwiftData

Use this skill for **production-ready iOS/macOS apps**: pure **SwiftUI** UI, **SwiftData** persistence, **MVVM-C** architecture (Coordinator + ViewModel), **Combine** for reactive data, and senior best practices. No UIKit or Core Data in new code.

## Stack Rules

- **UI**: SwiftUI only. No `UIViewController`, `UIView`, or other UIKit in the view layer.
- **Persistence**: SwiftData only. No `NSManagedObjectContext`, `@FetchRequest`, or Core Data.
- **Architecture**: MVVM-C — Coordinator owns navigation; ViewModel holds UI state and calls services; View is layout and binding only.
- **Reactive**: Combine for async/streams; SwiftData's `@Query` and `@Bindable` for local data in views.

## 1. Senior iOS Mindset

- **Thin views**: Layout and binding only. No business logic, no date/number formatting, no "if X then show Y screen" — delegate to Coordinator.
- **Single source of truth**: Persisted state in SwiftData; UI-only in `@State`/`@StateObject`.
- **Swift 6 / concurrency**: Main actor for UI; don't pass `ModelContext` or `@Model` across actors.
- **Error handling**: Handle save/API failures; show user feedback; log with `os.Logger`; no silent `try?` for user actions.
- **Accessibility**: `.accessibilityLabel()` / `.accessibilityHint()` for custom controls; semantic fonts for Dynamic Type; respect Reduce Motion.
- **Performance**: No heavy work in view body; use `List` or `LazyVStack` for large lists.
- **Localization**: `String(localized:)` / `Text("Key")` for user-facing strings.
- **Testing**: ViewModels with mock services (protocols); SwiftData with in-memory `ModelContainer`.

## 2. MVVM-C Architecture

| Layer | Responsibility | Must NOT |
|-------|-----------------|----------|
| **Model** | Data only (structs, Codable, or SwiftData `@Model`) | No UI or business logic |
| **View** | Layout and binding to ViewModel or `@Query`/`@Bindable` | No formatting, no navigation decisions |
| **ViewModel** | UI state, formatting, calling services | No SwiftUI `View`, no navigation |
| **Coordinator** | Which screen to show, path, creating ViewModels with dependencies | No business logic |

### ViewModel

- Conform to `ObservableObject`; expose UI state with `@Published`.
- Inject dependencies via **initializer** using **protocols** for testability.
- Use Combine: `.receive(on: DispatchQueue.main)` before updating `@Published`; store subscriptions in a **CancelBag**.

### Coordinator

- **@Observable** class holding route enums and path arrays.
- Views get coordinator via `@Environment(Coordinator.self)` and call it for navigation.
- Bind `NavigationStack(path: $coordinator.path)` and `.navigationDestination(for: Route.self)`.

## 3. SwiftData

### App setup

```swift
@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup { ContentView() }
            .modelContainer(for: [Item.self, Category.self])
    }
}
```

### Models (@Model)

- **Class** with `@Model`; stored properties: `Int`, `String`, `Bool`, `Date`, `UUID`, `Data`, optional, or `Codable` structs/enums.
- **One-to-many**: One side has `[Item]`, other has `Project?` (optional).
- **Insert before relationships**: Call `modelContext.insert(object)` before appending to relationship arrays.

### Reading (@Query)

- In views: `@Query(sort: \Item.createdAt) private var items: [Item]`.
- Filter: `@Query(filter: #Predicate<Item> { $0.isDone == false }, sort: \Item.createdAt)`.

### Create, update, delete

- **Insert**: `modelContext.insert(item)`. **Update**: `@Bindable(item)`. **Delete**: `modelContext.delete(item)`.
- Handle save errors: `do { try modelContext.save() } catch { ... }`.

## 4. Combine (reactive)

- Services return `AnyPublisher<Value, Error>` for async work.
- ViewModel uses `.sink` or `.assign` and stores in CancelBag; `.receive(on: DispatchQueue.main)` before updating `@Published`.

## Reference — MVVM-C Templates

### Service protocol + implementation

```swift
protocol UserServiceProtocol {
    func fetchUsers() -> AnyPublisher<[User], Error>
}

final class UserService: UserServiceProtocol {
    func fetchUsers() -> AnyPublisher<[User], Error> {
        URLSession.shared.dataTaskPublisher(for: url)
            .map(\.data)
            .decode(type: [User].self, decoder: JSONDecoder())
            .receive(on: DispatchQueue.main)
            .eraseToAnyPublisher()
    }
}
```

### ViewModel (reactive + DI)

```swift
final class UsersViewModel: ObservableObject {
    @Published var users: [User] = []
    @Published var isLoading = false
    @Published var errorMessage: String?

    private let service: UserServiceProtocol
    private let cancelBag = CancelBag()

    init(service: UserServiceProtocol) {
        self.service = service
        loadUsers()
    }

    func loadUsers() {
        isLoading = true
        service.fetchUsers()
            .receive(on: DispatchQueue.main)
            .sink(
                receiveCompletion: { [weak self] completion in
                    self?.isLoading = false
                    if case .failure(let error) = completion {
                        self?.errorMessage = error.localizedDescription
                    }
                },
                receiveValue: { [weak self] users in self?.users = users }
            )
            .store(in: cancelBag)
    }
}
```

### CancelBag

```swift
final class CancelBag {
    var subscriptions = Set<AnyCancellable>()
    func cancel() { subscriptions.removeAll() }
}
extension AnyCancellable {
    func store(in bag: CancelBag) { bag.subscriptions.insert(self) }
}
```

### SwiftData error handling

```swift
func save() {
    do {
        try modelContext.save()
    } catch {
        logger.error("Save failed: \(error)")
        errorMessage = String(localized: "Could not save. Please try again.")
    }
}
```

## Quick reference

| Need | Use |
|------|-----|
| New screen | Model → Service protocol + impl → ViewModel(service) → View → Coordinator destination |
| Navigation | Route enum + path in Coordinator; `NavigationStack(path:)` + `.navigationDestination(for:)` |
| Persisted model | `@Model` class; `.modelContainer(for: [Model.self])` on app scene |
| Read in view | `@Query` (+ filter/sort); `@Environment(\.modelContext)` |
| Edit in form | `@Bindable(model)` |
| API / reactive | Combine in ViewModel; protocol injection; CancelBag |
| Tests | Mock service for ViewModel; in-memory ModelContainer for SwiftData |
