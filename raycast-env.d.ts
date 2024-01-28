/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Key - Your current consumer key: */
  "key": string,
  /** Secret - Your current consumer secret: */
  "secret": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `showGrades` command */
  export type ShowGrades = ExtensionPreferences & {}
  /** Preferences accessible in the `display-gpa` command */
  export type DisplayGpa = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `showGrades` command */
  export type ShowGrades = {}
  /** Arguments passed to the `display-gpa` command */
  export type DisplayGpa = {}
}


declare module "swift:*" {
  function run<T = unknown, U = any>(command: string, input?: U): Promise<T>;
  export default run;
	export class SwiftError extends Error {
    stderr: string;
    stdout: string;
  }
}
