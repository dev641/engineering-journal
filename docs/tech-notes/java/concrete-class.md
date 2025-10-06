---
created: 2025-08-31 21:00
modified: 2025-08-31 21:00
category:
  - java
topic: Concrete Class
tags:
  - java
  - class
  - core-class
summary: A concrete class is a class that can be instantiated using new keyword. All its methods must have complete implementations.
---
# Concrete Class

## Definition

A concrete class is a class that can be instantiated using `new` keyword. All its methods must have complete implementations.

## Detailed Explanation

- A concreate class is the opposite of an abstract class or interfaces
- You can create objects of concrete class directly (`new ClassName()`)
- It can implement interfaces or extends abstract classes, but must provide implementations for all inherited abstract methods.
- In java, Concrete classes can have two access levels:
	- `public` -> accessible from anywhere.
	- `default` (package-private) -> accessible only within the same package.  

## Code Example

```java
// Example 1: Simple Concrete Class
public class Person {
	private String name;
	
	public Person(String name) {
		this.name = name;
	}
	
	public void display() {
		System.out.println("Name:" + name);
	}
	
	public static void main(String[] args) {
		Person person = new Person("Devashish");
		person.display();
	}
}
```

```java
// Example 2: Concrete Class implementing on Interface
interface Shape {
	void draw();
}

class Rectangle extends Shape {
	public void draw() {
		System.out.println("Drawing a Rectangle");
	}
	
	public static void main(String[] args) {
		Rectangle rect = new Rectangle();
		rect.draw();
	}
	
}
```
## Real-World Use Cases

- **Modal Classes in Applications**:
  For example, a `User`, `Product`, or `Order` class in an e-commerce application is usually a concrete class. These classes hold data and provide business logic methods.
- **Implementation Classes**:
  when working with interfaces like `list` or `Map`, the actual implementation(`Arraylist`, `HashMap`) are concrete classes.

## Key Takeaways

- Can be **instantatiated** using `new`.
- Must have **Full Implementation** of all methods.
- Supports **inheritance** from abstract classes or interfaces.
- Acces level can only be public or default (package-private).

## Related Links

- [Java Docs: Classes](https://docs.oracle.com/javase/tutorial/java/javaOO/classes.html)
