import defaultImports, * as namespaceImports from "rect-clampa";
import defaultImports2, * as namespaceImports2 from "rect-clamp";
import defaultImports3, * as namespaceImports3 from "rect-clampb";
import defaultImports4, * as namespaceImports4 from "rect-clampc";
import defaultImports5, * as namespaceImports5 from "rect-clampd";
import defaultImports6, * as namespaceImports6 from "rect-clampe";
import defaultImports7, * as namespaceImports7 from "rect-clampf";

import("rect-clampa").then((dynamicImports) => {
  /**
   * dev output: { default: sayHello }
   * build output: { default: sayHello }
   */
  console.log("dynamicImports: ", dynamicImports);
  /**
   * !!! Bad Case !!!
   * dev output: sayHello
   * build output: { default: sayHello }
   */
  console.log("namespaceImports: ", namespaceImports);
  /**
   * dev output: sayHello
   * build output: sayHello
   */
  console.log("defaultImports: ", defaultImports);
});

import("rect-clamp").then((dynamicImports2) => {
  /**
   * dev output: { default: { sayHello }, sayHello }
   * build output: { default: { sayHello }, sayHello }
   */
  console.log("dynamicImports2: ", dynamicImports2);
  /**
   * !!! Bad Case !!!
   * dev output: { sayHello }
   * build output: { default: { sayHello }, sayHello }
   */
  console.log("namespaceImports2: ", namespaceImports2);
  /**
   * dev output: { sayHello }
   * build output: { sayHello }
   */
  console.log("defaultImports2: ", defaultImports2);
});

import("rect-clampb").then((dynamicImports3) => {
  /**
   * dev output: { default: { sayHello }, __esModule: true } }
   * build output: { default: { sayHello }, __esModule: true }
   */
  console.log("dynamicImports3: ", dynamicImports3);
  /**
   * dev output: { default: { sayHello }, __esModule: true }
   * build output: { default: { sayHello }, __esModule: true }
   */
  console.log("namespaceImports3: ", namespaceImports3);
  /**
   * dev output: { sayHello }
   * build output: { sayHello }
   */
  console.log("defaultImports3: ", defaultImports3);
});

import("rect-clampc").then((dynamicImports4) => {
  /**
   * dev output: { default: sayHello, __esModule: true }
   * build output: { default: sayHello, __esModule: true }
   */
  console.log("dynamicImports4: ", dynamicImports4);
  /**
   * dev output: { default: sayHello, __esModule: true }
   * build output: { default: sayHello, __esModule: true }
   */
  console.log("namespaceImports4: ", namespaceImports4);
  /**
   * dev output: sayHello
   * build output: sayHello
   */
  console.log("defaultImports4: ", defaultImports4);
});

import("rect-clampd").then((dynamicImports5) => {
  /**
   * dev output: { a: 1, default: { name: "rect-clampd", default: sayHello }, __esModule: true }
   * build output: { a: 1, default: { name: "rect-clampd", default: sayHello }, __esModule: true }
   */
  console.log("dynamicImports5: ", dynamicImports5);
  /**
   * dev output: { a: 1, default: { name: "rect-clampd", default: sayHello }, __esModule: true }
   * build output: { a: 1, default: { name: "rect-clampd", default: sayHello }, __esModule: true }
   */
  console.log("namespaceImports5: ", namespaceImports5);
  /**
   * dev output: { default: sayHello, name: "rect-clampd" }
   * build output: { default: sayHello, name: "rect-clampd" }
   */
  console.log("defaultImports5: ", defaultImports5);
});

import("rect-clampe").then((dynamicImports6) => {
  /**
   * dev output: { a: 1, default: { a: 1, default: { name: "rect-clampd", default: sayHello } } }
   * build output: { a: 1, default: { a: 1, default: { name: "rect-clampd", default: sayHello } } }
   */
  console.log("dynamicImports6: ", dynamicImports6);
  /**
   * !!! Bad Case !!!
   * dev output: { a: 1, default: { name: "rect-clampd", default: sayHello } }
   * build output: { a: 1, default: { a: 1, default: { name: "rect-clampd", default: sayHello } } }
   */
  console.log("namespaceImports6: ", namespaceImports6);
  /**
   * dev output: { a: 1, default: { name: "rect-clampd", default: sayHello} }
   * dev output: { a: 1, default: { name: "rect-clampd", default: sayHello} }
   */
  console.log("defaultImports6: ", defaultImports6);
});

import("rect-clampf").then((dynamicImports7) => {
  /**
   * !!! Bad Case !!!
   * dev output: { 0: 1, 1: 3, 2: 4, default: [1, 3, 4] }
   * build output: { default: [1, 3, 4] }
   */
  console.log("dynamicImports7: ", dynamicImports7);
  /**
   * !!! Bad Case !!!
   * dev output: [1, 3, 4]
   * build output: { default: [1, 3, 4] }
   */
  console.log("namespaceImports7: ", namespaceImports7);
  /**
   * dev output: [1, 3, 4]
   * dev output: [1, 3, 4]
   */
  console.log("defaultImports7: ", defaultImports7);
});
