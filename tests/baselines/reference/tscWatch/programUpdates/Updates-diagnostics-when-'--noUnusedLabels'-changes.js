/a/lib/tsc.js -w -p /tsconfig.json
//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/a.ts]
label: while (1) {}

//// [/tsconfig.json]
{"compilerOptions":{"allowUnusedLabels":true}}

//// [/a.js]
label: while (1) { }



Output::
>> Screen clear
12:00:13 AM - Starting compilation in watch mode...



12:00:16 AM - Found 0 errors. Watching for file changes.


Program root files: ["/a.ts","/a/lib/lib.d.ts"]
Program options: {"allowUnusedLabels":true,"watch":true,"project":"/tsconfig.json","configFilePath":"/tsconfig.json"}
Program files::
/a.ts
/a/lib/lib.d.ts

Semantic diagnostics in builder refreshed for::
/a.ts
/a/lib/lib.d.ts

WatchedFiles::
/tsconfig.json:
  {"fileName":"/tsconfig.json","pollingInterval":250}
/a.ts:
  {"fileName":"/a.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/:
  {"directoryName":"","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

Change:: Disable  allowUnsusedLabels

//// [/tsconfig.json]
{"compilerOptions":{"allowUnusedLabels":false}}


Output::
>> Screen clear
12:00:19 AM - File change detected. Starting incremental compilation...


a.ts(1,1): error TS7028: Unused label.


12:00:20 AM - Found 1 error. Watching for file changes.


Program root files: ["/a.ts","/a/lib/lib.d.ts"]
Program options: {"allowUnusedLabels":false,"watch":true,"project":"/tsconfig.json","configFilePath":"/tsconfig.json"}
Program files::
/a.ts
/a/lib/lib.d.ts

Semantic diagnostics in builder refreshed for::
/a.ts
/a/lib/lib.d.ts

WatchedFiles::
/tsconfig.json:
  {"fileName":"/tsconfig.json","pollingInterval":250}
/a.ts:
  {"fileName":"/a.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/:
  {"directoryName":"","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

Change:: Enable  allowUnsusedLabels

//// [/tsconfig.json]
{"compilerOptions":{"allowUnusedLabels":true}}


Output::
>> Screen clear
12:00:23 AM - File change detected. Starting incremental compilation...



12:00:24 AM - Found 0 errors. Watching for file changes.


Program root files: ["/a.ts","/a/lib/lib.d.ts"]
Program options: {"allowUnusedLabels":true,"watch":true,"project":"/tsconfig.json","configFilePath":"/tsconfig.json"}
Program files::
/a.ts
/a/lib/lib.d.ts

Semantic diagnostics in builder refreshed for::
/a.ts
/a/lib/lib.d.ts

WatchedFiles::
/tsconfig.json:
  {"fileName":"/tsconfig.json","pollingInterval":250}
/a.ts:
  {"fileName":"/a.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/:
  {"directoryName":"","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined
