class DependencyContainer {
  constructor() {
    this.dependencies = new Map();
  }

  register(name, dependency) {
    this.dependencies.set(name, dependency);
  }

  get(name) {
    return this.dependencies.get(name);
  }
}

module.exports = { DependencyContainer };

// Configura o container

