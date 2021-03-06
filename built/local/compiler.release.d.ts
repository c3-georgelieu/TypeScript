declare namespace ts {
    const versionMajorMinor = "3.9";
    const version: string;
    interface MapLike<T> {
        [index: string]: T;
    }
    interface SortedReadonlyArray<T> extends ReadonlyArray<T> {
        " __sortedArrayBrand": any;
    }
    interface SortedArray<T> extends Array<T> {
        " __sortedArrayBrand": any;
    }
    interface ReadonlyMap<T> {
        get(key: string): T | undefined;
        has(key: string): boolean;
        forEach(action: (value: T, key: string) => void): void;
        readonly size: number;
        keys(): Iterator<string>;
        values(): Iterator<T>;
        entries(): Iterator<[string, T]>;
    }
    interface Map<T> extends ReadonlyMap<T> {
        set(key: string, value: T): this;
        delete(key: string): boolean;
        clear(): void;
    }
    interface MapConstructor {
        new <T>(): Map<T>;
    }
    function tryGetNativeMap(): MapConstructor | undefined;
    const Map: MapConstructor;
    interface Iterator<T> {
        next(): {
            value: T;
            done?: false;
        } | {
            value: never;
            done: true;
        };
    }
    interface Push<T> {
        push(...values: T[]): void;
    }
    type EqualityComparer<T> = (a: T, b: T) => boolean;
    type Comparer<T> = (a: T, b: T) => Comparison;
    const enum Comparison {
        LessThan = -1,
        EqualTo = 0,
        GreaterThan = 1
    }
}
declare namespace ts {
    const emptyArray: never[];
    function createMap<T>(): Map<T>;
    function createMapFromEntries<T>(entries: [string, T][]): Map<T>;
    function createMapFromTemplate<T>(template: MapLike<T>): Map<T>;
    function length(array: readonly any[] | undefined): number;
    function forEach<T, U>(array: readonly T[] | undefined, callback: (element: T, index: number) => U | undefined): U | undefined;
    function forEachRight<T, U>(array: readonly T[] | undefined, callback: (element: T, index: number) => U | undefined): U | undefined;
    function firstDefined<T, U>(array: readonly T[] | undefined, callback: (element: T, index: number) => U | undefined): U | undefined;
    function firstDefinedIterator<T, U>(iter: Iterator<T>, callback: (element: T) => U | undefined): U | undefined;
    function zipWith<T, U, V>(arrayA: readonly T[], arrayB: readonly U[], callback: (a: T, b: U, index: number) => V): V[];
    function zipToIterator<T, U>(arrayA: readonly T[], arrayB: readonly U[]): Iterator<[T, U]>;
    function zipToMap<T>(keys: readonly string[], values: readonly T[]): Map<T>;
    function every<T>(array: readonly T[], callback: (element: T, index: number) => boolean): boolean;
    function find<T, U extends T>(array: readonly T[], predicate: (element: T, index: number) => element is U): U | undefined;
    function find<T>(array: readonly T[], predicate: (element: T, index: number) => boolean): T | undefined;
    function findLast<T, U extends T>(array: readonly T[], predicate: (element: T, index: number) => element is U): U | undefined;
    function findLast<T>(array: readonly T[], predicate: (element: T, index: number) => boolean): T | undefined;
    function findIndex<T>(array: readonly T[], predicate: (element: T, index: number) => boolean, startIndex?: number): number;
    function findLastIndex<T>(array: readonly T[], predicate: (element: T, index: number) => boolean, startIndex?: number): number;
    function findMap<T, U>(array: readonly T[], callback: (element: T, index: number) => U | undefined): U;
    function contains<T>(array: readonly T[] | undefined, value: T, equalityComparer?: EqualityComparer<T>): boolean;
    function arraysEqual<T>(a: readonly T[], b: readonly T[], equalityComparer?: EqualityComparer<T>): boolean;
    function indexOfAnyCharCode(text: string, charCodes: readonly number[], start?: number): number;
    function countWhere<T>(array: readonly T[], predicate: (x: T, i: number) => boolean): number;
    function filter<T, U extends T>(array: T[], f: (x: T) => x is U): U[];
    function filter<T>(array: T[], f: (x: T) => boolean): T[];
    function filter<T, U extends T>(array: readonly T[], f: (x: T) => x is U): readonly U[];
    function filter<T, U extends T>(array: readonly T[], f: (x: T) => boolean): readonly T[];
    function filter<T, U extends T>(array: T[] | undefined, f: (x: T) => x is U): U[] | undefined;
    function filter<T>(array: T[] | undefined, f: (x: T) => boolean): T[] | undefined;
    function filter<T, U extends T>(array: readonly T[] | undefined, f: (x: T) => x is U): readonly U[] | undefined;
    function filter<T, U extends T>(array: readonly T[] | undefined, f: (x: T) => boolean): readonly T[] | undefined;
    function filterMutate<T>(array: T[], f: (x: T, i: number, array: T[]) => boolean): void;
    function clear(array: {}[]): void;
    function map<T, U>(array: readonly T[], f: (x: T, i: number) => U): U[];
    function map<T, U>(array: readonly T[] | undefined, f: (x: T, i: number) => U): U[] | undefined;
    function mapIterator<T, U>(iter: Iterator<T>, mapFn: (x: T) => U): Iterator<U>;
    function sameMap<T>(array: T[], f: (x: T, i: number) => T): T[];
    function sameMap<T>(array: readonly T[], f: (x: T, i: number) => T): readonly T[];
    function sameMap<T>(array: T[] | undefined, f: (x: T, i: number) => T): T[] | undefined;
    function sameMap<T>(array: readonly T[] | undefined, f: (x: T, i: number) => T): readonly T[] | undefined;
    function flatten<T>(array: T[][] | readonly (T | readonly T[] | undefined)[]): T[];
    function flatMap<T, U>(array: readonly T[] | undefined, mapfn: (x: T, i: number) => U | readonly U[] | undefined): readonly U[];
    function flatMapToMutable<T, U>(array: readonly T[] | undefined, mapfn: (x: T, i: number) => U | readonly U[] | undefined): U[];
    function flatMapIterator<T, U>(iter: Iterator<T>, mapfn: (x: T) => readonly U[] | Iterator<U> | undefined): Iterator<U>;
    function sameFlatMap<T>(array: T[], mapfn: (x: T, i: number) => T | readonly T[]): T[];
    function sameFlatMap<T>(array: readonly T[], mapfn: (x: T, i: number) => T | readonly T[]): readonly T[];
    function mapAllOrFail<T, U>(array: readonly T[], mapFn: (x: T, i: number) => U | undefined): U[] | undefined;
    function mapDefined<T, U>(array: readonly T[] | undefined, mapFn: (x: T, i: number) => U | undefined): U[];
    function mapDefinedIterator<T, U>(iter: Iterator<T>, mapFn: (x: T) => U | undefined): Iterator<U>;
    function mapDefinedMap<T, U>(map: ReadonlyMap<T>, mapValue: (value: T, key: string) => U | undefined, mapKey?: (key: string) => string): Map<U>;
    const emptyIterator: Iterator<never>;
    function singleIterator<T>(value: T): Iterator<T>;
    function spanMap<T, K, U>(array: readonly T[], keyfn: (x: T, i: number) => K, mapfn: (chunk: T[], key: K, start: number, end: number) => U): U[];
    function spanMap<T, K, U>(array: readonly T[] | undefined, keyfn: (x: T, i: number) => K, mapfn: (chunk: T[], key: K, start: number, end: number) => U): U[] | undefined;
    function mapEntries<T, U>(map: ReadonlyMap<T>, f: (key: string, value: T) => [string, U]): Map<U>;
    function mapEntries<T, U>(map: ReadonlyMap<T> | undefined, f: (key: string, value: T) => [string, U]): Map<U> | undefined;
    function some<T>(array: readonly T[] | undefined): array is readonly T[];
    function some<T>(array: readonly T[] | undefined, predicate: (value: T) => boolean): boolean;
    function getRangesWhere<T>(arr: readonly T[], pred: (t: T) => boolean, cb: (start: number, afterEnd: number) => void): void;
    function concatenate<T>(array1: T[], array2: T[]): T[];
    function concatenate<T>(array1: readonly T[], array2: readonly T[]): readonly T[];
    function concatenate<T>(array1: T[] | undefined, array2: T[] | undefined): T[];
    function concatenate<T>(array1: readonly T[] | undefined, array2: readonly T[] | undefined): readonly T[];
    function indicesOf(array: readonly unknown[]): number[];
    function deduplicate<T>(array: readonly T[], equalityComparer: EqualityComparer<T>, comparer?: Comparer<T>): T[];
    function insertSorted<T>(array: SortedArray<T>, insert: T, compare: Comparer<T>): void;
    function sortAndDeduplicate<T>(array: readonly string[]): SortedReadonlyArray<string>;
    function sortAndDeduplicate<T>(array: readonly T[], comparer: Comparer<T>, equalityComparer?: EqualityComparer<T>): SortedReadonlyArray<T>;
    function arrayIsEqualTo<T>(array1: readonly T[] | undefined, array2: readonly T[] | undefined, equalityComparer?: (a: T, b: T, index: number) => boolean): boolean;
    function compact<T>(array: (T | undefined | null | false | 0 | "")[]): T[];
    function compact<T>(array: readonly (T | undefined | null | false | 0 | "")[]): readonly T[];
    function compact<T>(array: T[]): T[];
    function compact<T>(array: readonly T[]): readonly T[];
    function relativeComplement<T>(arrayA: T[] | undefined, arrayB: T[] | undefined, comparer: Comparer<T>): T[] | undefined;
    function sum<T extends Record<K, number>, K extends string>(array: readonly T[], prop: K): number;
    function append<TArray extends any[] | undefined, TValue extends NonNullable<TArray>[number] | undefined>(to: TArray, value: TValue): [undefined, undefined] extends [TArray, TValue] ? TArray : NonNullable<TArray>[number][];
    function append<T>(to: T[], value: T | undefined): T[];
    function append<T>(to: T[] | undefined, value: T): T[];
    function append<T>(to: T[] | undefined, value: T | undefined): T[] | undefined;
    function append<T>(to: Push<T>, value: T | undefined): void;
    function addRange<T>(to: T[], from: readonly T[] | undefined, start?: number, end?: number): T[];
    function addRange<T>(to: T[] | undefined, from: readonly T[] | undefined, start?: number, end?: number): T[] | undefined;
    function pushIfUnique<T>(array: T[], toAdd: T, equalityComparer?: EqualityComparer<T>): boolean;
    function appendIfUnique<T>(array: T[] | undefined, toAdd: T, equalityComparer?: EqualityComparer<T>): T[];
    function sort<T>(array: readonly T[], comparer?: Comparer<T>): SortedReadonlyArray<T>;
    function arrayIterator<T>(array: readonly T[]): Iterator<T>;
    function arrayReverseIterator<T>(array: readonly T[]): Iterator<T>;
    function stableSort<T>(array: readonly T[], comparer: Comparer<T>): SortedReadonlyArray<T>;
    function rangeEquals<T>(array1: readonly T[], array2: readonly T[], pos: number, end: number): boolean;
    function elementAt<T>(array: readonly T[] | undefined, offset: number): T | undefined;
    function firstOrUndefined<T>(array: readonly T[]): T | undefined;
    function first<T>(array: readonly T[]): T;
    function lastOrUndefined<T>(array: readonly T[]): T | undefined;
    function last<T>(array: readonly T[]): T;
    function singleOrUndefined<T>(array: readonly T[] | undefined): T | undefined;
    function singleOrMany<T>(array: T[]): T | T[];
    function singleOrMany<T>(array: readonly T[]): T | readonly T[];
    function singleOrMany<T>(array: T[] | undefined): T | T[] | undefined;
    function singleOrMany<T>(array: readonly T[] | undefined): T | readonly T[] | undefined;
    function replaceElement<T>(array: readonly T[], index: number, value: T): T[];
    function binarySearch<T, U>(array: readonly T[], value: T, keySelector: (v: T) => U, keyComparer: Comparer<U>, offset?: number): number;
    function binarySearchKey<T, U>(array: readonly T[], key: U, keySelector: (v: T) => U, keyComparer: Comparer<U>, offset?: number): number;
    function reduceLeft<T, U>(array: readonly T[] | undefined, f: (memo: U, value: T, i: number) => U, initial: U, start?: number, count?: number): U;
    function reduceLeft<T>(array: readonly T[], f: (memo: T, value: T, i: number) => T): T | undefined;
    function hasProperty(map: MapLike<any>, key: string): boolean;
    function getProperty<T>(map: MapLike<T>, key: string): T | undefined;
    function getOwnKeys<T>(map: MapLike<T>): string[];
    function getAllKeys(obj: object): string[];
    function getOwnValues<T>(sparseArray: T[]): T[];
    function arrayFrom<T, U>(iterator: Iterator<T> | IterableIterator<T>, map: (t: T) => U): U[];
    function arrayFrom<T>(iterator: Iterator<T> | IterableIterator<T>): T[];
    function assign<T extends object>(t: T, ...args: (T | undefined)[]): T;
    function equalOwnProperties<T>(left: MapLike<T> | undefined, right: MapLike<T> | undefined, equalityComparer?: EqualityComparer<T>): boolean;
    function arrayToMap<T>(array: readonly T[], makeKey: (value: T) => string | undefined): Map<T>;
    function arrayToMap<T, U>(array: readonly T[], makeKey: (value: T) => string | undefined, makeValue: (value: T) => U): Map<U>;
    function arrayToNumericMap<T>(array: readonly T[], makeKey: (value: T) => number): T[];
    function arrayToNumericMap<T, U>(array: readonly T[], makeKey: (value: T) => number, makeValue: (value: T) => U): U[];
    function arrayToMultiMap<T>(values: readonly T[], makeKey: (value: T) => string): MultiMap<T>;
    function arrayToMultiMap<T, U>(values: readonly T[], makeKey: (value: T) => string, makeValue: (value: T) => U): MultiMap<U>;
    function group<T>(values: readonly T[], getGroupId: (value: T) => string): readonly (readonly T[])[];
    function group<T, R>(values: readonly T[], getGroupId: (value: T) => string, resultSelector: (values: readonly T[]) => R): R[];
    function clone<T>(object: T): T;
    function extend<T1, T2>(first: T1, second: T2): T1 & T2;
    function copyProperties<T1 extends T2, T2>(first: T1, second: T2): void;
    function maybeBind<T, A extends any[], R>(obj: T, fn: ((this: T, ...args: A) => R) | undefined): ((...args: A) => R) | undefined;
    function mapMap<T, U>(map: Map<T>, f: (t: T, key: string) => [string, U]): Map<U>;
    function mapMap<T, U>(map: UnderscoreEscapedMap<T>, f: (t: T, key: __String) => [string, U]): Map<U>;
    interface MultiMap<T> extends Map<T[]> {
        add(key: string, value: T): T[];
        remove(key: string, value: T): void;
    }
    function createMultiMap<T>(): MultiMap<T>;
    function isArray(value: any): value is readonly {}[];
    function toArray<T>(value: T | T[]): T[];
    function toArray<T>(value: T | readonly T[]): readonly T[];
    function isString(text: unknown): text is string;
    function isNumber(x: unknown): x is number;
    function tryCast<TOut extends TIn, TIn = any>(value: TIn | undefined, test: (value: TIn) => value is TOut): TOut | undefined;
    function tryCast<T>(value: T, test: (value: T) => boolean): T | undefined;
    function cast<TOut extends TIn, TIn = any>(value: TIn | undefined, test: (value: TIn) => value is TOut): TOut;
    function noop(_?: {} | null | undefined): void;
    function returnFalse(): false;
    function returnTrue(): true;
    function returnUndefined(): undefined;
    function identity<T>(x: T): T;
    function toLowerCase(x: string): string;
    function toFileNameLowerCase(x: string): string;
    function notImplemented(): never;
    function memoize<T>(callback: () => T): () => T;
    function compose<T>(...args: ((t: T) => T)[]): (t: T) => T;
    const enum AssertionLevel {
        None = 0,
        Normal = 1,
        Aggressive = 2,
        VeryAggressive = 3
    }
    type AnyFunction = (...args: never[]) => void;
    type AnyConstructor = new (...args: unknown[]) => unknown;
    function equateValues<T>(a: T, b: T): boolean;
    function equateStringsCaseInsensitive(a: string, b: string): boolean;
    function equateStringsCaseSensitive(a: string, b: string): boolean;
    function compareValues(a: number | undefined, b: number | undefined): Comparison;
    function compareTextSpans(a: Partial<TextSpan> | undefined, b: Partial<TextSpan> | undefined): Comparison;
    function min<T>(a: T, b: T, compare: Comparer<T>): T;
    function compareStringsCaseInsensitive(a: string, b: string): Comparison;
    function compareStringsCaseSensitive(a: string | undefined, b: string | undefined): Comparison;
    function getStringComparer(ignoreCase?: boolean): typeof compareStringsCaseSensitive;
    function getUILocale(): string | undefined;
    function setUILocale(value: string | undefined): void;
    function compareStringsCaseSensitiveUI(a: string, b: string): Comparison;
    function compareProperties<T, K extends keyof T>(a: T | undefined, b: T | undefined, key: K, comparer: Comparer<T[K]>): Comparison;
    function compareBooleans(a: boolean, b: boolean): Comparison;
    function getSpellingSuggestion<T>(name: string, candidates: T[], getName: (candidate: T) => string | undefined): T | undefined;
    function endsWith(str: string, suffix: string): boolean;
    function removeSuffix(str: string, suffix: string): string;
    function tryRemoveSuffix(str: string, suffix: string): string | undefined;
    function stringContains(str: string, substring: string): boolean;
    function removeMinAndVersionNumbers(fileName: string): string;
    function orderedRemoveItem<T>(array: T[], item: T): boolean;
    function orderedRemoveItemAt<T>(array: T[], index: number): void;
    function unorderedRemoveItemAt<T>(array: T[], index: number): void;
    function unorderedRemoveItem<T>(array: T[], item: T): boolean;
    type GetCanonicalFileName = (fileName: string) => string;
    function createGetCanonicalFileName(useCaseSensitiveFileNames: boolean): GetCanonicalFileName;
    interface Pattern {
        prefix: string;
        suffix: string;
    }
    function patternText({ prefix, suffix }: Pattern): string;
    function matchedText(pattern: Pattern, candidate: string): string;
    function findBestPatternMatch<T>(values: readonly T[], getPattern: (value: T) => Pattern, candidate: string): T | undefined;
    function startsWith(str: string, prefix: string): boolean;
    function removePrefix(str: string, prefix: string): string;
    function tryRemovePrefix(str: string, prefix: string, getCanonicalFileName?: GetCanonicalFileName): string | undefined;
    function and<T>(f: (arg: T) => boolean, g: (arg: T) => boolean): (arg: T) => boolean;
    function or<T extends unknown[]>(...fs: ((...args: T) => boolean)[]): (...args: T) => boolean;
    function not<T extends unknown[]>(fn: (...args: T) => boolean): (...args: T) => boolean;
    function assertType<T>(_: T): void;
    function singleElementArray<T>(t: T | undefined): T[] | undefined;
    function enumerateInsertsAndDeletes<T, U>(newItems: readonly T[], oldItems: readonly U[], comparer: (a: T, b: U) => Comparison, inserted: (newItem: T) => void, deleted: (oldItem: U) => void, unchanged?: (oldItem: U, newItem: T) => void): void;
    function fill<T>(length: number, cb: (index: number) => T): T[];
    function cartesianProduct<T>(arrays: readonly T[][]): T[][];
    function padLeft(s: string, length: number): string;
    function padRight(s: string, length: number): string;
}
declare namespace ts {
    namespace Debug {
        let isDebugging: boolean;
        function getAssertionLevel(): AssertionLevel;
        function setAssertionLevel(level: AssertionLevel): void;
        function shouldAssert(level: AssertionLevel): boolean;
        function fail(message?: string, stackCrawlMark?: AnyFunction): never;
        function failBadSyntaxKind(node: Node, message?: string, stackCrawlMark?: AnyFunction): never;
        function assert(expression: boolean, message?: string, verboseDebugInfo?: string | (() => string), stackCrawlMark?: AnyFunction): asserts expression;
        function assertEqual<T>(a: T, b: T, msg?: string, msg2?: string, stackCrawlMark?: AnyFunction): void;
        function assertLessThan(a: number, b: number, msg?: string, stackCrawlMark?: AnyFunction): void;
        function assertLessThanOrEqual(a: number, b: number, stackCrawlMark?: AnyFunction): void;
        function assertGreaterThanOrEqual(a: number, b: number, stackCrawlMark?: AnyFunction): void;
        function assertIsDefined<T>(value: T, message?: string, stackCrawlMark?: AnyFunction): asserts value is NonNullable<T>;
        function checkDefined<T>(value: T | null | undefined, message?: string, stackCrawlMark?: AnyFunction): T;
        const assertDefined: typeof checkDefined;
        function assertEachIsDefined<T extends Node>(value: NodeArray<T>, message?: string, stackCrawlMark?: AnyFunction): asserts value is NodeArray<T>;
        function assertEachIsDefined<T>(value: readonly T[], message?: string, stackCrawlMark?: AnyFunction): asserts value is readonly NonNullable<T>[];
        function checkEachDefined<T, A extends readonly T[]>(value: A, message?: string, stackCrawlMark?: AnyFunction): A;
        const assertEachDefined: typeof checkEachDefined;
        function assertNever(member: never, message?: string, stackCrawlMark?: AnyFunction): never;
        function assertEachNode<T extends Node, U extends T>(nodes: NodeArray<T>, test: (node: T) => node is U, message?: string, stackCrawlMark?: AnyFunction): asserts nodes is NodeArray<U>;
        function assertEachNode<T extends Node, U extends T>(nodes: readonly T[], test: (node: T) => node is U, message?: string, stackCrawlMark?: AnyFunction): asserts nodes is readonly U[];
        function assertEachNode(nodes: readonly Node[], test: (node: Node) => boolean, message?: string, stackCrawlMark?: AnyFunction): void;
        function assertNode<T extends Node, U extends T>(node: T | undefined, test: (node: T) => node is U, message?: string, stackCrawlMark?: AnyFunction): asserts node is U;
        function assertNode(node: Node | undefined, test: ((node: Node) => boolean) | undefined, message?: string, stackCrawlMark?: AnyFunction): void;
        function assertNotNode<T extends Node, U extends T>(node: T | undefined, test: (node: T) => node is U, message?: string, stackCrawlMark?: AnyFunction): asserts node is Exclude<T, U>;
        function assertNotNode(node: Node | undefined, test: ((node: Node) => boolean) | undefined, message?: string, stackCrawlMark?: AnyFunction): void;
        function assertOptionalNode<T extends Node, U extends T>(node: T, test: (node: T) => node is U, message?: string, stackCrawlMark?: AnyFunction): asserts node is U;
        function assertOptionalNode<T extends Node, U extends T>(node: T | undefined, test: (node: T) => node is U, message?: string, stackCrawlMark?: AnyFunction): asserts node is U | undefined;
        function assertOptionalNode(node: Node | undefined, test: ((node: Node) => boolean) | undefined, message?: string, stackCrawlMark?: AnyFunction): void;
        function assertOptionalToken<T extends Node, K extends SyntaxKind>(node: T, kind: K, message?: string, stackCrawlMark?: AnyFunction): asserts node is Extract<T, {
            readonly kind: K;
        }>;
        function assertOptionalToken<T extends Node, K extends SyntaxKind>(node: T | undefined, kind: K, message?: string, stackCrawlMark?: AnyFunction): asserts node is Extract<T, {
            readonly kind: K;
        }> | undefined;
        function assertOptionalToken(node: Node | undefined, kind: SyntaxKind | undefined, message?: string, stackCrawlMark?: AnyFunction): void;
        function assertMissingNode(node: Node | undefined, message?: string, stackCrawlMark?: AnyFunction): asserts node is undefined;
        function getFunctionName(func: AnyFunction): any;
        function formatSymbol(symbol: Symbol): string;
        function formatEnum(value: number | undefined, enumObject: any, isFlags?: boolean): string;
        function formatSyntaxKind(kind: SyntaxKind | undefined): string;
        function formatNodeFlags(flags: NodeFlags | undefined): string;
        function formatModifierFlags(flags: ModifierFlags | undefined): string;
        function formatTransformFlags(flags: TransformFlags | undefined): string;
        function formatEmitFlags(flags: EmitFlags | undefined): string;
        function formatSymbolFlags(flags: SymbolFlags | undefined): string;
        function formatTypeFlags(flags: TypeFlags | undefined): string;
        function formatObjectFlags(flags: ObjectFlags | undefined): string;
        function printControlFlowGraph(flowNode: FlowNode): void;
        function formatControlFlowGraph(flowNode: FlowNode): string;
        function attachFlowNodeDebugInfo(flowNode: FlowNode): void;
        function enableDebugInfo(): void;
    }
}
declare namespace ts {
    const timestamp: () => number;
}
declare namespace ts.performance {
    interface Timer {
        enter(): void;
        exit(): void;
    }
    function createTimerIf(condition: boolean, measureName: string, startMarkName: string, endMarkName: string): Timer;
    function createTimer(measureName: string, startMarkName: string, endMarkName: string): Timer;
    const nullTimer: Timer;
    function mark(markName: string): void;
    function measure(measureName: string, startMarkName?: string, endMarkName?: string): void;
    function getCount(markName: string): number;
    function getDuration(measureName: string): number;
    function forEachMeasure(cb: (measureName: string, duration: number) => void): void;
    function enable(): void;
    function disable(): void;
}
declare namespace ts {
    type PerfLogger = typeof import("@microsoft/typescript-etw");
    export const perfLogger: PerfLogger;
    export {};
}
declare namespace ts {
    class Version {
        static readonly zero: Version;
        readonly major: number;
        readonly minor: number;
        readonly patch: number;
        readonly prerelease: readonly string[];
        readonly build: readonly string[];
        constructor(text: string);
        constructor(major: number, minor?: number, patch?: number, prerelease?: string, build?: string);
        static tryParse(text: string): Version | undefined;
        compareTo(other: Version | undefined): Comparison.LessThan | Comparison.LessThan | Comparison | Comparison.GreaterThan;
        increment(field: "major" | "minor" | "patch"): Version;
        toString(): string;
    }
    class VersionRange {
        private _alternatives;
        constructor(spec: string);
        static tryParse(text: string): VersionRange | undefined;
        test(version: Version | string): boolean;
        toString(): string;
    }
}
declare namespace ts {
    export type Path = string & {
        __pathBrand: any;
    };
    export type MatchingKeys<TRecord, TMatch, K extends keyof TRecord = keyof TRecord> = K extends (TRecord[K] extends TMatch ? K : never) ? K : never;
    export interface TextRange {
        pos: number;
        end: number;
    }
    export type JSDocSyntaxKind = SyntaxKind.EndOfFileToken | SyntaxKind.WhitespaceTrivia | SyntaxKind.AtToken | SyntaxKind.NewLineTrivia | SyntaxKind.AsteriskToken | SyntaxKind.OpenBraceToken | SyntaxKind.CloseBraceToken | SyntaxKind.LessThanToken | SyntaxKind.GreaterThanToken | SyntaxKind.OpenBracketToken | SyntaxKind.CloseBracketToken | SyntaxKind.EqualsToken | SyntaxKind.CommaToken | SyntaxKind.DotToken | SyntaxKind.Identifier | SyntaxKind.BacktickToken | SyntaxKind.Unknown | KeywordSyntaxKind;
    export type KeywordSyntaxKind = SyntaxKind.AbstractKeyword | SyntaxKind.AnyKeyword | SyntaxKind.AsKeyword | SyntaxKind.AssertsKeyword | SyntaxKind.BigIntKeyword | SyntaxKind.BooleanKeyword | SyntaxKind.BreakKeyword | SyntaxKind.CaseKeyword | SyntaxKind.CatchKeyword | SyntaxKind.ClassKeyword | SyntaxKind.ContinueKeyword | SyntaxKind.ConstKeyword | SyntaxKind.ConstructorKeyword | SyntaxKind.DebuggerKeyword | SyntaxKind.DeclareKeyword | SyntaxKind.DefaultKeyword | SyntaxKind.DeleteKeyword | SyntaxKind.DoKeyword | SyntaxKind.ElseKeyword | SyntaxKind.EnumKeyword | SyntaxKind.ExportKeyword | SyntaxKind.ExtendsKeyword | SyntaxKind.FalseKeyword | SyntaxKind.FinallyKeyword | SyntaxKind.ForKeyword | SyntaxKind.FromKeyword | SyntaxKind.FunctionKeyword | SyntaxKind.GetKeyword | SyntaxKind.IfKeyword | SyntaxKind.ImplementsKeyword | SyntaxKind.ImportKeyword | SyntaxKind.InKeyword | SyntaxKind.InferKeyword | SyntaxKind.InstanceOfKeyword | SyntaxKind.InterfaceKeyword | SyntaxKind.IsKeyword | SyntaxKind.KeyOfKeyword | SyntaxKind.LetKeyword | SyntaxKind.ModuleKeyword | SyntaxKind.NamespaceKeyword | SyntaxKind.NeverKeyword | SyntaxKind.NewKeyword | SyntaxKind.NullKeyword | SyntaxKind.NumberKeyword | SyntaxKind.ObjectKeyword | SyntaxKind.PackageKeyword | SyntaxKind.PrivateKeyword | SyntaxKind.ProtectedKeyword | SyntaxKind.PublicKeyword | SyntaxKind.ReadonlyKeyword | SyntaxKind.RequireKeyword | SyntaxKind.GlobalKeyword | SyntaxKind.ReturnKeyword | SyntaxKind.SetKeyword | SyntaxKind.StaticKeyword | SyntaxKind.StringKeyword | SyntaxKind.SuperKeyword | SyntaxKind.SwitchKeyword | SyntaxKind.SymbolKeyword | SyntaxKind.ThisKeyword | SyntaxKind.ThrowKeyword | SyntaxKind.TrueKeyword | SyntaxKind.TryKeyword | SyntaxKind.TypeKeyword | SyntaxKind.TypeOfKeyword | SyntaxKind.UndefinedKeyword | SyntaxKind.UniqueKeyword | SyntaxKind.UnknownKeyword | SyntaxKind.VarKeyword | SyntaxKind.VoidKeyword | SyntaxKind.WhileKeyword | SyntaxKind.WithKeyword | SyntaxKind.YieldKeyword | SyntaxKind.AsyncKeyword | SyntaxKind.AwaitKeyword | SyntaxKind.OfKeyword;
    export type JsxTokenSyntaxKind = SyntaxKind.LessThanSlashToken | SyntaxKind.EndOfFileToken | SyntaxKind.ConflictMarkerTrivia | SyntaxKind.JsxText | SyntaxKind.JsxTextAllWhiteSpaces | SyntaxKind.OpenBraceToken | SyntaxKind.LessThanToken;
    export const enum SyntaxKind {
        Unknown = 0,
        EndOfFileToken = 1,
        SingleLineCommentTrivia = 2,
        MultiLineCommentTrivia = 3,
        NewLineTrivia = 4,
        WhitespaceTrivia = 5,
        ShebangTrivia = 6,
        ConflictMarkerTrivia = 7,
        NumericLiteral = 8,
        BigIntLiteral = 9,
        StringLiteral = 10,
        JsxText = 11,
        JsxTextAllWhiteSpaces = 12,
        RegularExpressionLiteral = 13,
        NoSubstitutionTemplateLiteral = 14,
        TemplateHead = 15,
        TemplateMiddle = 16,
        TemplateTail = 17,
        OpenBraceToken = 18,
        CloseBraceToken = 19,
        OpenParenToken = 20,
        CloseParenToken = 21,
        OpenBracketToken = 22,
        CloseBracketToken = 23,
        DotToken = 24,
        DotDotDotToken = 25,
        SemicolonToken = 26,
        CommaToken = 27,
        QuestionDotToken = 28,
        LessThanToken = 29,
        LessThanSlashToken = 30,
        GreaterThanToken = 31,
        LessThanEqualsToken = 32,
        GreaterThanEqualsToken = 33,
        EqualsEqualsToken = 34,
        ExclamationEqualsToken = 35,
        EqualsEqualsEqualsToken = 36,
        ExclamationEqualsEqualsToken = 37,
        EqualsGreaterThanToken = 38,
        PlusToken = 39,
        MinusToken = 40,
        AsteriskToken = 41,
        AsteriskAsteriskToken = 42,
        SlashToken = 43,
        PercentToken = 44,
        PlusPlusToken = 45,
        MinusMinusToken = 46,
        LessThanLessThanToken = 47,
        GreaterThanGreaterThanToken = 48,
        GreaterThanGreaterThanGreaterThanToken = 49,
        AmpersandToken = 50,
        BarToken = 51,
        CaretToken = 52,
        ExclamationToken = 53,
        TildeToken = 54,
        AmpersandAmpersandToken = 55,
        BarBarToken = 56,
        QuestionToken = 57,
        ColonToken = 58,
        AtToken = 59,
        QuestionQuestionToken = 60,
        BacktickToken = 61,
        EqualsToken = 62,
        PlusEqualsToken = 63,
        MinusEqualsToken = 64,
        AsteriskEqualsToken = 65,
        AsteriskAsteriskEqualsToken = 66,
        SlashEqualsToken = 67,
        PercentEqualsToken = 68,
        LessThanLessThanEqualsToken = 69,
        GreaterThanGreaterThanEqualsToken = 70,
        GreaterThanGreaterThanGreaterThanEqualsToken = 71,
        AmpersandEqualsToken = 72,
        BarEqualsToken = 73,
        CaretEqualsToken = 74,
        Identifier = 75,
        PrivateIdentifier = 76,
        BreakKeyword = 77,
        CaseKeyword = 78,
        CatchKeyword = 79,
        ClassKeyword = 80,
        ConstKeyword = 81,
        ContinueKeyword = 82,
        DebuggerKeyword = 83,
        DefaultKeyword = 84,
        DeleteKeyword = 85,
        DoKeyword = 86,
        ElseKeyword = 87,
        EnumKeyword = 88,
        ExportKeyword = 89,
        ExtendsKeyword = 90,
        FalseKeyword = 91,
        FinallyKeyword = 92,
        ForKeyword = 93,
        FunctionKeyword = 94,
        IfKeyword = 95,
        ImportKeyword = 96,
        InKeyword = 97,
        InstanceOfKeyword = 98,
        NewKeyword = 99,
        NullKeyword = 100,
        ReturnKeyword = 101,
        SuperKeyword = 102,
        SwitchKeyword = 103,
        ThisKeyword = 104,
        ThrowKeyword = 105,
        TrueKeyword = 106,
        TryKeyword = 107,
        TypeOfKeyword = 108,
        VarKeyword = 109,
        VoidKeyword = 110,
        WhileKeyword = 111,
        WithKeyword = 112,
        ImplementsKeyword = 113,
        InterfaceKeyword = 114,
        LetKeyword = 115,
        PackageKeyword = 116,
        PrivateKeyword = 117,
        ProtectedKeyword = 118,
        PublicKeyword = 119,
        StaticKeyword = 120,
        YieldKeyword = 121,
        AbstractKeyword = 122,
        AsKeyword = 123,
        AssertsKeyword = 124,
        AnyKeyword = 125,
        AsyncKeyword = 126,
        AwaitKeyword = 127,
        BooleanKeyword = 128,
        ConstructorKeyword = 129,
        DeclareKeyword = 130,
        GetKeyword = 131,
        InferKeyword = 132,
        IsKeyword = 133,
        KeyOfKeyword = 134,
        ModuleKeyword = 135,
        NamespaceKeyword = 136,
        NeverKeyword = 137,
        ReadonlyKeyword = 138,
        RequireKeyword = 139,
        NumberKeyword = 140,
        ObjectKeyword = 141,
        SetKeyword = 142,
        StringKeyword = 143,
        SymbolKeyword = 144,
        TypeKeyword = 145,
        UndefinedKeyword = 146,
        UniqueKeyword = 147,
        UnknownKeyword = 148,
        FromKeyword = 149,
        GlobalKeyword = 150,
        BigIntKeyword = 151,
        OfKeyword = 152,
        QualifiedName = 153,
        ComputedPropertyName = 154,
        TypeParameter = 155,
        Parameter = 156,
        Decorator = 157,
        PropertySignature = 158,
        PropertyDeclaration = 159,
        MethodSignature = 160,
        MethodDeclaration = 161,
        Constructor = 162,
        GetAccessor = 163,
        SetAccessor = 164,
        CallSignature = 165,
        ConstructSignature = 166,
        IndexSignature = 167,
        TypePredicate = 168,
        TypeReference = 169,
        FunctionType = 170,
        ConstructorType = 171,
        TypeQuery = 172,
        TypeLiteral = 173,
        ArrayType = 174,
        TupleType = 175,
        OptionalType = 176,
        RestType = 177,
        UnionType = 178,
        IntersectionType = 179,
        ConditionalType = 180,
        InferType = 181,
        ParenthesizedType = 182,
        ThisType = 183,
        TypeOperator = 184,
        IndexedAccessType = 185,
        MappedType = 186,
        LiteralType = 187,
        ImportType = 188,
        ObjectBindingPattern = 189,
        ArrayBindingPattern = 190,
        BindingElement = 191,
        ArrayLiteralExpression = 192,
        ObjectLiteralExpression = 193,
        PropertyAccessExpression = 194,
        ElementAccessExpression = 195,
        CallExpression = 196,
        NewExpression = 197,
        TaggedTemplateExpression = 198,
        TypeAssertionExpression = 199,
        ParenthesizedExpression = 200,
        FunctionExpression = 201,
        ArrowFunction = 202,
        DeleteExpression = 203,
        TypeOfExpression = 204,
        VoidExpression = 205,
        AwaitExpression = 206,
        PrefixUnaryExpression = 207,
        PostfixUnaryExpression = 208,
        BinaryExpression = 209,
        ConditionalExpression = 210,
        TemplateExpression = 211,
        YieldExpression = 212,
        SpreadElement = 213,
        ClassExpression = 214,
        OmittedExpression = 215,
        ExpressionWithTypeArguments = 216,
        AsExpression = 217,
        NonNullExpression = 218,
        MetaProperty = 219,
        SyntheticExpression = 220,
        TemplateSpan = 221,
        SemicolonClassElement = 222,
        Block = 223,
        EmptyStatement = 224,
        VariableStatement = 225,
        ExpressionStatement = 226,
        IfStatement = 227,
        DoStatement = 228,
        WhileStatement = 229,
        ForStatement = 230,
        ForInStatement = 231,
        ForOfStatement = 232,
        ContinueStatement = 233,
        BreakStatement = 234,
        ReturnStatement = 235,
        WithStatement = 236,
        SwitchStatement = 237,
        LabeledStatement = 238,
        ThrowStatement = 239,
        TryStatement = 240,
        DebuggerStatement = 241,
        VariableDeclaration = 242,
        VariableDeclarationList = 243,
        FunctionDeclaration = 244,
        ClassDeclaration = 245,
        InterfaceDeclaration = 246,
        TypeAliasDeclaration = 247,
        EnumDeclaration = 248,
        ModuleDeclaration = 249,
        ModuleBlock = 250,
        CaseBlock = 251,
        NamespaceExportDeclaration = 252,
        ImportEqualsDeclaration = 253,
        ImportDeclaration = 254,
        ImportClause = 255,
        NamespaceImport = 256,
        NamedImports = 257,
        ImportSpecifier = 258,
        ExportAssignment = 259,
        ExportDeclaration = 260,
        NamedExports = 261,
        NamespaceExport = 262,
        ExportSpecifier = 263,
        MissingDeclaration = 264,
        ExternalModuleReference = 265,
        JsxElement = 266,
        JsxSelfClosingElement = 267,
        JsxOpeningElement = 268,
        JsxClosingElement = 269,
        JsxFragment = 270,
        JsxOpeningFragment = 271,
        JsxClosingFragment = 272,
        JsxAttribute = 273,
        JsxAttributes = 274,
        JsxSpreadAttribute = 275,
        JsxExpression = 276,
        CaseClause = 277,
        DefaultClause = 278,
        HeritageClause = 279,
        CatchClause = 280,
        PropertyAssignment = 281,
        ShorthandPropertyAssignment = 282,
        SpreadAssignment = 283,
        EnumMember = 284,
        UnparsedPrologue = 285,
        UnparsedPrepend = 286,
        UnparsedText = 287,
        UnparsedInternalText = 288,
        UnparsedSyntheticReference = 289,
        SourceFile = 290,
        Bundle = 291,
        UnparsedSource = 292,
        InputFiles = 293,
        JSDocTypeExpression = 294,
        JSDocAllType = 295,
        JSDocUnknownType = 296,
        JSDocNullableType = 297,
        JSDocNonNullableType = 298,
        JSDocOptionalType = 299,
        JSDocFunctionType = 300,
        JSDocVariadicType = 301,
        JSDocNamepathType = 302,
        JSDocComment = 303,
        JSDocTypeLiteral = 304,
        JSDocSignature = 305,
        JSDocTag = 306,
        JSDocAugmentsTag = 307,
        JSDocImplementsTag = 308,
        JSDocAuthorTag = 309,
        JSDocClassTag = 310,
        JSDocPublicTag = 311,
        JSDocPrivateTag = 312,
        JSDocProtectedTag = 313,
        JSDocReadonlyTag = 314,
        JSDocCallbackTag = 315,
        JSDocEnumTag = 316,
        JSDocParameterTag = 317,
        JSDocReturnTag = 318,
        JSDocThisTag = 319,
        JSDocTypeTag = 320,
        JSDocTemplateTag = 321,
        JSDocTypedefTag = 322,
        JSDocPropertyTag = 323,
        SyntaxList = 324,
        NotEmittedStatement = 325,
        PartiallyEmittedExpression = 326,
        CommaListExpression = 327,
        MergeDeclarationMarker = 328,
        EndOfDeclarationMarker = 329,
        SyntheticReferenceExpression = 330,
        Count = 331,
        FirstAssignment = 62,
        LastAssignment = 74,
        FirstCompoundAssignment = 63,
        LastCompoundAssignment = 74,
        FirstReservedWord = 77,
        LastReservedWord = 112,
        FirstKeyword = 77,
        LastKeyword = 152,
        FirstFutureReservedWord = 113,
        LastFutureReservedWord = 121,
        FirstTypeNode = 168,
        LastTypeNode = 188,
        FirstPunctuation = 18,
        LastPunctuation = 74,
        FirstToken = 0,
        LastToken = 152,
        FirstTriviaToken = 2,
        LastTriviaToken = 7,
        FirstLiteralToken = 8,
        LastLiteralToken = 14,
        FirstTemplateToken = 14,
        LastTemplateToken = 17,
        FirstBinaryOperator = 29,
        LastBinaryOperator = 74,
        FirstStatement = 225,
        LastStatement = 241,
        FirstNode = 153,
        FirstJSDocNode = 294,
        LastJSDocNode = 323,
        FirstJSDocTagNode = 306,
        LastJSDocTagNode = 323,
        FirstContextualKeyword = 122,
        LastContextualKeyword = 152
    }
    export const enum NodeFlags {
        None = 0,
        Let = 1,
        Const = 2,
        NestedNamespace = 4,
        Synthesized = 8,
        Namespace = 16,
        OptionalChain = 32,
        ExportContext = 64,
        ContainsThis = 128,
        HasImplicitReturn = 256,
        HasExplicitReturn = 512,
        GlobalAugmentation = 1024,
        HasAsyncFunctions = 2048,
        DisallowInContext = 4096,
        YieldContext = 8192,
        DecoratorContext = 16384,
        AwaitContext = 32768,
        ThisNodeHasError = 65536,
        JavaScriptFile = 131072,
        ThisNodeOrAnySubNodesHasError = 262144,
        HasAggregatedChildData = 524288,
        PossiblyContainsDynamicImport = 1048576,
        PossiblyContainsImportMeta = 2097152,
        JSDoc = 4194304,
        Ambient = 8388608,
        InWithStatement = 16777216,
        JsonFile = 33554432,
        TypeCached = 67108864,
        BlockScoped = 3,
        ReachabilityCheckFlags = 768,
        ReachabilityAndEmitFlags = 2816,
        ContextFlags = 25358336,
        TypeExcludesFlags = 40960,
        PermanentlySetIncrementalFlags = 3145728
    }
    export const enum ModifierFlags {
        None = 0,
        Export = 1,
        Ambient = 2,
        Public = 4,
        Private = 8,
        Protected = 16,
        Static = 32,
        Readonly = 64,
        Abstract = 128,
        Async = 256,
        Default = 512,
        Const = 2048,
        HasComputedFlags = 536870912,
        AccessibilityModifier = 28,
        ParameterPropertyModifier = 92,
        NonPublicAccessibilityModifier = 24,
        TypeScriptModifier = 2270,
        ExportDefault = 513,
        All = 3071
    }
    export const enum JsxFlags {
        None = 0,
        IntrinsicNamedElement = 1,
        IntrinsicIndexedElement = 2,
        IntrinsicElement = 3
    }
    export const enum RelationComparisonResult {
        Succeeded = 1,
        Failed = 2,
        Reported = 4,
        ReportsUnmeasurable = 8,
        ReportsUnreliable = 16,
        ReportsMask = 24
    }
    export interface Node extends TextRange {
        kind: SyntaxKind;
        flags: NodeFlags;
        modifierFlagsCache: ModifierFlags;
        transformFlags: TransformFlags;
        decorators?: NodeArray<Decorator>;
        modifiers?: ModifiersArray;
        id?: number;
        parent: Node;
        original?: Node;
        symbol: Symbol;
        locals?: SymbolTable;
        nextContainer?: Node;
        localSymbol?: Symbol;
        flowNode?: FlowNode;
        emitNode?: EmitNode;
        contextualType?: Type;
        inferenceContext?: InferenceContext;
    }
    export interface JSDocContainer {
        jsDoc?: JSDoc[];
        jsDocCache?: readonly JSDocTag[];
    }
    export type HasJSDoc = ParameterDeclaration | CallSignatureDeclaration | ConstructSignatureDeclaration | MethodSignature | PropertySignature | ArrowFunction | ParenthesizedExpression | SpreadAssignment | ShorthandPropertyAssignment | PropertyAssignment | FunctionExpression | LabeledStatement | ExpressionStatement | VariableStatement | FunctionDeclaration | ConstructorDeclaration | MethodDeclaration | PropertyDeclaration | AccessorDeclaration | ClassLikeDeclaration | InterfaceDeclaration | TypeAliasDeclaration | EnumMember | EnumDeclaration | ModuleDeclaration | ImportEqualsDeclaration | IndexSignatureDeclaration | FunctionTypeNode | ConstructorTypeNode | JSDocFunctionType | ExportDeclaration | EndOfFileToken;
    export type HasType = SignatureDeclaration | VariableDeclaration | ParameterDeclaration | PropertySignature | PropertyDeclaration | TypePredicateNode | ParenthesizedTypeNode | TypeOperatorNode | MappedTypeNode | AssertionExpression | TypeAliasDeclaration | JSDocTypeExpression | JSDocNonNullableType | JSDocNullableType | JSDocOptionalType | JSDocVariadicType;
    export type HasTypeArguments = CallExpression | NewExpression | TaggedTemplateExpression | JsxOpeningElement | JsxSelfClosingElement;
    export type HasInitializer = HasExpressionInitializer | ForStatement | ForInStatement | ForOfStatement | JsxAttribute;
    export type HasExpressionInitializer = VariableDeclaration | ParameterDeclaration | BindingElement | PropertySignature | PropertyDeclaration | PropertyAssignment | EnumMember;
    export type MutableNodeArray<T extends Node> = NodeArray<T> & T[];
    export interface NodeArray<T extends Node> extends ReadonlyArray<T>, TextRange {
        hasTrailingComma?: boolean;
        transformFlags: TransformFlags;
    }
    export interface Token<TKind extends SyntaxKind> extends Node {
        kind: TKind;
    }
    export type DotToken = Token<SyntaxKind.DotToken>;
    export type DotDotDotToken = Token<SyntaxKind.DotDotDotToken>;
    export type QuestionToken = Token<SyntaxKind.QuestionToken>;
    export type QuestionDotToken = Token<SyntaxKind.QuestionDotToken>;
    export type ExclamationToken = Token<SyntaxKind.ExclamationToken>;
    export type ColonToken = Token<SyntaxKind.ColonToken>;
    export type EqualsToken = Token<SyntaxKind.EqualsToken>;
    export type AsteriskToken = Token<SyntaxKind.AsteriskToken>;
    export type EqualsGreaterThanToken = Token<SyntaxKind.EqualsGreaterThanToken>;
    export type EndOfFileToken = Token<SyntaxKind.EndOfFileToken> & JSDocContainer;
    export type ReadonlyToken = Token<SyntaxKind.ReadonlyKeyword>;
    export type AwaitKeywordToken = Token<SyntaxKind.AwaitKeyword>;
    export type PlusToken = Token<SyntaxKind.PlusToken>;
    export type MinusToken = Token<SyntaxKind.MinusToken>;
    export type AssertsToken = Token<SyntaxKind.AssertsKeyword>;
    export type Modifier = Token<SyntaxKind.AbstractKeyword> | Token<SyntaxKind.AsyncKeyword> | Token<SyntaxKind.ConstKeyword> | Token<SyntaxKind.DeclareKeyword> | Token<SyntaxKind.DefaultKeyword> | Token<SyntaxKind.ExportKeyword> | Token<SyntaxKind.PublicKeyword> | Token<SyntaxKind.PrivateKeyword> | Token<SyntaxKind.ProtectedKeyword> | Token<SyntaxKind.ReadonlyKeyword> | Token<SyntaxKind.StaticKeyword>;
    export type ModifiersArray = NodeArray<Modifier>;
    export const enum GeneratedIdentifierFlags {
        None = 0,
        Auto = 1,
        Loop = 2,
        Unique = 3,
        Node = 4,
        KindMask = 7,
        ReservedInNestedScopes = 8,
        Optimistic = 16,
        FileLevel = 32
    }
    export interface Identifier extends PrimaryExpression, Declaration {
        kind: SyntaxKind.Identifier;
        escapedText: __String;
        originalKeywordKind?: SyntaxKind;
        autoGenerateFlags?: GeneratedIdentifierFlags;
        autoGenerateId?: number;
        isInJSDocNamespace?: boolean;
        typeArguments?: NodeArray<TypeNode | TypeParameterDeclaration>;
        jsdocDotPos?: number;
    }
    export interface TransientIdentifier extends Identifier {
        resolvedSymbol: Symbol;
    }
    export interface GeneratedIdentifier extends Identifier {
        autoGenerateFlags: GeneratedIdentifierFlags;
    }
    export interface QualifiedName extends Node {
        kind: SyntaxKind.QualifiedName;
        left: EntityName;
        right: Identifier;
        jsdocDotPos?: number;
    }
    export type EntityName = Identifier | QualifiedName;
    export type PropertyName = Identifier | StringLiteral | NumericLiteral | ComputedPropertyName | PrivateIdentifier;
    export type DeclarationName = Identifier | PrivateIdentifier | StringLiteralLike | NumericLiteral | ComputedPropertyName | ElementAccessExpression | BindingPattern | EntityNameExpression;
    export interface Declaration extends Node {
        _declarationBrand: any;
    }
    export interface NamedDeclaration extends Declaration {
        name?: DeclarationName;
    }
    export interface DynamicNamedDeclaration extends NamedDeclaration {
        name: ComputedPropertyName;
    }
    export interface DynamicNamedBinaryExpression extends BinaryExpression {
        left: ElementAccessExpression;
    }
    export interface LateBoundDeclaration extends DynamicNamedDeclaration {
        name: LateBoundName;
    }
    export interface LateBoundBinaryExpressionDeclaration extends DynamicNamedBinaryExpression {
        left: LateBoundElementAccessExpression;
    }
    export interface LateBoundElementAccessExpression extends ElementAccessExpression {
        argumentExpression: EntityNameExpression;
    }
    export interface DeclarationStatement extends NamedDeclaration, Statement {
        name?: Identifier | StringLiteral | NumericLiteral;
    }
    export interface ComputedPropertyName extends Node {
        parent: Declaration;
        kind: SyntaxKind.ComputedPropertyName;
        expression: Expression;
    }
    export interface PrivateIdentifier extends Node {
        kind: SyntaxKind.PrivateIdentifier;
        escapedText: __String;
    }
    export interface LateBoundName extends ComputedPropertyName {
        expression: EntityNameExpression;
    }
    export interface Decorator extends Node {
        kind: SyntaxKind.Decorator;
        parent: NamedDeclaration;
        expression: LeftHandSideExpression;
    }
    export interface TypeParameterDeclaration extends NamedDeclaration {
        kind: SyntaxKind.TypeParameter;
        parent: DeclarationWithTypeParameterChildren | InferTypeNode;
        name: Identifier;
        constraint?: TypeNode;
        default?: TypeNode;
        expression?: Expression;
    }
    export interface SignatureDeclarationBase extends NamedDeclaration, JSDocContainer {
        kind: SignatureDeclaration["kind"];
        name?: PropertyName;
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        parameters: NodeArray<ParameterDeclaration>;
        type?: TypeNode;
        typeArguments?: NodeArray<TypeNode>;
    }
    export type SignatureDeclaration = CallSignatureDeclaration | ConstructSignatureDeclaration | MethodSignature | IndexSignatureDeclaration | FunctionTypeNode | ConstructorTypeNode | JSDocFunctionType | FunctionDeclaration | MethodDeclaration | ConstructorDeclaration | AccessorDeclaration | FunctionExpression | ArrowFunction;
    export interface CallSignatureDeclaration extends SignatureDeclarationBase, TypeElement {
        kind: SyntaxKind.CallSignature;
    }
    export interface ConstructSignatureDeclaration extends SignatureDeclarationBase, TypeElement {
        kind: SyntaxKind.ConstructSignature;
    }
    export type BindingName = Identifier | BindingPattern;
    export interface VariableDeclaration extends NamedDeclaration {
        kind: SyntaxKind.VariableDeclaration;
        parent: VariableDeclarationList | CatchClause;
        name: BindingName;
        exclamationToken?: ExclamationToken;
        type?: TypeNode;
        initializer?: Expression;
    }
    export interface VariableDeclarationList extends Node {
        kind: SyntaxKind.VariableDeclarationList;
        parent: VariableStatement | ForStatement | ForOfStatement | ForInStatement;
        declarations: NodeArray<VariableDeclaration>;
    }
    export interface ParameterDeclaration extends NamedDeclaration, JSDocContainer {
        kind: SyntaxKind.Parameter;
        parent: SignatureDeclaration;
        dotDotDotToken?: DotDotDotToken;
        name: BindingName;
        questionToken?: QuestionToken;
        type?: TypeNode;
        initializer?: Expression;
    }
    export interface BindingElement extends NamedDeclaration {
        kind: SyntaxKind.BindingElement;
        parent: BindingPattern;
        propertyName?: PropertyName;
        dotDotDotToken?: DotDotDotToken;
        name: BindingName;
        initializer?: Expression;
    }
    export type BindingElementGrandparent = BindingElement["parent"]["parent"];
    export interface PropertySignature extends TypeElement, JSDocContainer {
        kind: SyntaxKind.PropertySignature;
        name: PropertyName;
        questionToken?: QuestionToken;
        type?: TypeNode;
        initializer?: Expression;
    }
    export interface PropertyDeclaration extends ClassElement, JSDocContainer {
        kind: SyntaxKind.PropertyDeclaration;
        parent: ClassLikeDeclaration;
        name: PropertyName;
        questionToken?: QuestionToken;
        exclamationToken?: ExclamationToken;
        type?: TypeNode;
        initializer?: Expression;
    }
    export interface PrivateIdentifierPropertyDeclaration extends PropertyDeclaration {
        name: PrivateIdentifier;
    }
    export interface ObjectLiteralElement extends NamedDeclaration {
        _objectLiteralBrand: any;
        name?: PropertyName;
    }
    export type ObjectLiteralElementLike = PropertyAssignment | ShorthandPropertyAssignment | SpreadAssignment | MethodDeclaration | AccessorDeclaration;
    export interface PropertyAssignment extends ObjectLiteralElement, JSDocContainer {
        parent: ObjectLiteralExpression;
        kind: SyntaxKind.PropertyAssignment;
        name: PropertyName;
        questionToken?: QuestionToken;
        initializer: Expression;
    }
    export interface ShorthandPropertyAssignment extends ObjectLiteralElement, JSDocContainer {
        parent: ObjectLiteralExpression;
        kind: SyntaxKind.ShorthandPropertyAssignment;
        name: Identifier;
        questionToken?: QuestionToken;
        exclamationToken?: ExclamationToken;
        equalsToken?: Token<SyntaxKind.EqualsToken>;
        objectAssignmentInitializer?: Expression;
    }
    export interface SpreadAssignment extends ObjectLiteralElement, JSDocContainer {
        parent: ObjectLiteralExpression;
        kind: SyntaxKind.SpreadAssignment;
        expression: Expression;
    }
    export type VariableLikeDeclaration = VariableDeclaration | ParameterDeclaration | BindingElement | PropertyDeclaration | PropertyAssignment | PropertySignature | JsxAttribute | ShorthandPropertyAssignment | EnumMember | JSDocPropertyTag | JSDocParameterTag;
    export interface PropertyLikeDeclaration extends NamedDeclaration {
        name: PropertyName;
    }
    export interface ObjectBindingPattern extends Node {
        kind: SyntaxKind.ObjectBindingPattern;
        parent: VariableDeclaration | ParameterDeclaration | BindingElement;
        elements: NodeArray<BindingElement>;
    }
    export interface ArrayBindingPattern extends Node {
        kind: SyntaxKind.ArrayBindingPattern;
        parent: VariableDeclaration | ParameterDeclaration | BindingElement;
        elements: NodeArray<ArrayBindingElement>;
    }
    export type BindingPattern = ObjectBindingPattern | ArrayBindingPattern;
    export type ArrayBindingElement = BindingElement | OmittedExpression;
    export interface FunctionLikeDeclarationBase extends SignatureDeclarationBase {
        _functionLikeDeclarationBrand: any;
        asteriskToken?: AsteriskToken;
        questionToken?: QuestionToken;
        exclamationToken?: ExclamationToken;
        body?: Block | Expression;
        endFlowNode?: FlowNode;
    }
    export type FunctionLikeDeclaration = FunctionDeclaration | MethodDeclaration | GetAccessorDeclaration | SetAccessorDeclaration | ConstructorDeclaration | FunctionExpression | ArrowFunction;
    export type FunctionLike = SignatureDeclaration;
    export interface FunctionDeclaration extends FunctionLikeDeclarationBase, DeclarationStatement {
        kind: SyntaxKind.FunctionDeclaration;
        name?: Identifier;
        body?: FunctionBody;
    }
    export interface MethodSignature extends SignatureDeclarationBase, TypeElement {
        kind: SyntaxKind.MethodSignature;
        parent: ObjectTypeDeclaration;
        name: PropertyName;
    }
    export interface MethodDeclaration extends FunctionLikeDeclarationBase, ClassElement, ObjectLiteralElement, JSDocContainer {
        kind: SyntaxKind.MethodDeclaration;
        parent: ClassLikeDeclaration | ObjectLiteralExpression;
        name: PropertyName;
        body?: FunctionBody;
    }
    export interface ConstructorDeclaration extends FunctionLikeDeclarationBase, ClassElement, JSDocContainer {
        kind: SyntaxKind.Constructor;
        parent: ClassLikeDeclaration;
        body?: FunctionBody;
        returnFlowNode?: FlowNode;
    }
    export interface SemicolonClassElement extends ClassElement {
        kind: SyntaxKind.SemicolonClassElement;
        parent: ClassLikeDeclaration;
    }
    export interface GetAccessorDeclaration extends FunctionLikeDeclarationBase, ClassElement, ObjectLiteralElement, JSDocContainer {
        kind: SyntaxKind.GetAccessor;
        parent: ClassLikeDeclaration | ObjectLiteralExpression;
        name: PropertyName;
        body?: FunctionBody;
    }
    export interface SetAccessorDeclaration extends FunctionLikeDeclarationBase, ClassElement, ObjectLiteralElement, JSDocContainer {
        kind: SyntaxKind.SetAccessor;
        parent: ClassLikeDeclaration | ObjectLiteralExpression;
        name: PropertyName;
        body?: FunctionBody;
    }
    export type AccessorDeclaration = GetAccessorDeclaration | SetAccessorDeclaration;
    export interface IndexSignatureDeclaration extends SignatureDeclarationBase, ClassElement, TypeElement {
        kind: SyntaxKind.IndexSignature;
        parent: ObjectTypeDeclaration;
    }
    export interface TypeNode extends Node {
        _typeNodeBrand: any;
    }
    export interface KeywordTypeNode extends TypeNode {
        kind: SyntaxKind.AnyKeyword | SyntaxKind.UnknownKeyword | SyntaxKind.NumberKeyword | SyntaxKind.BigIntKeyword | SyntaxKind.ObjectKeyword | SyntaxKind.BooleanKeyword | SyntaxKind.StringKeyword | SyntaxKind.SymbolKeyword | SyntaxKind.ThisKeyword | SyntaxKind.VoidKeyword | SyntaxKind.UndefinedKeyword | SyntaxKind.NullKeyword | SyntaxKind.NeverKeyword;
    }
    export interface ImportTypeNode extends NodeWithTypeArguments {
        kind: SyntaxKind.ImportType;
        isTypeOf?: boolean;
        argument: TypeNode;
        qualifier?: EntityName;
    }
    export type LiteralImportTypeNode = ImportTypeNode & {
        argument: LiteralTypeNode & {
            literal: StringLiteral;
        };
    };
    export interface ThisTypeNode extends TypeNode {
        kind: SyntaxKind.ThisType;
    }
    export type FunctionOrConstructorTypeNode = FunctionTypeNode | ConstructorTypeNode;
    export interface FunctionOrConstructorTypeNodeBase extends TypeNode, SignatureDeclarationBase {
        kind: SyntaxKind.FunctionType | SyntaxKind.ConstructorType;
        type: TypeNode;
    }
    export interface FunctionTypeNode extends FunctionOrConstructorTypeNodeBase {
        kind: SyntaxKind.FunctionType;
    }
    export interface ConstructorTypeNode extends FunctionOrConstructorTypeNodeBase {
        kind: SyntaxKind.ConstructorType;
    }
    export interface NodeWithTypeArguments extends TypeNode {
        typeArguments?: NodeArray<TypeNode>;
    }
    export type TypeReferenceType = TypeReferenceNode | ExpressionWithTypeArguments;
    export interface TypeReferenceNode extends NodeWithTypeArguments {
        kind: SyntaxKind.TypeReference;
        typeName: EntityName;
    }
    export interface TypePredicateNode extends TypeNode {
        kind: SyntaxKind.TypePredicate;
        parent: SignatureDeclaration | JSDocTypeExpression;
        assertsModifier?: AssertsToken;
        parameterName: Identifier | ThisTypeNode;
        type?: TypeNode;
    }
    export interface TypeQueryNode extends TypeNode {
        kind: SyntaxKind.TypeQuery;
        exprName: EntityName;
    }
    export interface TypeLiteralNode extends TypeNode, Declaration {
        kind: SyntaxKind.TypeLiteral;
        members: NodeArray<TypeElement>;
    }
    export interface ArrayTypeNode extends TypeNode {
        kind: SyntaxKind.ArrayType;
        elementType: TypeNode;
    }
    export interface TupleTypeNode extends TypeNode {
        kind: SyntaxKind.TupleType;
        elementTypes: NodeArray<TypeNode>;
    }
    export interface OptionalTypeNode extends TypeNode {
        kind: SyntaxKind.OptionalType;
        type: TypeNode;
    }
    export interface RestTypeNode extends TypeNode {
        kind: SyntaxKind.RestType;
        type: TypeNode;
    }
    export type UnionOrIntersectionTypeNode = UnionTypeNode | IntersectionTypeNode;
    export interface UnionTypeNode extends TypeNode {
        kind: SyntaxKind.UnionType;
        types: NodeArray<TypeNode>;
    }
    export interface IntersectionTypeNode extends TypeNode {
        kind: SyntaxKind.IntersectionType;
        types: NodeArray<TypeNode>;
    }
    export interface ConditionalTypeNode extends TypeNode {
        kind: SyntaxKind.ConditionalType;
        checkType: TypeNode;
        extendsType: TypeNode;
        trueType: TypeNode;
        falseType: TypeNode;
    }
    export interface InferTypeNode extends TypeNode {
        kind: SyntaxKind.InferType;
        typeParameter: TypeParameterDeclaration;
    }
    export interface ParenthesizedTypeNode extends TypeNode {
        kind: SyntaxKind.ParenthesizedType;
        type: TypeNode;
    }
    export interface TypeOperatorNode extends TypeNode {
        kind: SyntaxKind.TypeOperator;
        operator: SyntaxKind.KeyOfKeyword | SyntaxKind.UniqueKeyword | SyntaxKind.ReadonlyKeyword;
        type: TypeNode;
    }
    export interface UniqueTypeOperatorNode extends TypeOperatorNode {
        operator: SyntaxKind.UniqueKeyword;
    }
    export interface IndexedAccessTypeNode extends TypeNode {
        kind: SyntaxKind.IndexedAccessType;
        objectType: TypeNode;
        indexType: TypeNode;
    }
    export interface MappedTypeNode extends TypeNode, Declaration {
        kind: SyntaxKind.MappedType;
        readonlyToken?: ReadonlyToken | PlusToken | MinusToken;
        typeParameter: TypeParameterDeclaration;
        questionToken?: QuestionToken | PlusToken | MinusToken;
        type?: TypeNode;
    }
    export interface LiteralTypeNode extends TypeNode {
        kind: SyntaxKind.LiteralType;
        literal: BooleanLiteral | LiteralExpression | PrefixUnaryExpression;
    }
    export interface StringLiteral extends LiteralExpression, Declaration {
        kind: SyntaxKind.StringLiteral;
        textSourceNode?: Identifier | StringLiteralLike | NumericLiteral;
        singleQuote?: boolean;
    }
    export type StringLiteralLike = StringLiteral | NoSubstitutionTemplateLiteral;
    export interface Expression extends Node {
        _expressionBrand: any;
    }
    export interface OmittedExpression extends Expression {
        kind: SyntaxKind.OmittedExpression;
    }
    export interface PartiallyEmittedExpression extends LeftHandSideExpression {
        kind: SyntaxKind.PartiallyEmittedExpression;
        expression: Expression;
    }
    export interface UnaryExpression extends Expression {
        _unaryExpressionBrand: any;
    }
    export type IncrementExpression = UpdateExpression;
    export interface UpdateExpression extends UnaryExpression {
        _updateExpressionBrand: any;
    }
    export type PrefixUnaryOperator = SyntaxKind.PlusPlusToken | SyntaxKind.MinusMinusToken | SyntaxKind.PlusToken | SyntaxKind.MinusToken | SyntaxKind.TildeToken | SyntaxKind.ExclamationToken;
    export interface PrefixUnaryExpression extends UpdateExpression {
        kind: SyntaxKind.PrefixUnaryExpression;
        operator: PrefixUnaryOperator;
        operand: UnaryExpression;
    }
    export type PostfixUnaryOperator = SyntaxKind.PlusPlusToken | SyntaxKind.MinusMinusToken;
    export interface PostfixUnaryExpression extends UpdateExpression {
        kind: SyntaxKind.PostfixUnaryExpression;
        operand: LeftHandSideExpression;
        operator: PostfixUnaryOperator;
    }
    export interface LeftHandSideExpression extends UpdateExpression {
        _leftHandSideExpressionBrand: any;
    }
    export interface MemberExpression extends LeftHandSideExpression {
        _memberExpressionBrand: any;
    }
    export interface PrimaryExpression extends MemberExpression {
        _primaryExpressionBrand: any;
    }
    export interface NullLiteral extends PrimaryExpression, TypeNode {
        kind: SyntaxKind.NullKeyword;
    }
    export interface BooleanLiteral extends PrimaryExpression, TypeNode {
        kind: SyntaxKind.TrueKeyword | SyntaxKind.FalseKeyword;
    }
    export interface ThisExpression extends PrimaryExpression, KeywordTypeNode {
        kind: SyntaxKind.ThisKeyword;
    }
    export interface SuperExpression extends PrimaryExpression {
        kind: SyntaxKind.SuperKeyword;
    }
    export interface ImportExpression extends PrimaryExpression {
        kind: SyntaxKind.ImportKeyword;
    }
    export interface DeleteExpression extends UnaryExpression {
        kind: SyntaxKind.DeleteExpression;
        expression: UnaryExpression;
    }
    export interface TypeOfExpression extends UnaryExpression {
        kind: SyntaxKind.TypeOfExpression;
        expression: UnaryExpression;
    }
    export interface VoidExpression extends UnaryExpression {
        kind: SyntaxKind.VoidExpression;
        expression: UnaryExpression;
    }
    export interface AwaitExpression extends UnaryExpression {
        kind: SyntaxKind.AwaitExpression;
        expression: UnaryExpression;
    }
    export interface YieldExpression extends Expression {
        kind: SyntaxKind.YieldExpression;
        asteriskToken?: AsteriskToken;
        expression?: Expression;
    }
    export interface SyntheticExpression extends Expression {
        kind: SyntaxKind.SyntheticExpression;
        isSpread: boolean;
        type: Type;
    }
    export type ExponentiationOperator = SyntaxKind.AsteriskAsteriskToken;
    export type MultiplicativeOperator = SyntaxKind.AsteriskToken | SyntaxKind.SlashToken | SyntaxKind.PercentToken;
    export type MultiplicativeOperatorOrHigher = ExponentiationOperator | MultiplicativeOperator;
    export type AdditiveOperator = SyntaxKind.PlusToken | SyntaxKind.MinusToken;
    export type AdditiveOperatorOrHigher = MultiplicativeOperatorOrHigher | AdditiveOperator;
    export type ShiftOperator = SyntaxKind.LessThanLessThanToken | SyntaxKind.GreaterThanGreaterThanToken | SyntaxKind.GreaterThanGreaterThanGreaterThanToken;
    export type ShiftOperatorOrHigher = AdditiveOperatorOrHigher | ShiftOperator;
    export type RelationalOperator = SyntaxKind.LessThanToken | SyntaxKind.LessThanEqualsToken | SyntaxKind.GreaterThanToken | SyntaxKind.GreaterThanEqualsToken | SyntaxKind.InstanceOfKeyword | SyntaxKind.InKeyword;
    export type RelationalOperatorOrHigher = ShiftOperatorOrHigher | RelationalOperator;
    export type EqualityOperator = SyntaxKind.EqualsEqualsToken | SyntaxKind.EqualsEqualsEqualsToken | SyntaxKind.ExclamationEqualsEqualsToken | SyntaxKind.ExclamationEqualsToken;
    export type EqualityOperatorOrHigher = RelationalOperatorOrHigher | EqualityOperator;
    export type BitwiseOperator = SyntaxKind.AmpersandToken | SyntaxKind.BarToken | SyntaxKind.CaretToken;
    export type BitwiseOperatorOrHigher = EqualityOperatorOrHigher | BitwiseOperator;
    export type LogicalOperator = SyntaxKind.AmpersandAmpersandToken | SyntaxKind.BarBarToken;
    export type LogicalOperatorOrHigher = BitwiseOperatorOrHigher | LogicalOperator;
    export type CompoundAssignmentOperator = SyntaxKind.PlusEqualsToken | SyntaxKind.MinusEqualsToken | SyntaxKind.AsteriskAsteriskEqualsToken | SyntaxKind.AsteriskEqualsToken | SyntaxKind.SlashEqualsToken | SyntaxKind.PercentEqualsToken | SyntaxKind.AmpersandEqualsToken | SyntaxKind.BarEqualsToken | SyntaxKind.CaretEqualsToken | SyntaxKind.LessThanLessThanEqualsToken | SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken | SyntaxKind.GreaterThanGreaterThanEqualsToken;
    export type AssignmentOperator = SyntaxKind.EqualsToken | CompoundAssignmentOperator;
    export type AssignmentOperatorOrHigher = SyntaxKind.QuestionQuestionToken | LogicalOperatorOrHigher | AssignmentOperator;
    export type BinaryOperator = AssignmentOperatorOrHigher | SyntaxKind.CommaToken;
    export type BinaryOperatorToken = Token<BinaryOperator>;
    export interface BinaryExpression extends Expression, Declaration {
        kind: SyntaxKind.BinaryExpression;
        left: Expression;
        operatorToken: BinaryOperatorToken;
        right: Expression;
    }
    export type AssignmentOperatorToken = Token<AssignmentOperator>;
    export interface AssignmentExpression<TOperator extends AssignmentOperatorToken> extends BinaryExpression {
        left: LeftHandSideExpression;
        operatorToken: TOperator;
    }
    export interface ObjectDestructuringAssignment extends AssignmentExpression<EqualsToken> {
        left: ObjectLiteralExpression;
    }
    export interface ArrayDestructuringAssignment extends AssignmentExpression<EqualsToken> {
        left: ArrayLiteralExpression;
    }
    export type DestructuringAssignment = ObjectDestructuringAssignment | ArrayDestructuringAssignment;
    export type BindingOrAssignmentElement = VariableDeclaration | ParameterDeclaration | BindingElement | PropertyAssignment | ShorthandPropertyAssignment | SpreadAssignment | OmittedExpression | SpreadElement | ArrayLiteralExpression | ObjectLiteralExpression | AssignmentExpression<EqualsToken> | Identifier | PropertyAccessExpression | ElementAccessExpression;
    export type BindingOrAssignmentElementRestIndicator = DotDotDotToken | SpreadElement | SpreadAssignment;
    export type BindingOrAssignmentElementTarget = BindingOrAssignmentPattern | Identifier | PropertyAccessExpression | ElementAccessExpression | OmittedExpression;
    export type ObjectBindingOrAssignmentPattern = ObjectBindingPattern | ObjectLiteralExpression;
    export type ArrayBindingOrAssignmentPattern = ArrayBindingPattern | ArrayLiteralExpression;
    export type AssignmentPattern = ObjectLiteralExpression | ArrayLiteralExpression;
    export type BindingOrAssignmentPattern = ObjectBindingOrAssignmentPattern | ArrayBindingOrAssignmentPattern;
    export interface ConditionalExpression extends Expression {
        kind: SyntaxKind.ConditionalExpression;
        condition: Expression;
        questionToken: QuestionToken;
        whenTrue: Expression;
        colonToken: ColonToken;
        whenFalse: Expression;
    }
    export type FunctionBody = Block;
    export type ConciseBody = FunctionBody | Expression;
    export interface FunctionExpression extends PrimaryExpression, FunctionLikeDeclarationBase, JSDocContainer {
        kind: SyntaxKind.FunctionExpression;
        name?: Identifier;
        body: FunctionBody;
    }
    export interface ArrowFunction extends Expression, FunctionLikeDeclarationBase, JSDocContainer {
        kind: SyntaxKind.ArrowFunction;
        equalsGreaterThanToken: EqualsGreaterThanToken;
        body: ConciseBody;
        name: never;
    }
    export interface LiteralLikeNode extends Node {
        text: string;
        isUnterminated?: boolean;
        hasExtendedUnicodeEscape?: boolean;
    }
    export interface TemplateLiteralLikeNode extends LiteralLikeNode {
        rawText?: string;
    }
    export interface LiteralExpression extends LiteralLikeNode, PrimaryExpression {
        _literalExpressionBrand: any;
    }
    export interface RegularExpressionLiteral extends LiteralExpression {
        kind: SyntaxKind.RegularExpressionLiteral;
    }
    export interface NoSubstitutionTemplateLiteral extends LiteralExpression, TemplateLiteralLikeNode, Declaration {
        kind: SyntaxKind.NoSubstitutionTemplateLiteral;
        templateFlags?: TokenFlags;
    }
    export const enum TokenFlags {
        None = 0,
        PrecedingLineBreak = 1,
        PrecedingJSDocComment = 2,
        Unterminated = 4,
        ExtendedUnicodeEscape = 8,
        Scientific = 16,
        Octal = 32,
        HexSpecifier = 64,
        BinarySpecifier = 128,
        OctalSpecifier = 256,
        ContainsSeparator = 512,
        UnicodeEscape = 1024,
        ContainsInvalidEscape = 2048,
        BinaryOrOctalSpecifier = 384,
        NumericLiteralFlags = 1008
    }
    export interface NumericLiteral extends LiteralExpression, Declaration {
        kind: SyntaxKind.NumericLiteral;
        numericLiteralFlags: TokenFlags;
    }
    export interface BigIntLiteral extends LiteralExpression {
        kind: SyntaxKind.BigIntLiteral;
    }
    export interface TemplateHead extends TemplateLiteralLikeNode {
        kind: SyntaxKind.TemplateHead;
        parent: TemplateExpression;
        templateFlags?: TokenFlags;
    }
    export interface TemplateMiddle extends TemplateLiteralLikeNode {
        kind: SyntaxKind.TemplateMiddle;
        parent: TemplateSpan;
        templateFlags?: TokenFlags;
    }
    export interface TemplateTail extends TemplateLiteralLikeNode {
        kind: SyntaxKind.TemplateTail;
        parent: TemplateSpan;
        templateFlags?: TokenFlags;
    }
    export type TemplateLiteral = TemplateExpression | NoSubstitutionTemplateLiteral;
    export interface TemplateExpression extends PrimaryExpression {
        kind: SyntaxKind.TemplateExpression;
        head: TemplateHead;
        templateSpans: NodeArray<TemplateSpan>;
    }
    export interface TemplateSpan extends Node {
        kind: SyntaxKind.TemplateSpan;
        parent: TemplateExpression;
        expression: Expression;
        literal: TemplateMiddle | TemplateTail;
    }
    export interface ParenthesizedExpression extends PrimaryExpression, JSDocContainer {
        kind: SyntaxKind.ParenthesizedExpression;
        expression: Expression;
    }
    export interface ArrayLiteralExpression extends PrimaryExpression {
        kind: SyntaxKind.ArrayLiteralExpression;
        elements: NodeArray<Expression>;
        multiLine?: boolean;
    }
    export interface SpreadElement extends Expression {
        kind: SyntaxKind.SpreadElement;
        parent: ArrayLiteralExpression | CallExpression | NewExpression;
        expression: Expression;
    }
    export interface ObjectLiteralExpressionBase<T extends ObjectLiteralElement> extends PrimaryExpression, Declaration {
        properties: NodeArray<T>;
    }
    export interface ObjectLiteralExpression extends ObjectLiteralExpressionBase<ObjectLiteralElementLike> {
        kind: SyntaxKind.ObjectLiteralExpression;
        multiLine?: boolean;
    }
    export type EntityNameExpression = Identifier | PropertyAccessEntityNameExpression;
    export type EntityNameOrEntityNameExpression = EntityName | EntityNameExpression;
    export type AccessExpression = PropertyAccessExpression | ElementAccessExpression;
    export interface PropertyAccessExpression extends MemberExpression, NamedDeclaration {
        kind: SyntaxKind.PropertyAccessExpression;
        expression: LeftHandSideExpression;
        questionDotToken?: QuestionDotToken;
        name: Identifier | PrivateIdentifier;
    }
    export interface PrivateIdentifierPropertyAccessExpression extends PropertyAccessExpression {
        name: PrivateIdentifier;
    }
    export interface PropertyAccessChain extends PropertyAccessExpression {
        _optionalChainBrand: any;
        name: Identifier;
    }
    export interface PropertyAccessChainRoot extends PropertyAccessChain {
        questionDotToken: QuestionDotToken;
    }
    export interface SuperPropertyAccessExpression extends PropertyAccessExpression {
        expression: SuperExpression;
    }
    export interface PropertyAccessEntityNameExpression extends PropertyAccessExpression {
        _propertyAccessExpressionLikeQualifiedNameBrand?: any;
        expression: EntityNameExpression;
        name: Identifier;
    }
    export interface ElementAccessExpression extends MemberExpression {
        kind: SyntaxKind.ElementAccessExpression;
        expression: LeftHandSideExpression;
        questionDotToken?: QuestionDotToken;
        argumentExpression: Expression;
    }
    export interface ElementAccessChain extends ElementAccessExpression {
        _optionalChainBrand: any;
    }
    export interface ElementAccessChainRoot extends ElementAccessChain {
        questionDotToken: QuestionDotToken;
    }
    export interface SuperElementAccessExpression extends ElementAccessExpression {
        expression: SuperExpression;
    }
    export type SuperProperty = SuperPropertyAccessExpression | SuperElementAccessExpression;
    export interface CallExpression extends LeftHandSideExpression, Declaration {
        kind: SyntaxKind.CallExpression;
        expression: LeftHandSideExpression;
        questionDotToken?: QuestionDotToken;
        typeArguments?: NodeArray<TypeNode>;
        arguments: NodeArray<Expression>;
    }
    export interface CallChain extends CallExpression {
        _optionalChainBrand: any;
    }
    export interface CallChainRoot extends CallChain {
        questionDotToken: QuestionDotToken;
    }
    export type OptionalChain = PropertyAccessChain | ElementAccessChain | CallChain;
    export type OptionalChainRoot = PropertyAccessChainRoot | ElementAccessChainRoot | CallChainRoot;
    export interface WellKnownSymbolExpression extends PropertyAccessExpression {
        expression: Identifier & {
            escapedText: "Symbol";
        };
        name: Identifier;
    }
    export type BindableObjectDefinePropertyCall = CallExpression & {
        arguments: {
            0: BindableStaticNameExpression;
            1: StringLiteralLike | NumericLiteral;
            2: ObjectLiteralExpression;
        };
    };
    export type BindableStaticNameExpression = EntityNameExpression | BindableStaticElementAccessExpression;
    export type LiteralLikeElementAccessExpression = ElementAccessExpression & Declaration & {
        argumentExpression: StringLiteralLike | NumericLiteral | WellKnownSymbolExpression;
    };
    export type BindableStaticElementAccessExpression = LiteralLikeElementAccessExpression & {
        expression: BindableStaticNameExpression;
    };
    export type BindableElementAccessExpression = ElementAccessExpression & {
        expression: BindableStaticNameExpression;
    };
    export type BindableStaticAccessExpression = PropertyAccessEntityNameExpression | BindableStaticElementAccessExpression;
    export type BindableAccessExpression = PropertyAccessEntityNameExpression | BindableElementAccessExpression;
    export interface BindableStaticPropertyAssignmentExpression extends BinaryExpression {
        left: BindableStaticAccessExpression;
    }
    export interface BindablePropertyAssignmentExpression extends BinaryExpression {
        left: BindableAccessExpression;
    }
    export interface SuperCall extends CallExpression {
        expression: SuperExpression;
    }
    export interface ImportCall extends CallExpression {
        expression: ImportExpression;
    }
    export interface ExpressionWithTypeArguments extends NodeWithTypeArguments {
        kind: SyntaxKind.ExpressionWithTypeArguments;
        parent: HeritageClause | JSDocAugmentsTag | JSDocImplementsTag;
        expression: LeftHandSideExpression;
    }
    export interface NewExpression extends PrimaryExpression, Declaration {
        kind: SyntaxKind.NewExpression;
        expression: LeftHandSideExpression;
        typeArguments?: NodeArray<TypeNode>;
        arguments?: NodeArray<Expression>;
    }
    export interface TaggedTemplateExpression extends MemberExpression {
        kind: SyntaxKind.TaggedTemplateExpression;
        tag: LeftHandSideExpression;
        typeArguments?: NodeArray<TypeNode>;
        template: TemplateLiteral;
        questionDotToken?: QuestionDotToken;
    }
    export type CallLikeExpression = CallExpression | NewExpression | TaggedTemplateExpression | Decorator | JsxOpeningLikeElement;
    export interface AsExpression extends Expression {
        kind: SyntaxKind.AsExpression;
        expression: Expression;
        type: TypeNode;
    }
    export interface TypeAssertion extends UnaryExpression {
        kind: SyntaxKind.TypeAssertionExpression;
        type: TypeNode;
        expression: UnaryExpression;
    }
    export type AssertionExpression = TypeAssertion | AsExpression;
    export interface NonNullExpression extends LeftHandSideExpression {
        kind: SyntaxKind.NonNullExpression;
        expression: Expression;
    }
    export interface MetaProperty extends PrimaryExpression {
        kind: SyntaxKind.MetaProperty;
        keywordToken: SyntaxKind.NewKeyword | SyntaxKind.ImportKeyword;
        name: Identifier;
    }
    export interface ImportMetaProperty extends MetaProperty {
        keywordToken: SyntaxKind.ImportKeyword;
        name: Identifier & {
            escapedText: __String & "meta";
        };
    }
    export interface JsxElement extends PrimaryExpression {
        kind: SyntaxKind.JsxElement;
        openingElement: JsxOpeningElement;
        children: NodeArray<JsxChild>;
        closingElement: JsxClosingElement;
    }
    export type JsxOpeningLikeElement = JsxSelfClosingElement | JsxOpeningElement;
    export type JsxAttributeLike = JsxAttribute | JsxSpreadAttribute;
    export type JsxTagNameExpression = Identifier | ThisExpression | JsxTagNamePropertyAccess;
    export interface JsxTagNamePropertyAccess extends PropertyAccessExpression {
        expression: JsxTagNameExpression;
    }
    export interface JsxAttributes extends ObjectLiteralExpressionBase<JsxAttributeLike> {
        kind: SyntaxKind.JsxAttributes;
        parent: JsxOpeningLikeElement;
    }
    export interface JsxOpeningElement extends Expression {
        kind: SyntaxKind.JsxOpeningElement;
        parent: JsxElement;
        tagName: JsxTagNameExpression;
        typeArguments?: NodeArray<TypeNode>;
        attributes: JsxAttributes;
    }
    export interface JsxSelfClosingElement extends PrimaryExpression {
        kind: SyntaxKind.JsxSelfClosingElement;
        tagName: JsxTagNameExpression;
        typeArguments?: NodeArray<TypeNode>;
        attributes: JsxAttributes;
    }
    export interface JsxFragment extends PrimaryExpression {
        kind: SyntaxKind.JsxFragment;
        openingFragment: JsxOpeningFragment;
        children: NodeArray<JsxChild>;
        closingFragment: JsxClosingFragment;
    }
    export interface JsxOpeningFragment extends Expression {
        kind: SyntaxKind.JsxOpeningFragment;
        parent: JsxFragment;
    }
    export interface JsxClosingFragment extends Expression {
        kind: SyntaxKind.JsxClosingFragment;
        parent: JsxFragment;
    }
    export interface JsxAttribute extends ObjectLiteralElement {
        kind: SyntaxKind.JsxAttribute;
        parent: JsxAttributes;
        name: Identifier;
        initializer?: StringLiteral | JsxExpression;
    }
    export interface JsxSpreadAttribute extends ObjectLiteralElement {
        kind: SyntaxKind.JsxSpreadAttribute;
        parent: JsxAttributes;
        expression: Expression;
    }
    export interface JsxClosingElement extends Node {
        kind: SyntaxKind.JsxClosingElement;
        parent: JsxElement;
        tagName: JsxTagNameExpression;
    }
    export interface JsxExpression extends Expression {
        kind: SyntaxKind.JsxExpression;
        parent: JsxElement | JsxAttributeLike;
        dotDotDotToken?: Token<SyntaxKind.DotDotDotToken>;
        expression?: Expression;
    }
    export interface JsxText extends LiteralLikeNode {
        kind: SyntaxKind.JsxText;
        containsOnlyTriviaWhiteSpaces: boolean;
        parent: JsxElement;
    }
    export type JsxChild = JsxText | JsxExpression | JsxElement | JsxSelfClosingElement | JsxFragment;
    export interface Statement extends Node {
        _statementBrand: any;
    }
    export interface NotEmittedStatement extends Statement {
        kind: SyntaxKind.NotEmittedStatement;
    }
    export interface EndOfDeclarationMarker extends Statement {
        kind: SyntaxKind.EndOfDeclarationMarker;
    }
    export interface CommaListExpression extends Expression {
        kind: SyntaxKind.CommaListExpression;
        elements: NodeArray<Expression>;
    }
    export interface MergeDeclarationMarker extends Statement {
        kind: SyntaxKind.MergeDeclarationMarker;
    }
    export interface SyntheticReferenceExpression extends LeftHandSideExpression {
        kind: SyntaxKind.SyntheticReferenceExpression;
        expression: Expression;
        thisArg: Expression;
    }
    export interface EmptyStatement extends Statement {
        kind: SyntaxKind.EmptyStatement;
    }
    export interface DebuggerStatement extends Statement {
        kind: SyntaxKind.DebuggerStatement;
    }
    export interface MissingDeclaration extends DeclarationStatement {
        kind: SyntaxKind.MissingDeclaration;
        name?: Identifier;
    }
    export type BlockLike = SourceFile | Block | ModuleBlock | CaseOrDefaultClause;
    export interface Block extends Statement {
        kind: SyntaxKind.Block;
        statements: NodeArray<Statement>;
        multiLine?: boolean;
    }
    export interface VariableStatement extends Statement, JSDocContainer {
        kind: SyntaxKind.VariableStatement;
        declarationList: VariableDeclarationList;
    }
    export interface ExpressionStatement extends Statement, JSDocContainer {
        kind: SyntaxKind.ExpressionStatement;
        expression: Expression;
    }
    export interface PrologueDirective extends ExpressionStatement {
        expression: StringLiteral;
    }
    export interface IfStatement extends Statement {
        kind: SyntaxKind.IfStatement;
        expression: Expression;
        thenStatement: Statement;
        elseStatement?: Statement;
    }
    export interface IterationStatement extends Statement {
        statement: Statement;
    }
    export interface DoStatement extends IterationStatement {
        kind: SyntaxKind.DoStatement;
        expression: Expression;
    }
    export interface WhileStatement extends IterationStatement {
        kind: SyntaxKind.WhileStatement;
        expression: Expression;
    }
    export type ForInitializer = VariableDeclarationList | Expression;
    export interface ForStatement extends IterationStatement {
        kind: SyntaxKind.ForStatement;
        initializer?: ForInitializer;
        condition?: Expression;
        incrementor?: Expression;
    }
    export type ForInOrOfStatement = ForInStatement | ForOfStatement;
    export interface ForInStatement extends IterationStatement {
        kind: SyntaxKind.ForInStatement;
        initializer: ForInitializer;
        expression: Expression;
    }
    export interface ForOfStatement extends IterationStatement {
        kind: SyntaxKind.ForOfStatement;
        awaitModifier?: AwaitKeywordToken;
        initializer: ForInitializer;
        expression: Expression;
    }
    export interface BreakStatement extends Statement {
        kind: SyntaxKind.BreakStatement;
        label?: Identifier;
    }
    export interface ContinueStatement extends Statement {
        kind: SyntaxKind.ContinueStatement;
        label?: Identifier;
    }
    export type BreakOrContinueStatement = BreakStatement | ContinueStatement;
    export interface ReturnStatement extends Statement {
        kind: SyntaxKind.ReturnStatement;
        expression?: Expression;
    }
    export interface WithStatement extends Statement {
        kind: SyntaxKind.WithStatement;
        expression: Expression;
        statement: Statement;
    }
    export interface SwitchStatement extends Statement {
        kind: SyntaxKind.SwitchStatement;
        expression: Expression;
        caseBlock: CaseBlock;
        possiblyExhaustive?: boolean;
    }
    export interface CaseBlock extends Node {
        kind: SyntaxKind.CaseBlock;
        parent: SwitchStatement;
        clauses: NodeArray<CaseOrDefaultClause>;
    }
    export interface CaseClause extends Node {
        kind: SyntaxKind.CaseClause;
        parent: CaseBlock;
        expression: Expression;
        statements: NodeArray<Statement>;
        fallthroughFlowNode?: FlowNode;
    }
    export interface DefaultClause extends Node {
        kind: SyntaxKind.DefaultClause;
        parent: CaseBlock;
        statements: NodeArray<Statement>;
        fallthroughFlowNode?: FlowNode;
    }
    export type CaseOrDefaultClause = CaseClause | DefaultClause;
    export interface LabeledStatement extends Statement, JSDocContainer {
        kind: SyntaxKind.LabeledStatement;
        label: Identifier;
        statement: Statement;
    }
    export interface ThrowStatement extends Statement {
        kind: SyntaxKind.ThrowStatement;
        expression?: Expression;
    }
    export interface TryStatement extends Statement {
        kind: SyntaxKind.TryStatement;
        tryBlock: Block;
        catchClause?: CatchClause;
        finallyBlock?: Block;
    }
    export interface CatchClause extends Node {
        kind: SyntaxKind.CatchClause;
        parent: TryStatement;
        variableDeclaration?: VariableDeclaration;
        block: Block;
    }
    export type ObjectTypeDeclaration = ClassLikeDeclaration | InterfaceDeclaration | TypeLiteralNode;
    export type DeclarationWithTypeParameters = DeclarationWithTypeParameterChildren | JSDocTypedefTag | JSDocCallbackTag | JSDocSignature;
    export type DeclarationWithTypeParameterChildren = SignatureDeclaration | ClassLikeDeclaration | InterfaceDeclaration | TypeAliasDeclaration | JSDocTemplateTag;
    export interface ClassLikeDeclarationBase extends NamedDeclaration, JSDocContainer {
        kind: SyntaxKind.ClassDeclaration | SyntaxKind.ClassExpression;
        name?: Identifier;
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        heritageClauses?: NodeArray<HeritageClause>;
        members: NodeArray<ClassElement>;
    }
    export interface ClassDeclaration extends ClassLikeDeclarationBase, DeclarationStatement {
        kind: SyntaxKind.ClassDeclaration;
        name?: Identifier;
    }
    export interface ClassExpression extends ClassLikeDeclarationBase, PrimaryExpression {
        kind: SyntaxKind.ClassExpression;
    }
    export type ClassLikeDeclaration = ClassDeclaration | ClassExpression;
    export interface ClassElement extends NamedDeclaration {
        _classElementBrand: any;
        name?: PropertyName;
    }
    export interface TypeElement extends NamedDeclaration {
        _typeElementBrand: any;
        name?: PropertyName;
        questionToken?: QuestionToken;
    }
    export interface InterfaceDeclaration extends DeclarationStatement, JSDocContainer {
        kind: SyntaxKind.InterfaceDeclaration;
        name: Identifier;
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        heritageClauses?: NodeArray<HeritageClause>;
        members: NodeArray<TypeElement>;
    }
    export interface HeritageClause extends Node {
        kind: SyntaxKind.HeritageClause;
        parent: InterfaceDeclaration | ClassLikeDeclaration;
        token: SyntaxKind.ExtendsKeyword | SyntaxKind.ImplementsKeyword;
        types: NodeArray<ExpressionWithTypeArguments>;
    }
    export interface TypeAliasDeclaration extends DeclarationStatement, JSDocContainer {
        kind: SyntaxKind.TypeAliasDeclaration;
        name: Identifier;
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        type: TypeNode;
    }
    export interface EnumMember extends NamedDeclaration, JSDocContainer {
        kind: SyntaxKind.EnumMember;
        parent: EnumDeclaration;
        name: PropertyName;
        initializer?: Expression;
    }
    export interface EnumDeclaration extends DeclarationStatement, JSDocContainer {
        kind: SyntaxKind.EnumDeclaration;
        name: Identifier;
        members: NodeArray<EnumMember>;
    }
    export type ModuleName = Identifier | StringLiteral;
    export type ModuleBody = NamespaceBody | JSDocNamespaceBody;
    export interface AmbientModuleDeclaration extends ModuleDeclaration {
        body?: ModuleBlock;
    }
    export interface ModuleDeclaration extends DeclarationStatement, JSDocContainer {
        kind: SyntaxKind.ModuleDeclaration;
        parent: ModuleBody | SourceFile;
        name: ModuleName;
        body?: ModuleBody | JSDocNamespaceDeclaration;
    }
    export type NamespaceBody = ModuleBlock | NamespaceDeclaration;
    export interface NamespaceDeclaration extends ModuleDeclaration {
        name: Identifier;
        body: NamespaceBody;
    }
    export type JSDocNamespaceBody = Identifier | JSDocNamespaceDeclaration;
    export interface JSDocNamespaceDeclaration extends ModuleDeclaration {
        name: Identifier;
        body?: JSDocNamespaceBody;
    }
    export interface ModuleBlock extends Node, Statement {
        kind: SyntaxKind.ModuleBlock;
        parent: ModuleDeclaration;
        statements: NodeArray<Statement>;
    }
    export type ModuleReference = EntityName | ExternalModuleReference;
    export interface ImportEqualsDeclaration extends DeclarationStatement, JSDocContainer {
        kind: SyntaxKind.ImportEqualsDeclaration;
        parent: SourceFile | ModuleBlock;
        name: Identifier;
        moduleReference: ModuleReference;
    }
    export interface ExternalModuleReference extends Node {
        kind: SyntaxKind.ExternalModuleReference;
        parent: ImportEqualsDeclaration;
        expression: Expression;
    }
    export interface ImportDeclaration extends Statement {
        kind: SyntaxKind.ImportDeclaration;
        parent: SourceFile | ModuleBlock;
        importClause?: ImportClause;
        moduleSpecifier: Expression;
    }
    export type NamedImportBindings = NamespaceImport | NamedImports;
    export type NamedExportBindings = NamespaceExport | NamedExports;
    export interface ImportClause extends NamedDeclaration {
        kind: SyntaxKind.ImportClause;
        parent: ImportDeclaration;
        isTypeOnly: boolean;
        name?: Identifier;
        namedBindings?: NamedImportBindings;
    }
    export interface NamespaceImport extends NamedDeclaration {
        kind: SyntaxKind.NamespaceImport;
        parent: ImportClause;
        name: Identifier;
    }
    export interface NamespaceExport extends NamedDeclaration {
        kind: SyntaxKind.NamespaceExport;
        parent: ExportDeclaration;
        name: Identifier;
    }
    export interface NamespaceExportDeclaration extends DeclarationStatement {
        kind: SyntaxKind.NamespaceExportDeclaration;
        name: Identifier;
    }
    export interface ExportDeclaration extends DeclarationStatement, JSDocContainer {
        kind: SyntaxKind.ExportDeclaration;
        parent: SourceFile | ModuleBlock;
        isTypeOnly: boolean;
        exportClause?: NamedExportBindings;
        moduleSpecifier?: Expression;
    }
    export interface NamedImports extends Node {
        kind: SyntaxKind.NamedImports;
        parent: ImportClause;
        elements: NodeArray<ImportSpecifier>;
    }
    export interface NamedExports extends Node {
        kind: SyntaxKind.NamedExports;
        parent: ExportDeclaration;
        elements: NodeArray<ExportSpecifier>;
    }
    export type NamedImportsOrExports = NamedImports | NamedExports;
    export interface ImportSpecifier extends NamedDeclaration {
        kind: SyntaxKind.ImportSpecifier;
        parent: NamedImports;
        propertyName?: Identifier;
        name: Identifier;
    }
    export interface ExportSpecifier extends NamedDeclaration {
        kind: SyntaxKind.ExportSpecifier;
        parent: NamedExports;
        propertyName?: Identifier;
        name: Identifier;
    }
    export type ImportOrExportSpecifier = ImportSpecifier | ExportSpecifier;
    export type TypeOnlyCompatibleAliasDeclaration = ImportClause | NamespaceImport | ImportOrExportSpecifier;
    export interface ExportAssignment extends DeclarationStatement {
        kind: SyntaxKind.ExportAssignment;
        parent: SourceFile;
        isExportEquals?: boolean;
        expression: Expression;
    }
    export interface FileReference extends TextRange {
        fileName: string;
    }
    export interface CheckJsDirective extends TextRange {
        enabled: boolean;
    }
    export type CommentKind = SyntaxKind.SingleLineCommentTrivia | SyntaxKind.MultiLineCommentTrivia;
    export interface CommentRange extends TextRange {
        hasTrailingNewLine?: boolean;
        kind: CommentKind;
    }
    export interface SynthesizedComment extends CommentRange {
        text: string;
        pos: -1;
        end: -1;
    }
    export interface JSDocTypeExpression extends TypeNode {
        kind: SyntaxKind.JSDocTypeExpression;
        type: TypeNode;
    }
    export interface JSDocType extends TypeNode {
        _jsDocTypeBrand: any;
    }
    export interface JSDocAllType extends JSDocType {
        kind: SyntaxKind.JSDocAllType;
    }
    export interface JSDocUnknownType extends JSDocType {
        kind: SyntaxKind.JSDocUnknownType;
    }
    export interface JSDocNonNullableType extends JSDocType {
        kind: SyntaxKind.JSDocNonNullableType;
        type: TypeNode;
    }
    export interface JSDocNullableType extends JSDocType {
        kind: SyntaxKind.JSDocNullableType;
        type: TypeNode;
    }
    export interface JSDocOptionalType extends JSDocType {
        kind: SyntaxKind.JSDocOptionalType;
        type: TypeNode;
    }
    export interface JSDocFunctionType extends JSDocType, SignatureDeclarationBase {
        kind: SyntaxKind.JSDocFunctionType;
    }
    export interface JSDocVariadicType extends JSDocType {
        kind: SyntaxKind.JSDocVariadicType;
        type: TypeNode;
    }
    export interface JSDocNamepathType extends JSDocType {
        kind: SyntaxKind.JSDocNamepathType;
        type: TypeNode;
    }
    export type JSDocTypeReferencingNode = JSDocVariadicType | JSDocOptionalType | JSDocNullableType | JSDocNonNullableType;
    export interface JSDoc extends Node {
        kind: SyntaxKind.JSDocComment;
        parent: HasJSDoc;
        tags?: NodeArray<JSDocTag>;
        comment?: string;
    }
    export interface JSDocTag extends Node {
        parent: JSDoc | JSDocTypeLiteral;
        tagName: Identifier;
        comment?: string;
    }
    export interface JSDocUnknownTag extends JSDocTag {
        kind: SyntaxKind.JSDocTag;
    }
    export interface JSDocAugmentsTag extends JSDocTag {
        kind: SyntaxKind.JSDocAugmentsTag;
        class: ExpressionWithTypeArguments & {
            expression: Identifier | PropertyAccessEntityNameExpression;
        };
    }
    export interface JSDocImplementsTag extends JSDocTag {
        kind: SyntaxKind.JSDocImplementsTag;
        class: ExpressionWithTypeArguments & {
            expression: Identifier | PropertyAccessEntityNameExpression;
        };
    }
    export interface JSDocAuthorTag extends JSDocTag {
        kind: SyntaxKind.JSDocAuthorTag;
    }
    export interface JSDocClassTag extends JSDocTag {
        kind: SyntaxKind.JSDocClassTag;
    }
    export interface JSDocPublicTag extends JSDocTag {
        kind: SyntaxKind.JSDocPublicTag;
    }
    export interface JSDocPrivateTag extends JSDocTag {
        kind: SyntaxKind.JSDocPrivateTag;
    }
    export interface JSDocProtectedTag extends JSDocTag {
        kind: SyntaxKind.JSDocProtectedTag;
    }
    export interface JSDocReadonlyTag extends JSDocTag {
        kind: SyntaxKind.JSDocReadonlyTag;
    }
    export interface JSDocEnumTag extends JSDocTag, Declaration {
        parent: JSDoc;
        kind: SyntaxKind.JSDocEnumTag;
        typeExpression?: JSDocTypeExpression;
    }
    export interface JSDocThisTag extends JSDocTag {
        kind: SyntaxKind.JSDocThisTag;
        typeExpression?: JSDocTypeExpression;
    }
    export interface JSDocTemplateTag extends JSDocTag {
        kind: SyntaxKind.JSDocTemplateTag;
        constraint: JSDocTypeExpression | undefined;
        typeParameters: NodeArray<TypeParameterDeclaration>;
    }
    export interface JSDocReturnTag extends JSDocTag {
        kind: SyntaxKind.JSDocReturnTag;
        typeExpression?: JSDocTypeExpression;
    }
    export interface JSDocTypeTag extends JSDocTag {
        kind: SyntaxKind.JSDocTypeTag;
        typeExpression: JSDocTypeExpression;
    }
    export interface JSDocTypedefTag extends JSDocTag, NamedDeclaration {
        parent: JSDoc;
        kind: SyntaxKind.JSDocTypedefTag;
        fullName?: JSDocNamespaceDeclaration | Identifier;
        name?: Identifier;
        typeExpression?: JSDocTypeExpression | JSDocTypeLiteral;
    }
    export interface JSDocCallbackTag extends JSDocTag, NamedDeclaration {
        parent: JSDoc;
        kind: SyntaxKind.JSDocCallbackTag;
        fullName?: JSDocNamespaceDeclaration | Identifier;
        name?: Identifier;
        typeExpression: JSDocSignature;
    }
    export interface JSDocSignature extends JSDocType, Declaration {
        kind: SyntaxKind.JSDocSignature;
        typeParameters?: readonly JSDocTemplateTag[];
        parameters: readonly JSDocParameterTag[];
        type: JSDocReturnTag | undefined;
    }
    export interface JSDocPropertyLikeTag extends JSDocTag, Declaration {
        parent: JSDoc;
        name: EntityName;
        typeExpression?: JSDocTypeExpression;
        isNameFirst: boolean;
        isBracketed: boolean;
    }
    export interface JSDocPropertyTag extends JSDocPropertyLikeTag {
        kind: SyntaxKind.JSDocPropertyTag;
    }
    export interface JSDocParameterTag extends JSDocPropertyLikeTag {
        kind: SyntaxKind.JSDocParameterTag;
    }
    export interface JSDocTypeLiteral extends JSDocType {
        kind: SyntaxKind.JSDocTypeLiteral;
        jsDocPropertyTags?: readonly JSDocPropertyLikeTag[];
        isArrayType?: boolean;
    }
    export const enum FlowFlags {
        Unreachable = 1,
        Start = 2,
        BranchLabel = 4,
        LoopLabel = 8,
        Assignment = 16,
        TrueCondition = 32,
        FalseCondition = 64,
        SwitchClause = 128,
        ArrayMutation = 256,
        Call = 512,
        ReduceLabel = 1024,
        Referenced = 2048,
        Shared = 4096,
        Label = 12,
        Condition = 96
    }
    export type FlowNode = AfterFinallyFlow | PreFinallyFlow | FlowStart | FlowLabel | FlowAssignment | FlowCall | FlowCondition | FlowSwitchClause | FlowArrayMutation;
    export interface FlowNodeBase {
        flags: FlowFlags;
        id?: number;
    }
    export interface FlowLock {
        locked?: boolean;
    }
    export interface AfterFinallyFlow extends FlowNodeBase, FlowLock {
        antecedent: FlowNode;
    }
    export interface PreFinallyFlow extends FlowNodeBase {
        antecedent: FlowNode;
        lock: FlowLock;
    }
    export interface FlowStart extends FlowNodeBase {
        node?: FunctionExpression | ArrowFunction | MethodDeclaration;
    }
    export interface FlowLabel extends FlowNodeBase {
        antecedents: FlowNode[] | undefined;
    }
    export interface FlowAssignment extends FlowNodeBase {
        node: Expression | VariableDeclaration | BindingElement;
        antecedent: FlowNode;
    }
    export interface FlowCall extends FlowNodeBase {
        node: CallExpression;
        antecedent: FlowNode;
    }
    export interface FlowCondition extends FlowNodeBase {
        node: Expression;
        antecedent: FlowNode;
    }
    export interface FlowSwitchClause extends FlowNodeBase {
        switchStatement: SwitchStatement;
        clauseStart: number;
        clauseEnd: number;
        antecedent: FlowNode;
    }
    export interface FlowArrayMutation extends FlowNodeBase {
        node: CallExpression | BinaryExpression;
        antecedent: FlowNode;
    }
    export interface FlowReduceLabel extends FlowNodeBase {
        target: FlowLabel;
        antecedents: FlowNode[];
        antecedent: FlowNode;
    }
    export type FlowType = Type | IncompleteType;
    export interface IncompleteType {
        flags: TypeFlags;
        type: Type;
    }
    export interface AmdDependency {
        path: string;
        name?: string;
    }
    export interface SourceFileLike {
        readonly text: string;
        lineMap?: readonly number[];
        getPositionOfLineAndCharacter?(line: number, character: number, allowEdits?: true): number;
    }
    export interface RedirectInfo {
        readonly redirectTarget: SourceFile;
        readonly unredirected: SourceFile;
    }
    export interface SourceFile extends Declaration {
        kind: SyntaxKind.SourceFile;
        statements: NodeArray<Statement>;
        endOfFileToken: Token<SyntaxKind.EndOfFileToken>;
        fileName: string;
        path: Path;
        text: string;
        resolvedPath: Path;
        originalFileName: string;
        redirectInfo?: RedirectInfo;
        amdDependencies: readonly AmdDependency[];
        moduleName?: string;
        referencedFiles: readonly FileReference[];
        typeReferenceDirectives: readonly FileReference[];
        libReferenceDirectives: readonly FileReference[];
        languageVariant: LanguageVariant;
        isDeclarationFile: boolean;
        renamedDependencies?: ReadonlyMap<string>;
        hasNoDefaultLib: boolean;
        languageVersion: ScriptTarget;
        scriptKind: ScriptKind;
        externalModuleIndicator?: Node;
        commonJsModuleIndicator?: Node;
        jsGlobalAugmentations?: SymbolTable;
        identifiers: Map<string>;
        nodeCount: number;
        identifierCount: number;
        symbolCount: number;
        parseDiagnostics: DiagnosticWithLocation[];
        bindDiagnostics: DiagnosticWithLocation[];
        bindSuggestionDiagnostics?: DiagnosticWithLocation[];
        jsDocDiagnostics?: DiagnosticWithLocation[];
        additionalSyntacticDiagnostics?: readonly DiagnosticWithLocation[];
        lineMap: readonly number[];
        classifiableNames?: ReadonlyUnderscoreEscapedMap<true>;
        commentDirectives?: CommentDirective[];
        resolvedModules?: Map<ResolvedModuleFull | undefined>;
        resolvedTypeReferenceDirectiveNames: Map<ResolvedTypeReferenceDirective | undefined>;
        imports: readonly StringLiteralLike[];
        moduleAugmentations: readonly (StringLiteral | Identifier)[];
        patternAmbientModules?: PatternAmbientModule[];
        ambientModuleNames: readonly string[];
        checkJsDirective?: CheckJsDirective;
        version: string;
        pragmas: ReadonlyPragmaMap;
        localJsxNamespace?: __String;
        localJsxFactory?: EntityName;
        exportedModulesFromDeclarationEmit?: ExportedModulesFromDeclarationEmit;
    }
    export interface CommentDirective {
        range: TextRange;
        type: CommentDirectiveType;
    }
    export const enum CommentDirectiveType {
        ExpectError = 0,
        Ignore = 1
    }
    export type ExportedModulesFromDeclarationEmit = readonly Symbol[];
    export interface Bundle extends Node {
        kind: SyntaxKind.Bundle;
        prepends: readonly (InputFiles | UnparsedSource)[];
        sourceFiles: readonly SourceFile[];
        syntheticFileReferences?: readonly FileReference[];
        syntheticTypeReferences?: readonly FileReference[];
        syntheticLibReferences?: readonly FileReference[];
        hasNoDefaultLib?: boolean;
    }
    export interface InputFiles extends Node {
        kind: SyntaxKind.InputFiles;
        javascriptPath?: string;
        javascriptText: string;
        javascriptMapPath?: string;
        javascriptMapText?: string;
        declarationPath?: string;
        declarationText: string;
        declarationMapPath?: string;
        declarationMapText?: string;
        buildInfoPath?: string;
        buildInfo?: BuildInfo;
        oldFileOfCurrentEmit?: boolean;
    }
    export interface UnparsedSource extends Node {
        kind: SyntaxKind.UnparsedSource;
        fileName: string;
        text: string;
        prologues: readonly UnparsedPrologue[];
        helpers: readonly UnscopedEmitHelper[] | undefined;
        referencedFiles: readonly FileReference[];
        typeReferenceDirectives: readonly string[] | undefined;
        libReferenceDirectives: readonly FileReference[];
        hasNoDefaultLib?: boolean;
        sourceMapPath?: string;
        sourceMapText?: string;
        syntheticReferences?: readonly UnparsedSyntheticReference[];
        texts: readonly UnparsedSourceText[];
        oldFileOfCurrentEmit?: boolean;
        parsedSourceMap?: RawSourceMap | false | undefined;
        getLineAndCharacterOfPosition(pos: number): LineAndCharacter;
    }
    export type UnparsedSourceText = UnparsedPrepend | UnparsedTextLike;
    export type UnparsedNode = UnparsedPrologue | UnparsedSourceText | UnparsedSyntheticReference;
    export interface UnparsedSection extends Node {
        kind: SyntaxKind;
        data?: string;
        parent: UnparsedSource;
    }
    export interface UnparsedPrologue extends UnparsedSection {
        kind: SyntaxKind.UnparsedPrologue;
        data: string;
        parent: UnparsedSource;
    }
    export interface UnparsedPrepend extends UnparsedSection {
        kind: SyntaxKind.UnparsedPrepend;
        data: string;
        parent: UnparsedSource;
        texts: readonly UnparsedTextLike[];
    }
    export interface UnparsedTextLike extends UnparsedSection {
        kind: SyntaxKind.UnparsedText | SyntaxKind.UnparsedInternalText;
        parent: UnparsedSource;
    }
    export interface UnparsedSyntheticReference extends UnparsedSection {
        kind: SyntaxKind.UnparsedSyntheticReference;
        parent: UnparsedSource;
        section: BundleFileHasNoDefaultLib | BundleFileReference;
    }
    export interface JsonSourceFile extends SourceFile {
        statements: NodeArray<JsonObjectExpressionStatement>;
    }
    export interface TsConfigSourceFile extends JsonSourceFile {
        extendedSourceFiles?: string[];
    }
    export interface JsonMinusNumericLiteral extends PrefixUnaryExpression {
        kind: SyntaxKind.PrefixUnaryExpression;
        operator: SyntaxKind.MinusToken;
        operand: NumericLiteral;
    }
    export interface JsonObjectExpressionStatement extends ExpressionStatement {
        expression: ObjectLiteralExpression | ArrayLiteralExpression | JsonMinusNumericLiteral | NumericLiteral | StringLiteral | BooleanLiteral | NullLiteral;
    }
    export interface ScriptReferenceHost {
        getCompilerOptions(): CompilerOptions;
        getSourceFile(fileName: string): SourceFile | undefined;
        getSourceFileByPath(path: Path): SourceFile | undefined;
        getCurrentDirectory(): string;
    }
    export interface ParseConfigHost {
        useCaseSensitiveFileNames: boolean;
        readDirectory(rootDir: string, extensions: readonly string[], excludes: readonly string[] | undefined, includes: readonly string[], depth?: number): readonly string[];
        fileExists(path: string): boolean;
        readFile(path: string): string | undefined;
        trace?(s: string): void;
    }
    export type ResolvedConfigFileName = string & {
        _isResolvedConfigFileName: never;
    };
    export type WriteFileCallback = (fileName: string, data: string, writeByteOrderMark: boolean, onError?: (message: string) => void, sourceFiles?: readonly SourceFile[]) => void;
    export class OperationCanceledException {
    }
    export interface CancellationToken {
        isCancellationRequested(): boolean;
        throwIfCancellationRequested(): void;
    }
    export enum RefFileKind {
        Import = 0,
        ReferenceFile = 1,
        TypeReferenceDirective = 2
    }
    export interface RefFile {
        referencedFileName: string;
        kind: RefFileKind;
        index: number;
        file: Path;
    }
    export interface Program extends ScriptReferenceHost, ModuleSpecifierResolutionHost {
        getCurrentDirectory(): string;
        getRootFileNames(): readonly string[];
        getSourceFiles(): readonly SourceFile[];
        getMissingFilePaths(): readonly Path[];
        getRefFileMap(): MultiMap<RefFile> | undefined;
        getFilesByNameMap(): Map<SourceFile | false | undefined>;
        emit(targetSourceFile?: SourceFile, writeFile?: WriteFileCallback, cancellationToken?: CancellationToken, emitOnlyDtsFiles?: boolean, customTransformers?: CustomTransformers): EmitResult;
        emit(targetSourceFile?: SourceFile, writeFile?: WriteFileCallback, cancellationToken?: CancellationToken, emitOnlyDtsFiles?: boolean, customTransformers?: CustomTransformers, forceDtsEmit?: boolean): EmitResult;
        getOptionsDiagnostics(cancellationToken?: CancellationToken): readonly Diagnostic[];
        getGlobalDiagnostics(cancellationToken?: CancellationToken): readonly Diagnostic[];
        getSyntacticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly DiagnosticWithLocation[];
        getSemanticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly Diagnostic[];
        getDeclarationDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly DiagnosticWithLocation[];
        getConfigFileParsingDiagnostics(): readonly Diagnostic[];
        getSuggestionDiagnostics(sourceFile: SourceFile, cancellationToken?: CancellationToken): readonly DiagnosticWithLocation[];
        getBindAndCheckDiagnostics(sourceFile: SourceFile, cancellationToken?: CancellationToken): readonly Diagnostic[];
        getProgramDiagnostics(sourceFile: SourceFile, cancellationToken?: CancellationToken): readonly Diagnostic[];
        getTypeChecker(): TypeChecker;
        getCommonSourceDirectory(): string;
        getDiagnosticsProducingTypeChecker(): TypeChecker;
        dropDiagnosticsProducingTypeChecker(): void;
        getClassifiableNames(): UnderscoreEscapedMap<true>;
        getNodeCount(): number;
        getIdentifierCount(): number;
        getSymbolCount(): number;
        getTypeCount(): number;
        getInstantiationCount(): number;
        getRelationCacheSizes(): {
            assignable: number;
            identity: number;
            subtype: number;
            strictSubtype: number;
        };
        getFileProcessingDiagnostics(): DiagnosticCollection;
        getResolvedTypeReferenceDirectives(): Map<ResolvedTypeReferenceDirective | undefined>;
        isSourceFileFromExternalLibrary(file: SourceFile): boolean;
        isSourceFileDefaultLibrary(file: SourceFile): boolean;
        structureIsReused?: StructureIsReused;
        getSourceFileFromReference(referencingFile: SourceFile | UnparsedSource, ref: FileReference): SourceFile | undefined;
        getLibFileFromReference(ref: FileReference): SourceFile | undefined;
        sourceFileToPackageName: Map<string>;
        redirectTargetsMap: MultiMap<string>;
        isEmittedFile(file: string): boolean;
        getResolvedModuleWithFailedLookupLocationsFromCache(moduleName: string, containingFile: string): ResolvedModuleWithFailedLookupLocations | undefined;
        getProjectReferences(): readonly ProjectReference[] | undefined;
        getResolvedProjectReferences(): readonly (ResolvedProjectReference | undefined)[] | undefined;
        getProjectReferenceRedirect(fileName: string): string | undefined;
        getResolvedProjectReferenceToRedirect(fileName: string): ResolvedProjectReference | undefined;
        forEachResolvedProjectReference<T>(cb: (resolvedProjectReference: ResolvedProjectReference | undefined, resolvedProjectReferencePath: Path) => T | undefined): T | undefined;
        getResolvedProjectReferenceByPath(projectReferencePath: Path): ResolvedProjectReference | undefined;
        isSourceOfProjectReferenceRedirect(fileName: string): boolean;
        getProgramBuildInfo?(): ProgramBuildInfo | undefined;
        emitBuildInfo(writeFile?: WriteFileCallback, cancellationToken?: CancellationToken): EmitResult;
        getProbableSymlinks(): ReadonlyMap<string>;
    }
    export type RedirectTargetsMap = ReadonlyMap<readonly string[]>;
    export interface ResolvedProjectReference {
        commandLine: ParsedCommandLine;
        sourceFile: SourceFile;
        references?: readonly (ResolvedProjectReference | undefined)[];
    }
    export const enum StructureIsReused {
        Not = 0,
        SafeModules = 1,
        Completely = 2
    }
    export type CustomTransformerFactory = (context: TransformationContext) => CustomTransformer;
    export interface CustomTransformer {
        transformSourceFile(node: SourceFile): SourceFile;
        transformBundle(node: Bundle): Bundle;
    }
    export interface CustomTransformers {
        before?: (TransformerFactory<SourceFile> | CustomTransformerFactory)[];
        after?: (TransformerFactory<SourceFile> | CustomTransformerFactory)[];
        afterDeclarations?: (TransformerFactory<Bundle | SourceFile> | CustomTransformerFactory)[];
    }
    export interface EmitTransformers {
        scriptTransformers: readonly TransformerFactory<SourceFile | Bundle>[];
        declarationTransformers: readonly TransformerFactory<SourceFile | Bundle>[];
    }
    export interface SourceMapSpan {
        emittedLine: number;
        emittedColumn: number;
        sourceLine: number;
        sourceColumn: number;
        nameIndex?: number;
        sourceIndex: number;
    }
    export interface SourceMapEmitResult {
        inputSourceFileNames: readonly string[];
        sourceMap: RawSourceMap;
    }
    export enum ExitStatus {
        Success = 0,
        DiagnosticsPresent_OutputsSkipped = 1,
        DiagnosticsPresent_OutputsGenerated = 2,
        InvalidProject_OutputsSkipped = 3,
        ProjectReferenceCycle_OutputsSkipped = 4,
        ProjectReferenceCycle_OutputsSkupped = 4
    }
    export interface EmitResult {
        emitSkipped: boolean;
        diagnostics: readonly Diagnostic[];
        emittedFiles?: string[];
        sourceMaps?: SourceMapEmitResult[];
        exportedModulesFromDeclarationEmit?: ExportedModulesFromDeclarationEmit;
    }
    export interface TypeCheckerHost extends ModuleSpecifierResolutionHost {
        getCompilerOptions(): CompilerOptions;
        getSourceFiles(): readonly SourceFile[];
        getSourceFile(fileName: string): SourceFile | undefined;
        getResolvedTypeReferenceDirectives(): ReadonlyMap<ResolvedTypeReferenceDirective | undefined>;
        getProjectReferenceRedirect(fileName: string): string | undefined;
        isSourceOfProjectReferenceRedirect(fileName: string): boolean;
        readonly redirectTargetsMap: RedirectTargetsMap;
    }
    export interface TypeChecker {
        getTypeOfSymbolAtLocation(symbol: Symbol, node: Node): Type;
        getDeclaredTypeOfSymbol(symbol: Symbol): Type;
        getPropertiesOfType(type: Type): Symbol[];
        getPropertyOfType(type: Type, propertyName: string): Symbol | undefined;
        getPrivateIdentifierPropertyOfType(leftType: Type, name: string, location: Node): Symbol | undefined;
        getTypeOfPropertyOfType(type: Type, propertyName: string): Type | undefined;
        getIndexInfoOfType(type: Type, kind: IndexKind): IndexInfo | undefined;
        getSignaturesOfType(type: Type, kind: SignatureKind): readonly Signature[];
        getIndexTypeOfType(type: Type, kind: IndexKind): Type | undefined;
        getBaseTypes(type: InterfaceType): BaseType[];
        getBaseTypeOfLiteralType(type: Type): Type;
        getWidenedType(type: Type): Type;
        getPromisedTypeOfPromise(promise: Type, errorNode?: Node): Type | undefined;
        getReturnTypeOfSignature(signature: Signature): Type;
        getParameterType(signature: Signature, parameterIndex: number): Type;
        getNullableType(type: Type, flags: TypeFlags): Type;
        getNonNullableType(type: Type): Type;
        getNonOptionalType(type: Type): Type;
        isNullableType(type: Type): boolean;
        getTypeArguments(type: TypeReference): readonly Type[];
        typeToTypeNode(type: Type, enclosingDeclaration?: Node, flags?: NodeBuilderFlags): TypeNode | undefined;
        typeToTypeNode(type: Type, enclosingDeclaration?: Node, flags?: NodeBuilderFlags, tracker?: SymbolTracker): TypeNode | undefined;
        signatureToSignatureDeclaration(signature: Signature, kind: SyntaxKind, enclosingDeclaration?: Node, flags?: NodeBuilderFlags): (SignatureDeclaration & {
            typeArguments?: NodeArray<TypeNode>;
        }) | undefined;
        signatureToSignatureDeclaration(signature: Signature, kind: SyntaxKind, enclosingDeclaration?: Node, flags?: NodeBuilderFlags, tracker?: SymbolTracker): (SignatureDeclaration & {
            typeArguments?: NodeArray<TypeNode>;
        }) | undefined;
        indexInfoToIndexSignatureDeclaration(indexInfo: IndexInfo, kind: IndexKind, enclosingDeclaration?: Node, flags?: NodeBuilderFlags): IndexSignatureDeclaration | undefined;
        indexInfoToIndexSignatureDeclaration(indexInfo: IndexInfo, kind: IndexKind, enclosingDeclaration?: Node, flags?: NodeBuilderFlags, tracker?: SymbolTracker): IndexSignatureDeclaration | undefined;
        symbolToEntityName(symbol: Symbol, meaning: SymbolFlags, enclosingDeclaration?: Node, flags?: NodeBuilderFlags): EntityName | undefined;
        symbolToExpression(symbol: Symbol, meaning: SymbolFlags, enclosingDeclaration?: Node, flags?: NodeBuilderFlags): Expression | undefined;
        symbolToTypeParameterDeclarations(symbol: Symbol, enclosingDeclaration?: Node, flags?: NodeBuilderFlags): NodeArray<TypeParameterDeclaration> | undefined;
        symbolToParameterDeclaration(symbol: Symbol, enclosingDeclaration?: Node, flags?: NodeBuilderFlags): ParameterDeclaration | undefined;
        typeParameterToDeclaration(parameter: TypeParameter, enclosingDeclaration?: Node, flags?: NodeBuilderFlags): TypeParameterDeclaration | undefined;
        getSymbolsInScope(location: Node, meaning: SymbolFlags): Symbol[];
        getSymbolAtLocation(node: Node): Symbol | undefined;
        getSymbolsOfParameterPropertyDeclaration(parameter: ParameterDeclaration, parameterName: string): Symbol[];
        getShorthandAssignmentValueSymbol(location: Node): Symbol | undefined;
        getExportSpecifierLocalTargetSymbol(location: ExportSpecifier): Symbol | undefined;
        getExportSymbolOfSymbol(symbol: Symbol): Symbol;
        getPropertySymbolOfDestructuringAssignment(location: Identifier): Symbol | undefined;
        getTypeOfAssignmentPattern(pattern: AssignmentPattern): Type;
        getTypeAtLocation(node: Node): Type;
        getTypeFromTypeNode(node: TypeNode): Type;
        signatureToString(signature: Signature, enclosingDeclaration?: Node, flags?: TypeFormatFlags, kind?: SignatureKind): string;
        typeToString(type: Type, enclosingDeclaration?: Node, flags?: TypeFormatFlags): string;
        symbolToString(symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags, flags?: SymbolFormatFlags): string;
        typePredicateToString(predicate: TypePredicate, enclosingDeclaration?: Node, flags?: TypeFormatFlags): string;
        writeSignature(signature: Signature, enclosingDeclaration?: Node, flags?: TypeFormatFlags, kind?: SignatureKind, writer?: EmitTextWriter): string;
        writeType(type: Type, enclosingDeclaration?: Node, flags?: TypeFormatFlags, writer?: EmitTextWriter): string;
        writeSymbol(symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags, flags?: SymbolFormatFlags, writer?: EmitTextWriter): string;
        writeTypePredicate(predicate: TypePredicate, enclosingDeclaration?: Node, flags?: TypeFormatFlags, writer?: EmitTextWriter): string;
        getFullyQualifiedName(symbol: Symbol): string;
        getAugmentedPropertiesOfType(type: Type): Symbol[];
        getRootSymbols(symbol: Symbol): readonly Symbol[];
        getContextualType(node: Expression): Type | undefined;
        getContextualType(node: Expression, contextFlags?: ContextFlags): Type | undefined;
        getContextualTypeForObjectLiteralElement(element: ObjectLiteralElementLike): Type | undefined;
        getContextualTypeForArgumentAtIndex(call: CallLikeExpression, argIndex: number): Type | undefined;
        getContextualTypeForJsxAttribute(attribute: JsxAttribute | JsxSpreadAttribute): Type | undefined;
        isContextSensitive(node: Expression | MethodDeclaration | ObjectLiteralElementLike | JsxAttributeLike): boolean;
        getResolvedSignature(node: CallLikeExpression, candidatesOutArray?: Signature[], argumentCount?: number): Signature | undefined;
        getResolvedSignatureForSignatureHelp(node: CallLikeExpression, candidatesOutArray?: Signature[], argumentCount?: number): Signature | undefined;
        getExpandedParameters(sig: Signature): readonly Symbol[];
        hasEffectiveRestParameter(sig: Signature): boolean;
        getSignatureFromDeclaration(declaration: SignatureDeclaration): Signature | undefined;
        isImplementationOfOverload(node: SignatureDeclaration): boolean | undefined;
        isUndefinedSymbol(symbol: Symbol): boolean;
        isArgumentsSymbol(symbol: Symbol): boolean;
        isUnknownSymbol(symbol: Symbol): boolean;
        getMergedSymbol(symbol: Symbol): Symbol;
        getConstantValue(node: EnumMember | PropertyAccessExpression | ElementAccessExpression): string | number | undefined;
        isValidPropertyAccess(node: PropertyAccessExpression | QualifiedName | ImportTypeNode, propertyName: string): boolean;
        isValidPropertyAccessForCompletions(node: PropertyAccessExpression | ImportTypeNode | QualifiedName, type: Type, property: Symbol): boolean;
        getAliasedSymbol(symbol: Symbol): Symbol;
        getImmediateAliasedSymbol(symbol: Symbol): Symbol | undefined;
        getExportsOfModule(moduleSymbol: Symbol): Symbol[];
        getExportsAndPropertiesOfModule(moduleSymbol: Symbol): Symbol[];
        getJsxIntrinsicTagNamesAt(location: Node): Symbol[];
        isOptionalParameter(node: ParameterDeclaration): boolean;
        getAmbientModules(): Symbol[];
        tryGetMemberInModuleExports(memberName: string, moduleSymbol: Symbol): Symbol | undefined;
        tryGetMemberInModuleExportsAndProperties(memberName: string, moduleSymbol: Symbol): Symbol | undefined;
        getApparentType(type: Type): Type;
        getSuggestedSymbolForNonexistentProperty(name: Identifier | PrivateIdentifier | string, containingType: Type): Symbol | undefined;
        getSuggestionForNonexistentProperty(name: Identifier | PrivateIdentifier | string, containingType: Type): string | undefined;
        getSuggestedSymbolForNonexistentSymbol(location: Node, name: string, meaning: SymbolFlags): Symbol | undefined;
        getSuggestionForNonexistentSymbol(location: Node, name: string, meaning: SymbolFlags): string | undefined;
        getSuggestedSymbolForNonexistentModule(node: Identifier, target: Symbol): Symbol | undefined;
        getSuggestionForNonexistentExport(node: Identifier, target: Symbol): string | undefined;
        getBaseConstraintOfType(type: Type): Type | undefined;
        getDefaultFromTypeParameter(type: Type): Type | undefined;
        getAnyType(): Type;
        getStringType(): Type;
        getNumberType(): Type;
        getBooleanType(): Type;
        getFalseType(fresh?: boolean): Type;
        getTrueType(fresh?: boolean): Type;
        getVoidType(): Type;
        getUndefinedType(): Type;
        getNullType(): Type;
        getESSymbolType(): Type;
        getNeverType(): Type;
        getOptionalType(): Type;
        getUnionType(types: Type[], subtypeReduction?: UnionReduction): Type;
        createArrayType(elementType: Type): Type;
        getElementTypeOfArrayType(arrayType: Type): Type | undefined;
        createPromiseType(type: Type): Type;
        isTypeAssignableTo(source: Type, target: Type): boolean;
        createAnonymousType(symbol: Symbol | undefined, members: SymbolTable, callSignatures: Signature[], constructSignatures: Signature[], stringIndexInfo: IndexInfo | undefined, numberIndexInfo: IndexInfo | undefined): Type;
        createSignature(declaration: SignatureDeclaration, typeParameters: TypeParameter[] | undefined, thisParameter: Symbol | undefined, parameters: Symbol[], resolvedReturnType: Type, typePredicate: TypePredicate | undefined, minArgumentCount: number, flags: SignatureFlags): Signature;
        createSymbol(flags: SymbolFlags, name: __String): TransientSymbol;
        createIndexInfo(type: Type, isReadonly: boolean, declaration?: SignatureDeclaration): IndexInfo;
        isSymbolAccessible(symbol: Symbol, enclosingDeclaration: Node | undefined, meaning: SymbolFlags, shouldComputeAliasToMarkVisible: boolean): SymbolAccessibilityResult;
        tryFindAmbientModuleWithoutAugmentations(moduleName: string): Symbol | undefined;
        getSymbolWalker(accept?: (symbol: Symbol) => boolean): SymbolWalker;
        getDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): Diagnostic[];
        getGlobalDiagnostics(): Diagnostic[];
        getEmitResolver(sourceFile?: SourceFile, cancellationToken?: CancellationToken): EmitResolver;
        getNodeCount(): number;
        getIdentifierCount(): number;
        getSymbolCount(): number;
        getTypeCount(): number;
        getInstantiationCount(): number;
        getRelationCacheSizes(): {
            assignable: number;
            identity: number;
            subtype: number;
            strictSubtype: number;
        };
        isArrayType(type: Type): boolean;
        isTupleType(type: Type): boolean;
        isArrayLikeType(type: Type): boolean;
        isTypeInvalidDueToUnionDiscriminant(contextualType: Type, obj: ObjectLiteralExpression | JsxAttributes): boolean;
        getAllPossiblePropertiesOfTypes(type: readonly Type[]): Symbol[];
        resolveName(name: string, location: Node, meaning: SymbolFlags, excludeGlobals: boolean): Symbol | undefined;
        getJsxNamespace(location?: Node): string;
        getAccessibleSymbolChain(symbol: Symbol, enclosingDeclaration: Node | undefined, meaning: SymbolFlags, useOnlyExternalAliasing: boolean): Symbol[] | undefined;
        getTypePredicateOfSignature(signature: Signature): TypePredicate | undefined;
        resolveExternalModuleName(moduleSpecifier: Expression): Symbol | undefined;
        resolveExternalModuleSymbol(symbol: Symbol): Symbol;
        tryGetThisTypeAt(node: Node, includeGlobalThis?: boolean): Type | undefined;
        getTypeArgumentConstraint(node: TypeNode): Type | undefined;
        getSuggestionDiagnostics(file: SourceFile, cancellationToken?: CancellationToken): readonly DiagnosticWithLocation[];
        runWithCancellationToken<T>(token: CancellationToken, cb: (checker: TypeChecker) => T): T;
        getLocalTypeParametersOfClassOrInterfaceOrTypeAlias(symbol: Symbol): readonly TypeParameter[] | undefined;
        isDeclarationVisible(node: Declaration | AnyImportSyntax): boolean;
    }
    export const enum UnionReduction {
        None = 0,
        Literal = 1,
        Subtype = 2
    }
    export const enum ContextFlags {
        None = 0,
        Signature = 1,
        NoConstraints = 2,
        Completions = 4
    }
    export const enum NodeBuilderFlags {
        None = 0,
        NoTruncation = 1,
        WriteArrayAsGenericType = 2,
        GenerateNamesForShadowedTypeParams = 4,
        UseStructuralFallback = 8,
        ForbidIndexedAccessSymbolReferences = 16,
        WriteTypeArgumentsOfSignature = 32,
        UseFullyQualifiedType = 64,
        UseOnlyExternalAliasing = 128,
        SuppressAnyReturnType = 256,
        WriteTypeParametersInQualifiedName = 512,
        MultilineObjectLiterals = 1024,
        WriteClassExpressionAsTypeLiteral = 2048,
        UseTypeOfFunction = 4096,
        OmitParameterModifiers = 8192,
        UseAliasDefinedOutsideCurrentScope = 16384,
        UseSingleQuotesForStringLiteralType = 268435456,
        AllowThisInObjectLiteral = 32768,
        AllowQualifedNameInPlaceOfIdentifier = 65536,
        AllowAnonymousIdentifier = 131072,
        AllowEmptyUnionOrIntersection = 262144,
        AllowEmptyTuple = 524288,
        AllowUniqueESSymbolType = 1048576,
        AllowEmptyIndexInfoType = 2097152,
        AllowNodeModulesRelativePaths = 67108864,
        DoNotIncludeSymbolChain = 134217728,
        IgnoreErrors = 70221824,
        InObjectTypeLiteral = 4194304,
        InTypeAlias = 8388608,
        InInitialEntityName = 16777216,
        InReverseMappedType = 33554432
    }
    export const enum TypeFormatFlags {
        None = 0,
        NoTruncation = 1,
        WriteArrayAsGenericType = 2,
        UseStructuralFallback = 8,
        WriteTypeArgumentsOfSignature = 32,
        UseFullyQualifiedType = 64,
        SuppressAnyReturnType = 256,
        MultilineObjectLiterals = 1024,
        WriteClassExpressionAsTypeLiteral = 2048,
        UseTypeOfFunction = 4096,
        OmitParameterModifiers = 8192,
        UseAliasDefinedOutsideCurrentScope = 16384,
        UseSingleQuotesForStringLiteralType = 268435456,
        AllowUniqueESSymbolType = 1048576,
        AddUndefined = 131072,
        WriteArrowStyleSignature = 262144,
        InArrayType = 524288,
        InElementType = 2097152,
        InFirstTypeArgument = 4194304,
        InTypeAlias = 8388608,
        WriteOwnNameForAnyLike = 0,
        NodeBuilderFlagsMask = 277904747
    }
    export const enum SymbolFormatFlags {
        None = 0,
        WriteTypeParametersOrArguments = 1,
        UseOnlyExternalAliasing = 2,
        AllowAnyNodeKind = 4,
        UseAliasDefinedOutsideCurrentScope = 8,
        DoNotIncludeSymbolChain = 16
    }
    export interface SymbolWalker {
        walkType(root: Type): {
            visitedTypes: readonly Type[];
            visitedSymbols: readonly Symbol[];
        };
        walkSymbol(root: Symbol): {
            visitedTypes: readonly Type[];
            visitedSymbols: readonly Symbol[];
        };
    }
    interface SymbolWriter extends SymbolTracker {
        writeKeyword(text: string): void;
        writeOperator(text: string): void;
        writePunctuation(text: string): void;
        writeSpace(text: string): void;
        writeStringLiteral(text: string): void;
        writeParameter(text: string): void;
        writeProperty(text: string): void;
        writeSymbol(text: string, symbol: Symbol): void;
        writeLine(): void;
        increaseIndent(): void;
        decreaseIndent(): void;
        clear(): void;
    }
    export const enum SymbolAccessibility {
        Accessible = 0,
        NotAccessible = 1,
        CannotBeNamed = 2
    }
    export const enum SyntheticSymbolKind {
        UnionOrIntersection = 0,
        Spread = 1
    }
    export const enum TypePredicateKind {
        This = 0,
        Identifier = 1,
        AssertsThis = 2,
        AssertsIdentifier = 3
    }
    export interface TypePredicateBase {
        kind: TypePredicateKind;
        type: Type | undefined;
    }
    export interface ThisTypePredicate extends TypePredicateBase {
        kind: TypePredicateKind.This;
        parameterName: undefined;
        parameterIndex: undefined;
        type: Type;
    }
    export interface IdentifierTypePredicate extends TypePredicateBase {
        kind: TypePredicateKind.Identifier;
        parameterName: string;
        parameterIndex: number;
        type: Type;
    }
    export interface AssertsThisTypePredicate extends TypePredicateBase {
        kind: TypePredicateKind.AssertsThis;
        parameterName: undefined;
        parameterIndex: undefined;
        type: Type | undefined;
    }
    export interface AssertsIdentifierTypePredicate extends TypePredicateBase {
        kind: TypePredicateKind.AssertsIdentifier;
        parameterName: string;
        parameterIndex: number;
        type: Type | undefined;
    }
    export type TypePredicate = ThisTypePredicate | IdentifierTypePredicate | AssertsThisTypePredicate | AssertsIdentifierTypePredicate;
    export type AnyImportSyntax = ImportDeclaration | ImportEqualsDeclaration;
    export type AnyImportOrRequire = AnyImportSyntax | RequireVariableDeclaration;
    export type AnyImportOrReExport = AnyImportSyntax | ExportDeclaration;
    export interface ValidImportTypeNode extends ImportTypeNode {
        argument: LiteralTypeNode & {
            literal: StringLiteral;
        };
    }
    export type AnyValidImportOrReExport = (ImportDeclaration | ExportDeclaration) & {
        moduleSpecifier: StringLiteral;
    } | ImportEqualsDeclaration & {
        moduleReference: ExternalModuleReference & {
            expression: StringLiteral;
        };
    } | RequireOrImportCall | ValidImportTypeNode;
    export type RequireOrImportCall = CallExpression & {
        expression: Identifier;
        arguments: [StringLiteralLike];
    };
    export interface RequireVariableDeclaration extends VariableDeclaration {
        initializer: RequireOrImportCall;
    }
    export type LateVisibilityPaintedStatement = AnyImportSyntax | VariableStatement | ClassDeclaration | FunctionDeclaration | ModuleDeclaration | TypeAliasDeclaration | InterfaceDeclaration | EnumDeclaration;
    export interface SymbolVisibilityResult {
        accessibility: SymbolAccessibility;
        aliasesToMakeVisible?: LateVisibilityPaintedStatement[];
        errorSymbolName?: string;
        errorNode?: Node;
    }
    export interface SymbolAccessibilityResult extends SymbolVisibilityResult {
        errorModuleName?: string;
    }
    export interface AllAccessorDeclarations {
        firstAccessor: AccessorDeclaration;
        secondAccessor: AccessorDeclaration | undefined;
        getAccessor: GetAccessorDeclaration | undefined;
        setAccessor: SetAccessorDeclaration | undefined;
    }
    export enum TypeReferenceSerializationKind {
        Unknown = 0,
        TypeWithConstructSignatureAndValue = 1,
        VoidNullableOrNeverType = 2,
        NumberLikeType = 3,
        BigIntLikeType = 4,
        StringLikeType = 5,
        BooleanType = 6,
        ArrayLikeType = 7,
        ESSymbolType = 8,
        Promise = 9,
        TypeWithCallSignature = 10,
        ObjectType = 11
    }
    export interface EmitResolver {
        hasGlobalName(name: string): boolean;
        getReferencedExportContainer(node: Identifier, prefixLocals?: boolean): SourceFile | ModuleDeclaration | EnumDeclaration | undefined;
        getReferencedImportDeclaration(node: Identifier): Declaration | undefined;
        getReferencedDeclarationWithCollidingName(node: Identifier): Declaration | undefined;
        isDeclarationWithCollidingName(node: Declaration): boolean;
        isValueAliasDeclaration(node: Node): boolean;
        isReferencedAliasDeclaration(node: Node, checkChildren?: boolean): boolean;
        isTopLevelValueImportEqualsWithEntityName(node: ImportEqualsDeclaration): boolean;
        getNodeCheckFlags(node: Node): NodeCheckFlags;
        isDeclarationVisible(node: Declaration | AnyImportSyntax): boolean;
        isLateBound(node: Declaration): node is LateBoundDeclaration;
        collectLinkedAliases(node: Identifier, setVisibility?: boolean): Node[] | undefined;
        isImplementationOfOverload(node: FunctionLike): boolean | undefined;
        isRequiredInitializedParameter(node: ParameterDeclaration): boolean;
        isOptionalUninitializedParameterProperty(node: ParameterDeclaration): boolean;
        isExpandoFunctionDeclaration(node: FunctionDeclaration): boolean;
        getPropertiesOfContainerFunction(node: Declaration): Symbol[];
        createTypeOfDeclaration(declaration: AccessorDeclaration | VariableLikeDeclaration | PropertyAccessExpression, enclosingDeclaration: Node, flags: NodeBuilderFlags, tracker: SymbolTracker, addUndefined?: boolean): TypeNode | undefined;
        createReturnTypeOfSignatureDeclaration(signatureDeclaration: SignatureDeclaration, enclosingDeclaration: Node, flags: NodeBuilderFlags, tracker: SymbolTracker): TypeNode | undefined;
        createTypeOfExpression(expr: Expression, enclosingDeclaration: Node, flags: NodeBuilderFlags, tracker: SymbolTracker): TypeNode | undefined;
        createLiteralConstValue(node: VariableDeclaration | PropertyDeclaration | PropertySignature | ParameterDeclaration, tracker: SymbolTracker): Expression;
        isSymbolAccessible(symbol: Symbol, enclosingDeclaration: Node | undefined, meaning: SymbolFlags | undefined, shouldComputeAliasToMarkVisible: boolean): SymbolAccessibilityResult;
        isEntityNameVisible(entityName: EntityNameOrEntityNameExpression, enclosingDeclaration: Node): SymbolVisibilityResult;
        getConstantValue(node: EnumMember | PropertyAccessExpression | ElementAccessExpression): string | number | undefined;
        getReferencedValueDeclaration(reference: Identifier): Declaration | undefined;
        getTypeReferenceSerializationKind(typeName: EntityName, location?: Node): TypeReferenceSerializationKind;
        isOptionalParameter(node: ParameterDeclaration): boolean;
        moduleExportsSomeValue(moduleReferenceExpression: Expression): boolean;
        isArgumentsLocalBinding(node: Identifier): boolean;
        getExternalModuleFileFromDeclaration(declaration: ImportEqualsDeclaration | ImportDeclaration | ExportDeclaration | ModuleDeclaration | ImportTypeNode): SourceFile | undefined;
        getTypeReferenceDirectivesForEntityName(name: EntityNameOrEntityNameExpression): string[] | undefined;
        getTypeReferenceDirectivesForSymbol(symbol: Symbol, meaning?: SymbolFlags): string[] | undefined;
        isLiteralConstDeclaration(node: VariableDeclaration | PropertyDeclaration | PropertySignature | ParameterDeclaration): boolean;
        getJsxFactoryEntity(location?: Node): EntityName | undefined;
        getAllAccessorDeclarations(declaration: AccessorDeclaration): AllAccessorDeclarations;
        getSymbolOfExternalModuleSpecifier(node: StringLiteralLike): Symbol | undefined;
        isBindingCapturedByNode(node: Node, decl: VariableDeclaration | BindingElement): boolean;
        getDeclarationStatementsForSourceFile(node: SourceFile, flags: NodeBuilderFlags, tracker: SymbolTracker, bundled?: boolean): Statement[] | undefined;
    }
    export const enum SymbolFlags {
        None = 0,
        FunctionScopedVariable = 1,
        BlockScopedVariable = 2,
        Property = 4,
        EnumMember = 8,
        Function = 16,
        Class = 32,
        Interface = 64,
        ConstEnum = 128,
        RegularEnum = 256,
        ValueModule = 512,
        NamespaceModule = 1024,
        TypeLiteral = 2048,
        ObjectLiteral = 4096,
        Method = 8192,
        Constructor = 16384,
        GetAccessor = 32768,
        SetAccessor = 65536,
        Signature = 131072,
        TypeParameter = 262144,
        TypeAlias = 524288,
        ExportValue = 1048576,
        Alias = 2097152,
        Prototype = 4194304,
        ExportStar = 8388608,
        Optional = 16777216,
        Transient = 33554432,
        Assignment = 67108864,
        ModuleExports = 134217728,
        All = 67108863,
        Enum = 384,
        Variable = 3,
        Value = 111551,
        Type = 788968,
        Namespace = 1920,
        Module = 1536,
        Accessor = 98304,
        FunctionScopedVariableExcludes = 111550,
        BlockScopedVariableExcludes = 111551,
        ParameterExcludes = 111551,
        PropertyExcludes = 0,
        EnumMemberExcludes = 900095,
        FunctionExcludes = 110991,
        ClassExcludes = 899503,
        InterfaceExcludes = 788872,
        RegularEnumExcludes = 899327,
        ConstEnumExcludes = 899967,
        ValueModuleExcludes = 110735,
        NamespaceModuleExcludes = 0,
        MethodExcludes = 103359,
        GetAccessorExcludes = 46015,
        SetAccessorExcludes = 78783,
        TypeParameterExcludes = 526824,
        TypeAliasExcludes = 788968,
        AliasExcludes = 2097152,
        ModuleMember = 2623475,
        ExportHasLocal = 944,
        BlockScoped = 418,
        PropertyOrAccessor = 98308,
        ClassMember = 106500,
        ExportSupportsDefaultModifier = 112,
        ExportDoesNotSupportDefaultModifier = -113,
        Classifiable = 2885600,
        LateBindingContainer = 6256
    }
    export interface Symbol {
        flags: SymbolFlags;
        escapedName: __String;
        declarations: Declaration[];
        valueDeclaration: Declaration;
        members?: SymbolTable;
        exports?: SymbolTable;
        globalExports?: SymbolTable;
        id?: number;
        mergeId?: number;
        parent?: Symbol;
        exportSymbol?: Symbol;
        constEnumOnlyModule?: boolean;
        isReferenced?: SymbolFlags;
        isReplaceableByMethod?: boolean;
        isAssigned?: boolean;
        assignmentDeclarationMembers?: Map<Declaration>;
    }
    export interface SymbolLinks {
        immediateTarget?: Symbol;
        target?: Symbol;
        type?: Type;
        nameType?: Type;
        uniqueESSymbolType?: Type;
        declaredType?: Type;
        typeParameters?: TypeParameter[];
        outerTypeParameters?: TypeParameter[];
        instantiations?: Map<Type>;
        inferredClassSymbol?: Map<TransientSymbol>;
        mapper?: TypeMapper;
        referenced?: boolean;
        constEnumReferenced?: boolean;
        containingType?: UnionOrIntersectionType;
        leftSpread?: Symbol;
        rightSpread?: Symbol;
        syntheticOrigin?: Symbol;
        isDiscriminantProperty?: boolean;
        resolvedExports?: SymbolTable;
        resolvedMembers?: SymbolTable;
        exportsChecked?: boolean;
        typeParametersChecked?: boolean;
        isDeclarationWithCollidingName?: boolean;
        bindingElement?: BindingElement;
        exportsSomeValue?: boolean;
        enumKind?: EnumKind;
        originatingImport?: ImportDeclaration | ImportCall;
        lateSymbol?: Symbol;
        specifierCache?: Map<string>;
        extendedContainers?: Symbol[];
        extendedContainersByFile?: Map<Symbol[]>;
        variances?: VarianceFlags[];
        deferralConstituents?: Type[];
        deferralParent?: Type;
        cjsExportMerged?: Symbol;
        typeOnlyDeclaration?: TypeOnlyCompatibleAliasDeclaration | false;
    }
    export const enum EnumKind {
        Numeric = 0,
        Literal = 1
    }
    export const enum CheckFlags {
        Instantiated = 1,
        SyntheticProperty = 2,
        SyntheticMethod = 4,
        Readonly = 8,
        ReadPartial = 16,
        WritePartial = 32,
        HasNonUniformType = 64,
        HasLiteralType = 128,
        ContainsPublic = 256,
        ContainsProtected = 512,
        ContainsPrivate = 1024,
        ContainsStatic = 2048,
        Late = 4096,
        ReverseMapped = 8192,
        OptionalParameter = 16384,
        RestParameter = 32768,
        DeferredType = 65536,
        HasNeverType = 131072,
        Mapped = 262144,
        StripOptional = 524288,
        Synthetic = 6,
        Discriminant = 192,
        Partial = 48
    }
    export interface TransientSymbol extends Symbol, SymbolLinks {
        checkFlags: CheckFlags;
    }
    export interface MappedSymbol extends TransientSymbol {
        mappedType: MappedType;
        mapper: TypeMapper;
    }
    export interface ReverseMappedSymbol extends TransientSymbol {
        propertyType: Type;
        mappedType: MappedType;
        constraintType: IndexType;
    }
    export const enum InternalSymbolName {
        Call = "__call",
        Constructor = "__constructor",
        New = "__new",
        Index = "__index",
        ExportStar = "__export",
        Global = "__global",
        Missing = "__missing",
        Type = "__type",
        Object = "__object",
        JSXAttributes = "__jsxAttributes",
        Class = "__class",
        Function = "__function",
        Computed = "__computed",
        Resolving = "__resolving__",
        ExportEquals = "export=",
        Default = "default",
        This = "this"
    }
    export type __String = (string & {
        __escapedIdentifier: void;
    }) | (void & {
        __escapedIdentifier: void;
    }) | InternalSymbolName;
    export interface ReadonlyUnderscoreEscapedMap<T> {
        get(key: __String): T | undefined;
        has(key: __String): boolean;
        forEach(action: (value: T, key: __String) => void): void;
        readonly size: number;
        keys(): Iterator<__String>;
        values(): Iterator<T>;
        entries(): Iterator<[__String, T]>;
    }
    export interface UnderscoreEscapedMap<T> extends ReadonlyUnderscoreEscapedMap<T> {
        set(key: __String, value: T): this;
        delete(key: __String): boolean;
        clear(): void;
    }
    export type SymbolTable = UnderscoreEscapedMap<Symbol>;
    export interface PatternAmbientModule {
        pattern: Pattern;
        symbol: Symbol;
    }
    export const enum NodeCheckFlags {
        TypeChecked = 1,
        LexicalThis = 2,
        CaptureThis = 4,
        CaptureNewTarget = 8,
        SuperInstance = 256,
        SuperStatic = 512,
        ContextChecked = 1024,
        AsyncMethodWithSuper = 2048,
        AsyncMethodWithSuperBinding = 4096,
        CaptureArguments = 8192,
        EnumValuesComputed = 16384,
        LexicalModuleMergesWithClass = 32768,
        LoopWithCapturedBlockScopedBinding = 65536,
        ContainsCapturedBlockScopeBinding = 131072,
        CapturedBlockScopedBinding = 262144,
        BlockScopedBindingInLoop = 524288,
        ClassWithBodyScopedClassBinding = 1048576,
        BodyScopedClassBinding = 2097152,
        NeedsLoopOutParameter = 4194304,
        AssignmentsMarked = 8388608,
        ClassWithConstructorReference = 16777216,
        ConstructorReferenceInClass = 33554432,
        ContainsClassWithPrivateIdentifiers = 67108864
    }
    export interface NodeLinks {
        flags: NodeCheckFlags;
        resolvedType?: Type;
        resolvedEnumType?: Type;
        resolvedSignature?: Signature;
        resolvedSymbol?: Symbol;
        resolvedIndexInfo?: IndexInfo;
        effectsSignature?: Signature;
        enumMemberValue?: string | number;
        isVisible?: boolean;
        containsArgumentsReference?: boolean;
        hasReportedStatementInAmbientContext?: boolean;
        jsxFlags: JsxFlags;
        resolvedJsxElementAttributesType?: Type;
        resolvedJsxElementAllAttributesType?: Type;
        resolvedJSDocType?: Type;
        hasSuperCall?: boolean;
        superCall?: SuperCall;
        switchTypes?: Type[];
        jsxNamespace?: Symbol | false;
        contextFreeType?: Type;
        deferredNodes?: Map<Node>;
        capturedBlockScopeBindings?: Symbol[];
        outerTypeParameters?: TypeParameter[];
        instantiations?: Map<Type>;
        isExhaustive?: boolean;
        skipDirectInference?: true;
    }
    export const enum TypeFlags {
        Any = 1,
        Unknown = 2,
        String = 4,
        Number = 8,
        Boolean = 16,
        Enum = 32,
        BigInt = 64,
        StringLiteral = 128,
        NumberLiteral = 256,
        BooleanLiteral = 512,
        EnumLiteral = 1024,
        BigIntLiteral = 2048,
        ESSymbol = 4096,
        UniqueESSymbol = 8192,
        Void = 16384,
        Undefined = 32768,
        Null = 65536,
        Never = 131072,
        TypeParameter = 262144,
        Object = 524288,
        Union = 1048576,
        Intersection = 2097152,
        Index = 4194304,
        IndexedAccess = 8388608,
        Conditional = 16777216,
        Substitution = 33554432,
        NonPrimitive = 67108864,
        AnyOrUnknown = 3,
        Nullable = 98304,
        Literal = 2944,
        Unit = 109440,
        StringOrNumberLiteral = 384,
        StringOrNumberLiteralOrUnique = 8576,
        DefinitelyFalsy = 117632,
        PossiblyFalsy = 117724,
        Intrinsic = 67359327,
        Primitive = 131068,
        StringLike = 132,
        NumberLike = 296,
        BigIntLike = 2112,
        BooleanLike = 528,
        EnumLike = 1056,
        ESSymbolLike = 12288,
        VoidLike = 49152,
        DisjointDomains = 67238908,
        UnionOrIntersection = 3145728,
        StructuredType = 3670016,
        TypeVariable = 8650752,
        InstantiableNonPrimitive = 58982400,
        InstantiablePrimitive = 4194304,
        Instantiable = 63176704,
        StructuredOrInstantiable = 66846720,
        ObjectFlagsType = 3899393,
        Simplifiable = 25165824,
        Substructure = 66584576,
        Narrowable = 133970943,
        NotUnionOrUnit = 67637251,
        NotPrimitiveUnion = 66994211,
        IncludesMask = 71041023,
        IncludesStructuredOrInstantiable = 262144,
        IncludesNonWideningType = 4194304,
        IncludesWildcard = 8388608,
        IncludesEmptyObject = 16777216
    }
    export type DestructuringPattern = BindingPattern | ObjectLiteralExpression | ArrayLiteralExpression;
    export interface Type {
        flags: TypeFlags;
        id: number;
        checker: TypeChecker;
        symbol: Symbol;
        pattern?: DestructuringPattern;
        aliasSymbol?: Symbol;
        aliasTypeArguments?: readonly Type[];
        aliasTypeArgumentsContainsMarker?: boolean;
        permissiveInstantiation?: Type;
        restrictiveInstantiation?: Type;
        immediateBaseConstraint?: Type;
        widened?: Type;
    }
    export interface IntrinsicType extends Type {
        intrinsicName: string;
        objectFlags: ObjectFlags;
    }
    export interface NullableType extends IntrinsicType {
        objectFlags: ObjectFlags;
    }
    export interface FreshableIntrinsicType extends IntrinsicType {
        freshType: IntrinsicType;
        regularType: IntrinsicType;
    }
    export type FreshableType = LiteralType | FreshableIntrinsicType;
    export interface LiteralType extends Type {
        value: string | number | PseudoBigInt;
        freshType: LiteralType;
        regularType: LiteralType;
    }
    export interface UniqueESSymbolType extends Type {
        symbol: Symbol;
        escapedName: __String;
    }
    export interface StringLiteralType extends LiteralType {
        value: string;
    }
    export interface NumberLiteralType extends LiteralType {
        value: number;
    }
    export interface BigIntLiteralType extends LiteralType {
        value: PseudoBigInt;
    }
    export interface EnumType extends Type {
    }
    export const enum ObjectFlags {
        Class = 1,
        Interface = 2,
        Reference = 4,
        Tuple = 8,
        Anonymous = 16,
        Mapped = 32,
        Instantiated = 64,
        ObjectLiteral = 128,
        EvolvingArray = 256,
        ObjectLiteralPatternWithComputedProperties = 512,
        ContainsSpread = 1024,
        ReverseMapped = 2048,
        JsxAttributes = 4096,
        MarkerType = 8192,
        JSLiteral = 16384,
        FreshLiteral = 32768,
        ArrayLiteral = 65536,
        ObjectRestType = 131072,
        PrimitiveUnion = 262144,
        ContainsWideningType = 524288,
        ContainsObjectOrArrayLiteral = 1048576,
        NonInferrableType = 2097152,
        IsGenericObjectTypeComputed = 4194304,
        IsGenericObjectType = 8388608,
        IsGenericIndexTypeComputed = 16777216,
        IsGenericIndexType = 33554432,
        CouldContainTypeVariablesComputed = 67108864,
        CouldContainTypeVariables = 134217728,
        ContainsIntersections = 268435456,
        IsNeverIntersectionComputed = 268435456,
        IsNeverIntersection = 536870912,
        ClassOrInterface = 3,
        RequiresWidening = 1572864,
        PropagatingFlags = 3670016
    }
    export type ObjectFlagsType = NullableType | ObjectType | UnionType | IntersectionType;
    export interface ObjectType extends Type {
        objectFlags: ObjectFlags;
        members?: SymbolTable;
        properties?: Symbol[];
        callSignatures?: readonly Signature[];
        constructSignatures?: readonly Signature[];
        stringIndexInfo?: IndexInfo;
        numberIndexInfo?: IndexInfo;
    }
    export interface InterfaceType extends ObjectType {
        typeParameters: TypeParameter[] | undefined;
        outerTypeParameters: TypeParameter[] | undefined;
        localTypeParameters: TypeParameter[] | undefined;
        thisType: TypeParameter | undefined;
        resolvedBaseConstructorType?: Type;
        resolvedBaseTypes: BaseType[];
    }
    export type BaseType = ObjectType | IntersectionType | TypeVariable;
    export interface InterfaceTypeWithDeclaredMembers extends InterfaceType {
        declaredProperties: Symbol[];
        declaredCallSignatures: Signature[];
        declaredConstructSignatures: Signature[];
        declaredStringIndexInfo?: IndexInfo;
        declaredNumberIndexInfo?: IndexInfo;
    }
    export interface TypeReference extends ObjectType {
        target: GenericType;
        node?: TypeReferenceNode | ArrayTypeNode | TupleTypeNode;
        mapper?: TypeMapper;
        resolvedTypeArguments?: readonly Type[];
        literalType?: TypeReference;
    }
    export interface DeferredTypeReference extends TypeReference {
        node: TypeReferenceNode | ArrayTypeNode | TupleTypeNode;
        mapper?: TypeMapper;
    }
    export const enum VarianceFlags {
        Invariant = 0,
        Covariant = 1,
        Contravariant = 2,
        Bivariant = 3,
        Independent = 4,
        VarianceMask = 7,
        Unmeasurable = 8,
        Unreliable = 16,
        AllowsStructuralFallback = 24
    }
    export interface GenericType extends InterfaceType, TypeReference {
        instantiations: Map<TypeReference>;
        variances?: VarianceFlags[];
    }
    export interface TupleType extends GenericType {
        minLength: number;
        hasRestElement: boolean;
        readonly: boolean;
        associatedNames?: __String[];
    }
    export interface TupleTypeReference extends TypeReference {
        target: TupleType;
    }
    export interface UnionOrIntersectionType extends Type {
        types: Type[];
        objectFlags: ObjectFlags;
        propertyCache: SymbolTable;
        resolvedProperties: Symbol[];
        resolvedIndexType: IndexType;
        resolvedStringIndexType: IndexType;
        resolvedBaseConstraint: Type;
    }
    export interface UnionType extends UnionOrIntersectionType {
        resolvedReducedType: Type;
    }
    export interface IntersectionType extends UnionOrIntersectionType {
        resolvedApparentType: Type;
    }
    export type StructuredType = ObjectType | UnionType | IntersectionType;
    export interface AnonymousType extends ObjectType {
        target?: AnonymousType;
        mapper?: TypeMapper;
    }
    export interface MappedType extends AnonymousType {
        declaration: MappedTypeNode;
        typeParameter?: TypeParameter;
        constraintType?: Type;
        templateType?: Type;
        modifiersType?: Type;
        resolvedApparentType?: Type;
    }
    export interface EvolvingArrayType extends ObjectType {
        elementType: Type;
        finalArrayType?: Type;
    }
    export interface ReverseMappedType extends ObjectType {
        source: Type;
        mappedType: MappedType;
        constraintType: IndexType;
    }
    export interface ResolvedType extends ObjectType, UnionOrIntersectionType {
        members: SymbolTable;
        properties: Symbol[];
        callSignatures: readonly Signature[];
        constructSignatures: readonly Signature[];
    }
    export interface FreshObjectLiteralType extends ResolvedType {
        regularType: ResolvedType;
    }
    export interface IterationTypes {
        readonly yieldType: Type;
        readonly returnType: Type;
        readonly nextType: Type;
    }
    export interface IterableOrIteratorType extends ObjectType, UnionType {
        iterationTypesOfGeneratorReturnType?: IterationTypes;
        iterationTypesOfAsyncGeneratorReturnType?: IterationTypes;
        iterationTypesOfIterable?: IterationTypes;
        iterationTypesOfIterator?: IterationTypes;
        iterationTypesOfAsyncIterable?: IterationTypes;
        iterationTypesOfAsyncIterator?: IterationTypes;
        iterationTypesOfIteratorResult?: IterationTypes;
    }
    export interface PromiseOrAwaitableType extends ObjectType, UnionType {
        promiseTypeOfPromiseConstructor?: Type;
        promisedTypeOfPromise?: Type;
        awaitedTypeOfType?: Type;
    }
    export interface SyntheticDefaultModuleType extends Type {
        syntheticType?: Type;
    }
    export interface InstantiableType extends Type {
        resolvedBaseConstraint?: Type;
        resolvedIndexType?: IndexType;
        resolvedStringIndexType?: IndexType;
    }
    export interface TypeParameter extends InstantiableType {
        constraint?: Type;
        default?: Type;
        target?: TypeParameter;
        mapper?: TypeMapper;
        isThisType?: boolean;
        resolvedDefaultType?: Type;
    }
    export interface IndexedAccessType extends InstantiableType {
        objectType: Type;
        indexType: Type;
        constraint?: Type;
        simplifiedForReading?: Type;
        simplifiedForWriting?: Type;
    }
    export type TypeVariable = TypeParameter | IndexedAccessType;
    export interface IndexType extends InstantiableType {
        type: InstantiableType | UnionOrIntersectionType;
        stringsOnly: boolean;
    }
    export interface ConditionalRoot {
        node: ConditionalTypeNode;
        checkType: Type;
        extendsType: Type;
        trueType: Type;
        falseType: Type;
        isDistributive: boolean;
        inferTypeParameters?: TypeParameter[];
        outerTypeParameters?: TypeParameter[];
        instantiations?: Map<Type>;
        aliasSymbol?: Symbol;
        aliasTypeArguments?: Type[];
    }
    export interface ConditionalType extends InstantiableType {
        root: ConditionalRoot;
        checkType: Type;
        extendsType: Type;
        resolvedTrueType: Type;
        resolvedFalseType: Type;
        resolvedInferredTrueType?: Type;
        resolvedDefaultConstraint?: Type;
        mapper?: TypeMapper;
        combinedMapper?: TypeMapper;
    }
    export interface SubstitutionType extends InstantiableType {
        typeVariable: TypeVariable;
        substitute: Type;
    }
    export const enum JsxReferenceKind {
        Component = 0,
        Function = 1,
        Mixed = 2
    }
    export const enum SignatureKind {
        Call = 0,
        Construct = 1
    }
    export const enum SignatureFlags {
        None = 0,
        HasRestParameter = 1,
        HasLiteralTypes = 2,
        IsInnerCallChain = 4,
        IsOuterCallChain = 8,
        IsUntypedSignatureInJSFile = 16,
        PropagatingFlags = 3,
        CallChainFlags = 12
    }
    export interface Signature {
        flags: SignatureFlags;
        checker?: TypeChecker;
        declaration?: SignatureDeclaration | JSDocSignature;
        typeParameters?: readonly TypeParameter[];
        parameters: readonly Symbol[];
        thisParameter?: Symbol;
        resolvedReturnType?: Type;
        resolvedTypePredicate?: TypePredicate;
        minArgumentCount: number;
        target?: Signature;
        mapper?: TypeMapper;
        unionSignatures?: Signature[];
        erasedSignatureCache?: Signature;
        canonicalSignatureCache?: Signature;
        optionalCallSignatureCache?: {
            inner?: Signature;
            outer?: Signature;
        };
        isolatedSignatureType?: ObjectType;
        instantiations?: Map<Signature>;
    }
    export const enum IndexKind {
        String = 0,
        Number = 1
    }
    export interface IndexInfo {
        type: Type;
        isReadonly: boolean;
        declaration?: IndexSignatureDeclaration;
    }
    export type TypeMapper = (t: TypeParameter) => Type;
    export const enum InferencePriority {
        NakedTypeVariable = 1,
        HomomorphicMappedType = 2,
        PartialHomomorphicMappedType = 4,
        MappedTypeConstraint = 8,
        ContravariantConditional = 16,
        ReturnType = 32,
        LiteralKeyof = 64,
        NoConstraints = 128,
        AlwaysStrict = 256,
        MaxValue = 512,
        PriorityImpliesCombination = 104,
        Circularity = -1
    }
    export interface InferenceInfo {
        typeParameter: TypeParameter;
        candidates: Type[] | undefined;
        contraCandidates: Type[] | undefined;
        inferredType?: Type;
        priority?: InferencePriority;
        topLevel: boolean;
        isFixed: boolean;
    }
    export const enum InferenceFlags {
        None = 0,
        NoDefault = 1,
        AnyDefault = 2,
        SkippedGenericFunction = 4
    }
    export const enum Ternary {
        False = 0,
        Maybe = 1,
        True = -1
    }
    export type TypeComparer = (s: Type, t: Type, reportErrors?: boolean) => Ternary;
    export interface InferenceContext {
        inferences: InferenceInfo[];
        signature?: Signature;
        flags: InferenceFlags;
        compareTypes: TypeComparer;
        mapper: TypeMapper;
        nonFixingMapper: TypeMapper;
        returnMapper?: TypeMapper;
        inferredTypeParameters?: readonly TypeParameter[];
    }
    export interface WideningContext {
        parent?: WideningContext;
        propertyName?: __String;
        siblings?: Type[];
        resolvedProperties?: Symbol[];
    }
    export const enum AssignmentDeclarationKind {
        None = 0,
        ExportsProperty = 1,
        ModuleExports = 2,
        PrototypeProperty = 3,
        ThisProperty = 4,
        Property = 5,
        Prototype = 6,
        ObjectDefinePropertyValue = 7,
        ObjectDefinePropertyExports = 8,
        ObjectDefinePrototypeProperty = 9
    }
    export type JsFileExtensionInfo = FileExtensionInfo;
    export interface FileExtensionInfo {
        extension: string;
        isMixedContent: boolean;
        scriptKind?: ScriptKind;
    }
    export interface DiagnosticMessage {
        key: string;
        category: DiagnosticCategory;
        code: number;
        message: string;
        reportsUnnecessary?: {};
        elidedInCompatabilityPyramid?: boolean;
    }
    export interface DiagnosticMessageChain {
        messageText: string;
        category: DiagnosticCategory;
        code: number;
        next?: DiagnosticMessageChain[];
    }
    export interface Diagnostic extends DiagnosticRelatedInformation {
        reportsUnnecessary?: {};
        source?: string;
        relatedInformation?: DiagnosticRelatedInformation[];
    }
    export interface DiagnosticRelatedInformation {
        category: DiagnosticCategory;
        code: number;
        file: SourceFile | undefined;
        start: number | undefined;
        length: number | undefined;
        messageText: string | DiagnosticMessageChain;
    }
    export interface DiagnosticWithLocation extends Diagnostic {
        file: SourceFile;
        start: number;
        length: number;
    }
    export enum DiagnosticCategory {
        Warning = 0,
        Error = 1,
        Suggestion = 2,
        Message = 3
    }
    export function diagnosticCategoryName(d: {
        category: DiagnosticCategory;
    }, lowerCase?: boolean): string;
    export enum ModuleResolutionKind {
        Classic = 1,
        NodeJs = 2
    }
    export interface PluginImport {
        name: string;
    }
    export interface ProjectReference {
        path: string;
        originalPath?: string;
        prepend?: boolean;
        circular?: boolean;
    }
    export enum WatchFileKind {
        FixedPollingInterval = 0,
        PriorityPollingInterval = 1,
        DynamicPriorityPolling = 2,
        UseFsEvents = 3,
        UseFsEventsOnParentDirectory = 4
    }
    export enum WatchDirectoryKind {
        UseFsEvents = 0,
        FixedPollingInterval = 1,
        DynamicPriorityPolling = 2
    }
    export enum PollingWatchKind {
        FixedInterval = 0,
        PriorityInterval = 1,
        DynamicPriority = 2
    }
    export type CompilerOptionsValue = string | number | boolean | (string | number)[] | string[] | MapLike<string[]> | PluginImport[] | ProjectReference[] | null | undefined;
    export interface CompilerOptions {
        all?: boolean;
        allowJs?: boolean;
        allowNonTsExtensions?: boolean;
        allowSyntheticDefaultImports?: boolean;
        allowUmdGlobalAccess?: boolean;
        allowUnreachableCode?: boolean;
        allowUnusedLabels?: boolean;
        alwaysStrict?: boolean;
        baseUrl?: string;
        build?: boolean;
        charset?: string;
        checkJs?: boolean;
        configFilePath?: string;
        readonly configFile?: TsConfigSourceFile;
        declaration?: boolean;
        declarationMap?: boolean;
        emitDeclarationOnly?: boolean;
        declarationDir?: string;
        diagnostics?: boolean;
        extendedDiagnostics?: boolean;
        disableSizeLimit?: boolean;
        disableSourceOfProjectReferenceRedirect?: boolean;
        disableSolutionSearching?: boolean;
        downlevelIteration?: boolean;
        emitBOM?: boolean;
        emitDecoratorMetadata?: boolean;
        experimentalDecorators?: boolean;
        forceConsistentCasingInFileNames?: boolean;
        generateCpuProfile?: string;
        help?: boolean;
        importHelpers?: boolean;
        importsNotUsedAsValues?: ImportsNotUsedAsValues;
        init?: boolean;
        inlineSourceMap?: boolean;
        inlineSources?: boolean;
        isolatedModules?: boolean;
        jsx?: JsxEmit;
        keyofStringsOnly?: boolean;
        lib?: string[];
        listEmittedFiles?: boolean;
        listFiles?: boolean;
        listFilesOnly?: boolean;
        locale?: string;
        mapRoot?: string;
        maxNodeModuleJsDepth?: number;
        module?: ModuleKind;
        moduleResolution?: ModuleResolutionKind;
        newLine?: NewLineKind;
        noEmit?: boolean;
        noEmitForJsFiles?: boolean;
        noEmitHelpers?: boolean;
        noEmitOnError?: boolean;
        noErrorTruncation?: boolean;
        noFallthroughCasesInSwitch?: boolean;
        noImplicitAny?: boolean;
        noImplicitReturns?: boolean;
        noImplicitThis?: boolean;
        noStrictGenericChecks?: boolean;
        noUnusedLocals?: boolean;
        noUnusedParameters?: boolean;
        noImplicitUseStrict?: boolean;
        assumeChangesOnlyAffectDirectDependencies?: boolean;
        noLib?: boolean;
        noResolve?: boolean;
        out?: string;
        outDir?: string;
        outFile?: string;
        paths?: MapLike<string[]>;
        plugins?: PluginImport[];
        preserveConstEnums?: boolean;
        preserveSymlinks?: boolean;
        preserveWatchOutput?: boolean;
        project?: string;
        pretty?: boolean;
        reactNamespace?: string;
        jsxFactory?: string;
        composite?: boolean;
        incremental?: boolean;
        tsBuildInfoFile?: string;
        removeComments?: boolean;
        rootDir?: string;
        rootDirs?: string[];
        skipLibCheck?: boolean;
        skipDefaultLibCheck?: boolean;
        sourceMap?: boolean;
        sourceRoot?: string;
        strict?: boolean;
        strictFunctionTypes?: boolean;
        strictBindCallApply?: boolean;
        strictNullChecks?: boolean;
        strictPropertyInitialization?: boolean;
        stripInternal?: boolean;
        suppressExcessPropertyErrors?: boolean;
        suppressImplicitAnyIndexErrors?: boolean;
        suppressOutputPathCheck?: boolean;
        target?: ScriptTarget;
        traceResolution?: boolean;
        resolveJsonModule?: boolean;
        types?: string[];
        typeRoots?: string[];
        version?: boolean;
        watch?: boolean;
        esModuleInterop?: boolean;
        showConfig?: boolean;
        useDefineForClassFields?: boolean;
        [option: string]: CompilerOptionsValue | TsConfigSourceFile | undefined;
    }
    export interface WatchOptions {
        watchFile?: WatchFileKind;
        watchDirectory?: WatchDirectoryKind;
        fallbackPolling?: PollingWatchKind;
        synchronousWatchDirectory?: boolean;
        [option: string]: CompilerOptionsValue | undefined;
    }
    export interface TypeAcquisition {
        enableAutoDiscovery?: boolean;
        enable?: boolean;
        include?: string[];
        exclude?: string[];
        [option: string]: string[] | boolean | undefined;
    }
    export enum ModuleKind {
        None = 0,
        CommonJS = 1,
        AMD = 2,
        UMD = 3,
        System = 4,
        ES2015 = 5,
        ES2020 = 6,
        ESNext = 99
    }
    export const enum JsxEmit {
        None = 0,
        Preserve = 1,
        React = 2,
        ReactNative = 3
    }
    export const enum ImportsNotUsedAsValues {
        Remove = 0,
        Preserve = 1,
        Error = 2
    }
    export const enum NewLineKind {
        CarriageReturnLineFeed = 0,
        LineFeed = 1
    }
    export interface LineAndCharacter {
        line: number;
        character: number;
    }
    export const enum ScriptKind {
        Unknown = 0,
        JS = 1,
        JSX = 2,
        TS = 3,
        TSX = 4,
        External = 5,
        JSON = 6,
        Deferred = 7
    }
    export const enum ScriptTarget {
        ES3 = 0,
        ES5 = 1,
        ES2015 = 2,
        ES2016 = 3,
        ES2017 = 4,
        ES2018 = 5,
        ES2019 = 6,
        ES2020 = 7,
        ESNext = 99,
        JSON = 100,
        Latest = 99
    }
    export const enum LanguageVariant {
        Standard = 0,
        JSX = 1
    }
    export interface ParsedCommandLine {
        options: CompilerOptions;
        typeAcquisition?: TypeAcquisition;
        fileNames: string[];
        projectReferences?: readonly ProjectReference[];
        watchOptions?: WatchOptions;
        raw?: any;
        errors: Diagnostic[];
        wildcardDirectories?: MapLike<WatchDirectoryFlags>;
        compileOnSave?: boolean;
        configFileSpecs?: ConfigFileSpecs;
    }
    export const enum WatchDirectoryFlags {
        None = 0,
        Recursive = 1
    }
    export interface ConfigFileSpecs {
        filesSpecs: readonly string[] | undefined;
        includeSpecs?: readonly string[];
        excludeSpecs?: readonly string[];
        validatedIncludeSpecs?: readonly string[];
        validatedExcludeSpecs?: readonly string[];
        wildcardDirectories: MapLike<WatchDirectoryFlags>;
    }
    export interface ExpandResult {
        fileNames: string[];
        wildcardDirectories: MapLike<WatchDirectoryFlags>;
        spec: ConfigFileSpecs;
    }
    export type RequireResult<T = {}> = {
        module: T;
        modulePath?: string;
        error: undefined;
    } | {
        module: undefined;
        modulePath?: undefined;
        error: {
            stack?: string;
            message?: string;
        };
    };
    export interface CreateProgramOptions {
        rootNames: readonly string[];
        options: CompilerOptions;
        projectReferences?: readonly ProjectReference[];
        host?: CompilerHost;
        oldProgram?: Program;
        configFileParsingDiagnostics?: readonly Diagnostic[];
    }
    export interface CommandLineOptionBase {
        name: string;
        type: "string" | "number" | "boolean" | "object" | "list" | Map<number | string>;
        isFilePath?: boolean;
        shortName?: string;
        description?: DiagnosticMessage;
        paramType?: DiagnosticMessage;
        isTSConfigOnly?: boolean;
        isCommandLineOnly?: boolean;
        showInSimplifiedHelpView?: boolean;
        category?: DiagnosticMessage;
        strictFlag?: true;
        affectsSourceFile?: true;
        affectsModuleResolution?: true;
        affectsBindDiagnostics?: true;
        affectsSemanticDiagnostics?: true;
        affectsEmit?: true;
        transpileOptionValue?: boolean | undefined;
    }
    export interface CommandLineOptionOfPrimitiveType extends CommandLineOptionBase {
        type: "string" | "number" | "boolean";
    }
    export interface CommandLineOptionOfCustomType extends CommandLineOptionBase {
        type: Map<number | string>;
    }
    export interface DidYouMeanOptionsDiagnostics {
        optionDeclarations: CommandLineOption[];
        unknownOptionDiagnostic: DiagnosticMessage;
        unknownDidYouMeanDiagnostic: DiagnosticMessage;
    }
    export interface TsConfigOnlyOption extends CommandLineOptionBase {
        type: "object";
        elementOptions?: Map<CommandLineOption>;
        extraKeyDiagnostics?: DidYouMeanOptionsDiagnostics;
    }
    export interface CommandLineOptionOfListType extends CommandLineOptionBase {
        type: "list";
        element: CommandLineOptionOfCustomType | CommandLineOptionOfPrimitiveType | TsConfigOnlyOption;
    }
    export type CommandLineOption = CommandLineOptionOfCustomType | CommandLineOptionOfPrimitiveType | TsConfigOnlyOption | CommandLineOptionOfListType;
    export const enum CharacterCodes {
        nullCharacter = 0,
        maxAsciiCharacter = 127,
        lineFeed = 10,
        carriageReturn = 13,
        lineSeparator = 8232,
        paragraphSeparator = 8233,
        nextLine = 133,
        space = 32,
        nonBreakingSpace = 160,
        enQuad = 8192,
        emQuad = 8193,
        enSpace = 8194,
        emSpace = 8195,
        threePerEmSpace = 8196,
        fourPerEmSpace = 8197,
        sixPerEmSpace = 8198,
        figureSpace = 8199,
        punctuationSpace = 8200,
        thinSpace = 8201,
        hairSpace = 8202,
        zeroWidthSpace = 8203,
        narrowNoBreakSpace = 8239,
        ideographicSpace = 12288,
        mathematicalSpace = 8287,
        ogham = 5760,
        _ = 95,
        $ = 36,
        _0 = 48,
        _1 = 49,
        _2 = 50,
        _3 = 51,
        _4 = 52,
        _5 = 53,
        _6 = 54,
        _7 = 55,
        _8 = 56,
        _9 = 57,
        a = 97,
        b = 98,
        c = 99,
        d = 100,
        e = 101,
        f = 102,
        g = 103,
        h = 104,
        i = 105,
        j = 106,
        k = 107,
        l = 108,
        m = 109,
        n = 110,
        o = 111,
        p = 112,
        q = 113,
        r = 114,
        s = 115,
        t = 116,
        u = 117,
        v = 118,
        w = 119,
        x = 120,
        y = 121,
        z = 122,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        ampersand = 38,
        asterisk = 42,
        at = 64,
        backslash = 92,
        backtick = 96,
        bar = 124,
        caret = 94,
        closeBrace = 125,
        closeBracket = 93,
        closeParen = 41,
        colon = 58,
        comma = 44,
        dot = 46,
        doubleQuote = 34,
        equals = 61,
        exclamation = 33,
        greaterThan = 62,
        hash = 35,
        lessThan = 60,
        minus = 45,
        openBrace = 123,
        openBracket = 91,
        openParen = 40,
        percent = 37,
        plus = 43,
        question = 63,
        semicolon = 59,
        singleQuote = 39,
        slash = 47,
        tilde = 126,
        backspace = 8,
        formFeed = 12,
        byteOrderMark = 65279,
        tab = 9,
        verticalTab = 11
    }
    export interface ModuleResolutionHost {
        fileExists(fileName: string): boolean;
        readFile(fileName: string): string | undefined;
        trace?(s: string): void;
        directoryExists?(directoryName: string): boolean;
        realpath?(path: string): string;
        getCurrentDirectory?(): string;
        getDirectories?(path: string): string[];
    }
    export interface ResolvedModule {
        resolvedFileName: string;
        isExternalLibraryImport?: boolean;
    }
    export interface ResolvedModuleFull extends ResolvedModule {
        readonly originalPath?: string;
        extension: Extension;
        packageId?: PackageId;
    }
    export interface PackageId {
        name: string;
        subModuleName: string;
        version: string;
    }
    export const enum Extension {
        Ts = ".ts",
        Tsx = ".tsx",
        Dts = ".d.ts",
        Js = ".js",
        Jsx = ".jsx",
        Json = ".json",
        TsBuildInfo = ".tsbuildinfo"
    }
    export interface ResolvedModuleWithFailedLookupLocations {
        readonly resolvedModule: ResolvedModuleFull | undefined;
        readonly failedLookupLocations: readonly string[];
    }
    export interface ResolvedTypeReferenceDirective {
        primary: boolean;
        resolvedFileName: string | undefined;
        packageId?: PackageId;
        isExternalLibraryImport?: boolean;
    }
    export interface ResolvedTypeReferenceDirectiveWithFailedLookupLocations {
        readonly resolvedTypeReferenceDirective: ResolvedTypeReferenceDirective | undefined;
        readonly failedLookupLocations: readonly string[];
    }
    export type HasInvalidatedResolution = (sourceFile: Path) => boolean;
    export interface CompilerHost extends ModuleResolutionHost {
        getSourceFile(fileName: string, languageVersion: ScriptTarget, onError?: (message: string) => void, shouldCreateNewSourceFile?: boolean): SourceFile | undefined;
        getSourceFileByPath?(fileName: string, path: Path, languageVersion: ScriptTarget, onError?: (message: string) => void, shouldCreateNewSourceFile?: boolean): SourceFile | undefined;
        getCancellationToken?(): CancellationToken;
        getDefaultLibFileName(options: CompilerOptions): string;
        getDefaultLibLocation?(): string;
        writeFile: WriteFileCallback;
        getCurrentDirectory(): string;
        getCanonicalFileName(fileName: string): string;
        useCaseSensitiveFileNames(): boolean;
        getNewLine(): string;
        readDirectory?(rootDir: string, extensions: readonly string[], excludes: readonly string[] | undefined, includes: readonly string[], depth?: number): string[];
        resolveModuleNames?(moduleNames: string[], containingFile: string, reusedNames: string[] | undefined, redirectedReference: ResolvedProjectReference | undefined, options: CompilerOptions): (ResolvedModule | undefined)[];
        resolveTypeReferenceDirectives?(typeReferenceDirectiveNames: string[], containingFile: string, redirectedReference: ResolvedProjectReference | undefined, options: CompilerOptions): (ResolvedTypeReferenceDirective | undefined)[];
        getEnvironmentVariable?(name: string): string | undefined;
        onReleaseOldSourceFile?(oldSourceFile: SourceFile, oldOptions: CompilerOptions, hasSourceFileByPath: boolean): void;
        hasInvalidatedResolution?: HasInvalidatedResolution;
        hasChangedAutomaticTypeDirectiveNames?: boolean;
        createHash?(data: string): string;
        getParsedCommandLine?(fileName: string): ParsedCommandLine | undefined;
        setResolvedProjectReferenceCallbacks?(callbacks: ResolvedProjectReferenceCallbacks): void;
        useSourceOfProjectReferenceRedirect?(): boolean;
        createDirectory?(directory: string): void;
        getSymlinks?(): ReadonlyMap<string>;
    }
    export type SourceOfProjectReferenceRedirect = string | true;
    export interface ResolvedProjectReferenceCallbacks {
        getSourceOfProjectReferenceRedirect(fileName: string): SourceOfProjectReferenceRedirect | undefined;
        forEachResolvedProjectReference<T>(cb: (resolvedProjectReference: ResolvedProjectReference | undefined, resolvedProjectReferencePath: Path) => T | undefined): T | undefined;
    }
    export const enum TransformFlags {
        None = 0,
        ContainsTypeScript = 1,
        ContainsJsx = 2,
        ContainsESNext = 4,
        ContainsES2020 = 8,
        ContainsES2019 = 16,
        ContainsES2018 = 32,
        ContainsES2017 = 64,
        ContainsES2016 = 128,
        ContainsES2015 = 256,
        ContainsGenerator = 512,
        ContainsDestructuringAssignment = 1024,
        ContainsTypeScriptClassSyntax = 2048,
        ContainsLexicalThis = 4096,
        ContainsRestOrSpread = 8192,
        ContainsObjectRestOrSpread = 16384,
        ContainsComputedPropertyName = 32768,
        ContainsBlockScopedBinding = 65536,
        ContainsBindingPattern = 131072,
        ContainsYield = 262144,
        ContainsAwait = 524288,
        ContainsHoistedDeclarationOrCompletion = 1048576,
        ContainsDynamicImport = 2097152,
        ContainsClassFields = 4194304,
        HasComputedFlags = 536870912,
        AssertTypeScript = 1,
        AssertJsx = 2,
        AssertESNext = 4,
        AssertES2020 = 8,
        AssertES2019 = 16,
        AssertES2018 = 32,
        AssertES2017 = 64,
        AssertES2016 = 128,
        AssertES2015 = 256,
        AssertGenerator = 512,
        AssertDestructuringAssignment = 1024,
        OuterExpressionExcludes = 536870912,
        PropertyAccessExcludes = 536870912,
        NodeExcludes = 536870912,
        ArrowFunctionExcludes = 538920960,
        FunctionExcludes = 538925056,
        ConstructorExcludes = 538923008,
        MethodOrAccessorExcludes = 538923008,
        PropertyExcludes = 536875008,
        ClassExcludes = 536905728,
        ModuleExcludes = 537991168,
        TypeExcludes = -2,
        ObjectLiteralExcludes = 536922112,
        ArrayLiteralOrCallOrNewExcludes = 536879104,
        VariableDeclarationListExcludes = 537018368,
        ParameterExcludes = 536870912,
        CatchClauseExcludes = 536887296,
        BindingPatternExcludes = 536879104,
        PropertyNamePropagatingFlags = 4096
    }
    export interface SourceMapRange extends TextRange {
        source?: SourceMapSource;
    }
    export interface SourceMapSource {
        fileName: string;
        text: string;
        lineMap: readonly number[];
        skipTrivia?: (pos: number) => number;
    }
    export interface EmitNode {
        annotatedNodes?: Node[];
        flags: EmitFlags;
        leadingComments?: SynthesizedComment[];
        trailingComments?: SynthesizedComment[];
        commentRange?: TextRange;
        sourceMapRange?: SourceMapRange;
        tokenSourceMapRanges?: (SourceMapRange | undefined)[];
        constantValue?: string | number;
        externalHelpersModuleName?: Identifier;
        externalHelpers?: boolean;
        helpers?: EmitHelper[];
        startsOnNewLine?: boolean;
    }
    export const enum EmitFlags {
        None = 0,
        SingleLine = 1,
        AdviseOnEmitNode = 2,
        NoSubstitution = 4,
        CapturesThis = 8,
        NoLeadingSourceMap = 16,
        NoTrailingSourceMap = 32,
        NoSourceMap = 48,
        NoNestedSourceMaps = 64,
        NoTokenLeadingSourceMaps = 128,
        NoTokenTrailingSourceMaps = 256,
        NoTokenSourceMaps = 384,
        NoLeadingComments = 512,
        NoTrailingComments = 1024,
        NoComments = 1536,
        NoNestedComments = 2048,
        HelperName = 4096,
        ExportName = 8192,
        LocalName = 16384,
        InternalName = 32768,
        Indented = 65536,
        NoIndentation = 131072,
        AsyncFunctionBody = 262144,
        ReuseTempVariableScope = 524288,
        CustomPrologue = 1048576,
        NoHoisting = 2097152,
        HasEndOfDeclarationMarker = 4194304,
        Iterator = 8388608,
        NoAsciiEscaping = 16777216,
        TypeScriptClassWrapper = 33554432,
        NeverApplyImportHelper = 67108864
    }
    export interface EmitHelper {
        readonly name: string;
        readonly scoped: boolean;
        readonly text: string | ((node: EmitHelperUniqueNameCallback) => string);
        readonly priority?: number;
        readonly dependencies?: EmitHelper[];
    }
    export interface UnscopedEmitHelper extends EmitHelper {
        readonly scoped: false;
        readonly importName?: string;
        readonly text: string;
    }
    export type UniqueNameHandler = (baseName: string, checkFn?: (name: string) => boolean, optimistic?: boolean) => string;
    export type EmitHelperUniqueNameCallback = (name: string) => string;
    export const enum ExternalEmitHelpers {
        Extends = 1,
        Assign = 2,
        Rest = 4,
        Decorate = 8,
        Metadata = 16,
        Param = 32,
        Awaiter = 64,
        Generator = 128,
        Values = 256,
        Read = 512,
        Spread = 1024,
        SpreadArrays = 2048,
        Await = 4096,
        AsyncGenerator = 8192,
        AsyncDelegator = 16384,
        AsyncValues = 32768,
        ExportStar = 65536,
        MakeTemplateObject = 131072,
        ClassPrivateFieldGet = 262144,
        ClassPrivateFieldSet = 524288,
        CreateBinding = 1048576,
        FirstEmitHelper = 1,
        LastEmitHelper = 1048576,
        ForOfIncludes = 256,
        ForAwaitOfIncludes = 32768,
        AsyncGeneratorIncludes = 12288,
        AsyncDelegatorIncludes = 53248,
        SpreadIncludes = 1536
    }
    export const enum EmitHint {
        SourceFile = 0,
        Expression = 1,
        IdentifierName = 2,
        MappedTypeParameter = 3,
        Unspecified = 4,
        EmbeddedStatement = 5,
        JsxAttributeValue = 6
    }
    export interface SourceFileMayBeEmittedHost {
        getCompilerOptions(): CompilerOptions;
        isSourceFileFromExternalLibrary(file: SourceFile): boolean;
        getResolvedProjectReferenceToRedirect(fileName: string): ResolvedProjectReference | undefined;
        isSourceOfProjectReferenceRedirect(fileName: string): boolean;
    }
    export interface EmitHost extends ScriptReferenceHost, ModuleSpecifierResolutionHost, SourceFileMayBeEmittedHost {
        getSourceFiles(): readonly SourceFile[];
        useCaseSensitiveFileNames(): boolean;
        getCurrentDirectory(): string;
        getLibFileFromReference(ref: FileReference): SourceFile | undefined;
        getCommonSourceDirectory(): string;
        getCanonicalFileName(fileName: string): string;
        getNewLine(): string;
        isEmitBlocked(emitFileName: string): boolean;
        getPrependNodes(): readonly (InputFiles | UnparsedSource)[];
        writeFile: WriteFileCallback;
        getProgramBuildInfo(): ProgramBuildInfo | undefined;
        getSourceFileFromReference: Program["getSourceFileFromReference"];
        readonly redirectTargetsMap: RedirectTargetsMap;
    }
    export interface PropertyDescriptorAttributes {
        enumerable?: boolean | Expression;
        configurable?: boolean | Expression;
        writable?: boolean | Expression;
        value?: Expression;
        get?: Expression;
        set?: Expression;
    }
    export interface TransformationContext {
        getEmitResolver(): EmitResolver;
        getEmitHost(): EmitHost;
        getCompilerOptions(): CompilerOptions;
        startLexicalEnvironment(): void;
        suspendLexicalEnvironment(): void;
        resumeLexicalEnvironment(): void;
        endLexicalEnvironment(): Statement[] | undefined;
        hoistFunctionDeclaration(node: FunctionDeclaration): void;
        hoistVariableDeclaration(node: Identifier): void;
        requestEmitHelper(helper: EmitHelper): void;
        readEmitHelpers(): EmitHelper[] | undefined;
        enableSubstitution(kind: SyntaxKind): void;
        isSubstitutionEnabled(node: Node): boolean;
        onSubstituteNode: (hint: EmitHint, node: Node) => Node;
        enableEmitNotification(kind: SyntaxKind): void;
        isEmitNotificationEnabled(node: Node): boolean;
        onEmitNode: (hint: EmitHint, node: Node, emitCallback: (hint: EmitHint, node: Node) => void) => void;
        addDiagnostic(diag: DiagnosticWithLocation): void;
    }
    export interface TransformationResult<T extends Node> {
        transformed: T[];
        diagnostics?: DiagnosticWithLocation[];
        substituteNode(hint: EmitHint, node: Node): Node;
        emitNodeWithNotification(hint: EmitHint, node: Node, emitCallback: (hint: EmitHint, node: Node) => void): void;
        isEmitNotificationEnabled?(node: Node): boolean;
        dispose(): void;
    }
    export type TransformerFactory<T extends Node> = (context: TransformationContext) => Transformer<T>;
    export type Transformer<T extends Node> = (node: T) => T;
    export type Visitor = (node: Node) => VisitResult<Node>;
    export type VisitResult<T extends Node> = T | T[] | undefined;
    export interface Printer {
        printNode(hint: EmitHint, node: Node, sourceFile: SourceFile): string;
        printList<T extends Node>(format: ListFormat, list: NodeArray<T>, sourceFile: SourceFile): string;
        printFile(sourceFile: SourceFile): string;
        printBundle(bundle: Bundle): string;
        writeNode(hint: EmitHint, node: Node, sourceFile: SourceFile | undefined, writer: EmitTextWriter): void;
        writeList<T extends Node>(format: ListFormat, list: NodeArray<T> | undefined, sourceFile: SourceFile | undefined, writer: EmitTextWriter): void;
        writeFile(sourceFile: SourceFile, writer: EmitTextWriter, sourceMapGenerator: SourceMapGenerator | undefined): void;
        writeBundle(bundle: Bundle, writer: EmitTextWriter, sourceMapGenerator: SourceMapGenerator | undefined): void;
        bundleFileInfo?: BundleFileInfo;
    }
    export const enum BundleFileSectionKind {
        Prologue = "prologue",
        EmitHelpers = "emitHelpers",
        NoDefaultLib = "no-default-lib",
        Reference = "reference",
        Type = "type",
        Lib = "lib",
        Prepend = "prepend",
        Text = "text",
        Internal = "internal"
    }
    export interface BundleFileSectionBase extends TextRange {
        kind: BundleFileSectionKind;
        data?: string;
    }
    export interface BundleFilePrologue extends BundleFileSectionBase {
        kind: BundleFileSectionKind.Prologue;
        data: string;
    }
    export interface BundleFileEmitHelpers extends BundleFileSectionBase {
        kind: BundleFileSectionKind.EmitHelpers;
        data: string;
    }
    export interface BundleFileHasNoDefaultLib extends BundleFileSectionBase {
        kind: BundleFileSectionKind.NoDefaultLib;
    }
    export interface BundleFileReference extends BundleFileSectionBase {
        kind: BundleFileSectionKind.Reference | BundleFileSectionKind.Type | BundleFileSectionKind.Lib;
        data: string;
    }
    export interface BundleFilePrepend extends BundleFileSectionBase {
        kind: BundleFileSectionKind.Prepend;
        data: string;
        texts: BundleFileTextLike[];
    }
    export type BundleFileTextLikeKind = BundleFileSectionKind.Text | BundleFileSectionKind.Internal;
    export interface BundleFileTextLike extends BundleFileSectionBase {
        kind: BundleFileTextLikeKind;
    }
    export type BundleFileSection = BundleFilePrologue | BundleFileEmitHelpers | BundleFileHasNoDefaultLib | BundleFileReference | BundleFilePrepend | BundleFileTextLike;
    export interface SourceFilePrologueDirectiveExpression extends TextRange {
        text: string;
    }
    export interface SourceFilePrologueDirective extends TextRange {
        expression: SourceFilePrologueDirectiveExpression;
    }
    export interface SourceFilePrologueInfo {
        file: number;
        text: string;
        directives: SourceFilePrologueDirective[];
    }
    export interface SourceFileInfo {
        helpers?: string[];
        prologues?: SourceFilePrologueInfo[];
    }
    export interface BundleFileInfo {
        sections: BundleFileSection[];
        sources?: SourceFileInfo;
    }
    export interface BundleBuildInfo {
        js?: BundleFileInfo;
        dts?: BundleFileInfo;
        commonSourceDirectory: string;
        sourceFiles: readonly string[];
    }
    export interface BuildInfo {
        bundle?: BundleBuildInfo;
        program?: ProgramBuildInfo;
        version: string;
    }
    export interface PrintHandlers {
        hasGlobalName?(name: string): boolean;
        onEmitNode?(hint: EmitHint, node: Node | undefined, emitCallback: (hint: EmitHint, node: Node | undefined) => void): void;
        isEmitNotificationEnabled?(node: Node | undefined): boolean;
        substituteNode?(hint: EmitHint, node: Node): Node;
        onEmitSourceMapOfNode?: (hint: EmitHint, node: Node, emitCallback: (hint: EmitHint, node: Node) => void) => void;
        onEmitSourceMapOfToken?: (node: Node | undefined, token: SyntaxKind, writer: (s: string) => void, pos: number, emitCallback: (token: SyntaxKind, writer: (s: string) => void, pos: number) => number) => number;
        onEmitSourceMapOfPosition?: (pos: number) => void;
        onSetSourceFile?: (node: SourceFile) => void;
        onBeforeEmitNodeArray?: (nodes: NodeArray<any> | undefined) => void;
        onAfterEmitNodeArray?: (nodes: NodeArray<any> | undefined) => void;
        onBeforeEmitToken?: (node: Node) => void;
        onAfterEmitToken?: (node: Node) => void;
    }
    export interface PrinterOptions {
        removeComments?: boolean;
        newLine?: NewLineKind;
        omitTrailingSemicolon?: boolean;
        noEmitHelpers?: boolean;
        module?: CompilerOptions["module"];
        target?: CompilerOptions["target"];
        sourceMap?: boolean;
        inlineSourceMap?: boolean;
        inlineSources?: boolean;
        extendedDiagnostics?: boolean;
        onlyPrintJsDocStyle?: boolean;
        neverAsciiEscape?: boolean;
        writeBundleFileInfo?: boolean;
        recordInternalSection?: boolean;
        stripInternal?: boolean;
        relativeToBuildInfo?: (path: string) => string;
    }
    export interface RawSourceMap {
        version: 3;
        file: string;
        sourceRoot?: string | null;
        sources: string[];
        sourcesContent?: (string | null)[] | null;
        mappings: string;
        names?: string[] | null;
    }
    export interface SourceMapGenerator {
        getSources(): readonly string[];
        addSource(fileName: string): number;
        setSourceContent(sourceIndex: number, content: string | null): void;
        addName(name: string): number;
        addMapping(generatedLine: number, generatedCharacter: number): void;
        addMapping(generatedLine: number, generatedCharacter: number, sourceIndex: number, sourceLine: number, sourceCharacter: number, nameIndex?: number): void;
        appendSourceMap(generatedLine: number, generatedCharacter: number, sourceMap: RawSourceMap, sourceMapPath: string, start?: LineAndCharacter, end?: LineAndCharacter): void;
        toJSON(): RawSourceMap;
        toString(): string;
    }
    export interface DocumentPositionMapperHost {
        getSourceFileLike(fileName: string): SourceFileLike | undefined;
        getCanonicalFileName(path: string): string;
        log(text: string): void;
    }
    export interface DocumentPositionMapper {
        getSourcePosition(input: DocumentPosition): DocumentPosition;
        getGeneratedPosition(input: DocumentPosition): DocumentPosition;
    }
    export interface DocumentPosition {
        fileName: string;
        pos: number;
    }
    export interface EmitTextWriter extends SymbolWriter {
        write(s: string): void;
        writeTrailingSemicolon(text: string): void;
        writeComment(text: string): void;
        getText(): string;
        rawWrite(s: string): void;
        writeLiteral(s: string): void;
        getTextPos(): number;
        getLine(): number;
        getColumn(): number;
        getIndent(): number;
        isAtStartOfLine(): boolean;
        hasTrailingComment(): boolean;
        hasTrailingWhitespace(): boolean;
        getTextPosWithWriteLine?(): number;
    }
    export interface GetEffectiveTypeRootsHost {
        directoryExists?(directoryName: string): boolean;
        getCurrentDirectory?(): string;
    }
    export interface ModuleSpecifierResolutionHost extends GetEffectiveTypeRootsHost {
        useCaseSensitiveFileNames?(): boolean;
        fileExists?(path: string): boolean;
        readFile?(path: string): string | undefined;
        getProbableSymlinks?(files: readonly SourceFile[]): ReadonlyMap<string>;
        getGlobalTypingsCacheLocation?(): string | undefined;
    }
    export interface SymbolTracker {
        trackSymbol?(symbol: Symbol, enclosingDeclaration: Node | undefined, meaning: SymbolFlags): void;
        reportInaccessibleThisError?(): void;
        reportPrivateInBaseOfClassExpression?(propertyName: string): void;
        reportInaccessibleUniqueSymbolError?(): void;
        reportLikelyUnsafeImportRequiredError?(specifier: string): void;
        moduleResolverHost?: ModuleSpecifierResolutionHost & {
            getSourceFiles(): readonly SourceFile[];
            getCommonSourceDirectory(): string;
        };
        trackReferencedAmbientModule?(decl: ModuleDeclaration, symbol: Symbol): void;
        trackExternalModuleSymbolOfImportTypeNode?(symbol: Symbol): void;
    }
    export interface TextSpan {
        start: number;
        length: number;
    }
    export interface TextChangeRange {
        span: TextSpan;
        newLength: number;
    }
    export interface DiagnosticCollection {
        add(diagnostic: Diagnostic): void;
        lookup(diagnostic: Diagnostic): Diagnostic | undefined;
        getGlobalDiagnostics(): Diagnostic[];
        getDiagnostics(): Diagnostic[];
        getDiagnostics(fileName: string): DiagnosticWithLocation[];
        reattachFileDiagnostics(newFile: SourceFile): void;
    }
    export interface SyntaxList extends Node {
        _children: Node[];
    }
    export const enum ListFormat {
        None = 0,
        SingleLine = 0,
        MultiLine = 1,
        PreserveLines = 2,
        LinesMask = 3,
        NotDelimited = 0,
        BarDelimited = 4,
        AmpersandDelimited = 8,
        CommaDelimited = 16,
        AsteriskDelimited = 32,
        DelimitersMask = 60,
        AllowTrailingComma = 64,
        Indented = 128,
        SpaceBetweenBraces = 256,
        SpaceBetweenSiblings = 512,
        Braces = 1024,
        Parenthesis = 2048,
        AngleBrackets = 4096,
        SquareBrackets = 8192,
        BracketsMask = 15360,
        OptionalIfUndefined = 16384,
        OptionalIfEmpty = 32768,
        Optional = 49152,
        PreferNewLine = 65536,
        NoTrailingNewLine = 131072,
        NoInterveningComments = 262144,
        NoSpaceIfEmpty = 524288,
        SingleElement = 1048576,
        Modifiers = 262656,
        HeritageClauses = 512,
        SingleLineTypeLiteralMembers = 768,
        MultiLineTypeLiteralMembers = 32897,
        TupleTypeElements = 528,
        UnionTypeConstituents = 516,
        IntersectionTypeConstituents = 520,
        ObjectBindingPatternElements = 525136,
        ArrayBindingPatternElements = 524880,
        ObjectLiteralExpressionProperties = 526226,
        ArrayLiteralExpressionElements = 8914,
        CommaListElements = 528,
        CallExpressionArguments = 2576,
        NewExpressionArguments = 18960,
        TemplateExpressionSpans = 262144,
        SingleLineBlockStatements = 768,
        MultiLineBlockStatements = 129,
        VariableDeclarationList = 528,
        SingleLineFunctionBodyStatements = 768,
        MultiLineFunctionBodyStatements = 1,
        ClassHeritageClauses = 0,
        ClassMembers = 129,
        InterfaceMembers = 129,
        EnumMembers = 145,
        CaseBlockClauses = 129,
        NamedImportsOrExportsElements = 525136,
        JsxElementOrFragmentChildren = 262144,
        JsxElementAttributes = 262656,
        CaseOrDefaultClauseStatements = 163969,
        HeritageClauseTypes = 528,
        SourceFileStatements = 131073,
        Decorators = 49153,
        TypeArguments = 53776,
        TypeParameters = 53776,
        Parameters = 2576,
        IndexSignatureParameters = 8848,
        JSDocComment = 33
    }
    export const enum PragmaKindFlags {
        None = 0,
        TripleSlashXML = 1,
        SingleLine = 2,
        MultiLine = 4,
        All = 7,
        Default = 7
    }
    interface PragmaArgumentSpecification<TName extends string> {
        name: TName;
        optional?: boolean;
        captureSpan?: boolean;
    }
    export interface PragmaDefinition<T1 extends string = string, T2 extends string = string, T3 extends string = string, T4 extends string = string> {
        args?: readonly [PragmaArgumentSpecification<T1>] | readonly [PragmaArgumentSpecification<T1>, PragmaArgumentSpecification<T2>] | readonly [PragmaArgumentSpecification<T1>, PragmaArgumentSpecification<T2>, PragmaArgumentSpecification<T3>] | readonly [PragmaArgumentSpecification<T1>, PragmaArgumentSpecification<T2>, PragmaArgumentSpecification<T3>, PragmaArgumentSpecification<T4>];
        kind?: PragmaKindFlags;
    }
    export const commentPragmas: {
        readonly reference: {
            readonly args: readonly [{
                readonly name: "types";
                readonly optional: true;
                readonly captureSpan: true;
            }, {
                readonly name: "lib";
                readonly optional: true;
                readonly captureSpan: true;
            }, {
                readonly name: "path";
                readonly optional: true;
                readonly captureSpan: true;
            }, {
                readonly name: "no-default-lib";
                readonly optional: true;
            }];
            readonly kind: PragmaKindFlags;
        };
        readonly "amd-dependency": {
            readonly args: readonly [{
                readonly name: "path";
            }, {
                readonly name: "name";
                readonly optional: true;
            }];
            readonly kind: PragmaKindFlags;
        };
        readonly "amd-module": {
            readonly args: readonly [{
                readonly name: "name";
            }];
            readonly kind: PragmaKindFlags;
        };
        readonly "ts-check": {
            readonly kind: PragmaKindFlags;
        };
        readonly "ts-nocheck": {
            readonly kind: PragmaKindFlags;
        };
        readonly jsx: {
            readonly args: readonly [{
                readonly name: "factory";
            }];
            readonly kind: PragmaKindFlags;
        };
    };
    type PragmaArgTypeMaybeCapture<TDesc> = TDesc extends {
        captureSpan: true;
    } ? {
        value: string;
        pos: number;
        end: number;
    } : string;
    type PragmaArgTypeOptional<TDesc, TName extends string> = TDesc extends {
        optional: true;
    } ? {
        [K in TName]?: PragmaArgTypeMaybeCapture<TDesc>;
    } : {
        [K in TName]: PragmaArgTypeMaybeCapture<TDesc>;
    };
    type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
    type ArgumentDefinitionToFieldUnion<T extends readonly PragmaArgumentSpecification<any>[]> = {
        [K in keyof T]: PragmaArgTypeOptional<T[K], T[K] extends {
            name: infer TName;
        } ? TName extends string ? TName : never : never>;
    }[Extract<keyof T, number>];
    type PragmaArgumentType<KPrag extends keyof ConcretePragmaSpecs> = ConcretePragmaSpecs[KPrag] extends {
        args: readonly PragmaArgumentSpecification<any>[];
    } ? UnionToIntersection<ArgumentDefinitionToFieldUnion<ConcretePragmaSpecs[KPrag]["args"]>> : never;
    type ConcretePragmaSpecs = typeof commentPragmas;
    export type PragmaPseudoMap = {
        [K in keyof ConcretePragmaSpecs]: {
            arguments: PragmaArgumentType<K>;
            range: CommentRange;
        };
    };
    export type PragmaPseudoMapEntry = {
        [K in keyof PragmaPseudoMap]: {
            name: K;
            args: PragmaPseudoMap[K];
        };
    }[keyof PragmaPseudoMap];
    export interface ReadonlyPragmaMap extends ReadonlyMap<PragmaPseudoMap[keyof PragmaPseudoMap] | PragmaPseudoMap[keyof PragmaPseudoMap][]> {
        get<TKey extends keyof PragmaPseudoMap>(key: TKey): PragmaPseudoMap[TKey] | PragmaPseudoMap[TKey][];
        forEach(action: <TKey extends keyof PragmaPseudoMap>(value: PragmaPseudoMap[TKey] | PragmaPseudoMap[TKey][], key: TKey) => void): void;
    }
    export interface PragmaMap extends Map<PragmaPseudoMap[keyof PragmaPseudoMap] | PragmaPseudoMap[keyof PragmaPseudoMap][]>, ReadonlyPragmaMap {
        set<TKey extends keyof PragmaPseudoMap>(key: TKey, value: PragmaPseudoMap[TKey] | PragmaPseudoMap[TKey][]): this;
        get<TKey extends keyof PragmaPseudoMap>(key: TKey): PragmaPseudoMap[TKey] | PragmaPseudoMap[TKey][];
        forEach(action: <TKey extends keyof PragmaPseudoMap>(value: PragmaPseudoMap[TKey] | PragmaPseudoMap[TKey][], key: TKey) => void): void;
    }
    export interface CommentDirectivesMap {
        getUnusedExpectations(): CommentDirective[];
        markUsed(matchedLine: number): boolean;
    }
    export interface UserPreferences {
        readonly disableSuggestions?: boolean;
        readonly quotePreference?: "auto" | "double" | "single";
        readonly includeCompletionsForModuleExports?: boolean;
        readonly includeAutomaticOptionalChainCompletions?: boolean;
        readonly includeCompletionsWithInsertText?: boolean;
        readonly importModuleSpecifierPreference?: "auto" | "relative" | "non-relative";
        readonly importModuleSpecifierEnding?: "auto" | "minimal" | "index" | "js";
        readonly allowTextChangesInNewFiles?: boolean;
        readonly providePrefixAndSuffixTextForRename?: boolean;
    }
    export interface PseudoBigInt {
        negative: boolean;
        base10Value: string;
    }
    export {};
}
declare function setTimeout(handler: (...args: any[]) => void, timeout: number): any;
declare function clearTimeout(handle: any): void;
declare namespace ts {
    export function generateDjb2Hash(data: string): string;
    export function setStackTraceLimit(): void;
    export enum FileWatcherEventKind {
        Created = 0,
        Changed = 1,
        Deleted = 2
    }
    export type FileWatcherCallback = (fileName: string, eventKind: FileWatcherEventKind) => void;
    export type DirectoryWatcherCallback = (fileName: string) => void;
    export interface WatchedFile {
        readonly fileName: string;
        readonly callback: FileWatcherCallback;
        mtime: Date;
    }
    export enum PollingInterval {
        High = 2000,
        Medium = 500,
        Low = 250
    }
    export type HostWatchFile = (fileName: string, callback: FileWatcherCallback, pollingInterval: PollingInterval, options: WatchOptions | undefined) => FileWatcher;
    export type HostWatchDirectory = (fileName: string, callback: DirectoryWatcherCallback, recursive: boolean, options: WatchOptions | undefined) => FileWatcher;
    export const missingFileModifiedTime: Date;
    export let unchangedPollThresholds: {
        250: number;
        500: number;
        2000: number;
    };
    export function setCustomPollingValues(system: System): void;
    export function createDynamicPriorityPollingWatchFile(host: {
        getModifiedTime: NonNullable<System["getModifiedTime"]>;
        setTimeout: NonNullable<System["setTimeout"]>;
    }): HostWatchFile;
    export function createSingleFileWatcherPerName(watchFile: HostWatchFile, useCaseSensitiveFileNames: boolean): HostWatchFile;
    export function onWatchedFileStat(watchedFile: WatchedFile, modifiedTime: Date): boolean;
    export function getFileWatcherEventKind(oldTime: number, newTime: number): FileWatcherEventKind;
    export const ignoredPaths: string[];
    export let sysLog: (s: string) => void;
    export function setSysLog(logger: typeof sysLog): void;
    export interface RecursiveDirectoryWatcherHost {
        watchDirectory: HostWatchDirectory;
        useCaseSensitiveFileNames: boolean;
        getAccessibleSortedChildDirectories(path: string): readonly string[];
        directoryExists(dir: string): boolean;
        realpath(s: string): string;
        setTimeout: NonNullable<System["setTimeout"]>;
        clearTimeout: NonNullable<System["clearTimeout"]>;
    }
    export function createDirectoryWatcherSupportingRecursive(host: RecursiveDirectoryWatcherHost): HostWatchDirectory;
    export type FsWatchCallback = (eventName: "rename" | "change", relativeFileName: string | undefined) => void;
    export type FsWatch = (fileOrDirectory: string, entryKind: FileSystemEntryKind, callback: FsWatchCallback, recursive: boolean, fallbackPollingInterval: PollingInterval, fallbackOptions: WatchOptions | undefined) => FileWatcher;
    export const enum FileSystemEntryKind {
        File = 0,
        Directory = 1
    }
    export function createFileWatcherCallback(callback: FsWatchCallback): FileWatcherCallback;
    export interface CreateSystemWatchFunctions {
        pollingWatchFile: HostWatchFile;
        getModifiedTime: NonNullable<System["getModifiedTime"]>;
        setTimeout: NonNullable<System["setTimeout"]>;
        clearTimeout: NonNullable<System["clearTimeout"]>;
        fsWatch: FsWatch;
        fileExists: System["fileExists"];
        useCaseSensitiveFileNames: boolean;
        fsSupportsRecursiveFsWatch: boolean;
        directoryExists: System["directoryExists"];
        getAccessibleSortedChildDirectories(path: string): readonly string[];
        realpath(s: string): string;
        tscWatchFile: string | undefined;
        useNonPollingWatchers?: boolean;
        tscWatchDirectory: string | undefined;
    }
    export function createSystemWatchFunctions({ pollingWatchFile, getModifiedTime, setTimeout, clearTimeout, fsWatch, fileExists, useCaseSensitiveFileNames, fsSupportsRecursiveFsWatch, directoryExists, getAccessibleSortedChildDirectories, realpath, tscWatchFile, useNonPollingWatchers, tscWatchDirectory, }: CreateSystemWatchFunctions): {
        watchFile: HostWatchFile;
        watchDirectory: HostWatchDirectory;
    };
    export function patchWriteFileEnsuringDirectory(sys: System): void;
    export type BufferEncoding = "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex";
    interface NodeBuffer extends Uint8Array {
        constructor: any;
        write(str: string, encoding?: BufferEncoding): number;
        write(str: string, offset: number, encoding?: BufferEncoding): number;
        write(str: string, offset: number, length: number, encoding?: BufferEncoding): number;
        toString(encoding?: string, start?: number, end?: number): string;
        toJSON(): {
            type: "Buffer";
            data: number[];
        };
        equals(otherBuffer: Uint8Array): boolean;
        compare(otherBuffer: Uint8Array, targetStart?: number, targetEnd?: number, sourceStart?: number, sourceEnd?: number): number;
        copy(targetBuffer: Uint8Array, targetStart?: number, sourceStart?: number, sourceEnd?: number): number;
        slice(begin?: number, end?: number): Buffer;
        subarray(begin?: number, end?: number): Buffer;
        writeUIntLE(value: number, offset: number, byteLength: number): number;
        writeUIntBE(value: number, offset: number, byteLength: number): number;
        writeIntLE(value: number, offset: number, byteLength: number): number;
        writeIntBE(value: number, offset: number, byteLength: number): number;
        readUIntLE(offset: number, byteLength: number): number;
        readUIntBE(offset: number, byteLength: number): number;
        readIntLE(offset: number, byteLength: number): number;
        readIntBE(offset: number, byteLength: number): number;
        readUInt8(offset: number): number;
        readUInt16LE(offset: number): number;
        readUInt16BE(offset: number): number;
        readUInt32LE(offset: number): number;
        readUInt32BE(offset: number): number;
        readInt8(offset: number): number;
        readInt16LE(offset: number): number;
        readInt16BE(offset: number): number;
        readInt32LE(offset: number): number;
        readInt32BE(offset: number): number;
        readFloatLE(offset: number): number;
        readFloatBE(offset: number): number;
        readDoubleLE(offset: number): number;
        readDoubleBE(offset: number): number;
        reverse(): this;
        swap16(): Buffer;
        swap32(): Buffer;
        swap64(): Buffer;
        writeUInt8(value: number, offset: number): number;
        writeUInt16LE(value: number, offset: number): number;
        writeUInt16BE(value: number, offset: number): number;
        writeUInt32LE(value: number, offset: number): number;
        writeUInt32BE(value: number, offset: number): number;
        writeInt8(value: number, offset: number): number;
        writeInt16LE(value: number, offset: number): number;
        writeInt16BE(value: number, offset: number): number;
        writeInt32LE(value: number, offset: number): number;
        writeInt32BE(value: number, offset: number): number;
        writeFloatLE(value: number, offset: number): number;
        writeFloatBE(value: number, offset: number): number;
        writeDoubleLE(value: number, offset: number): number;
        writeDoubleBE(value: number, offset: number): number;
        readBigUInt64BE?(offset?: number): bigint;
        readBigUInt64LE?(offset?: number): bigint;
        readBigInt64BE?(offset?: number): bigint;
        readBigInt64LE?(offset?: number): bigint;
        writeBigInt64BE?(value: bigint, offset?: number): number;
        writeBigInt64LE?(value: bigint, offset?: number): number;
        writeBigUInt64BE?(value: bigint, offset?: number): number;
        writeBigUInt64LE?(value: bigint, offset?: number): number;
        fill(value: string | Uint8Array | number, offset?: number, end?: number, encoding?: BufferEncoding): this;
        indexOf(value: string | number | Uint8Array, byteOffset?: number, encoding?: BufferEncoding): number;
        lastIndexOf(value: string | number | Uint8Array, byteOffset?: number, encoding?: BufferEncoding): number;
        entries(): IterableIterator<[number, number]>;
        includes(value: string | number | Buffer, byteOffset?: number, encoding?: BufferEncoding): boolean;
        keys(): IterableIterator<number>;
        values(): IterableIterator<number>;
    }
    interface Buffer extends NodeBuffer {
    }
    export interface System {
        args: string[];
        newLine: string;
        useCaseSensitiveFileNames: boolean;
        write(s: string): void;
        writeOutputIsTTY?(): boolean;
        readFile(path: string, encoding?: string): string | undefined;
        getFileSize?(path: string): number;
        writeFile(path: string, data: string, writeByteOrderMark?: boolean): void;
        watchFile?(path: string, callback: FileWatcherCallback, pollingInterval?: number, options?: WatchOptions): FileWatcher;
        watchDirectory?(path: string, callback: DirectoryWatcherCallback, recursive?: boolean, options?: WatchOptions): FileWatcher;
        resolvePath(path: string): string;
        fileExists(path: string): boolean;
        directoryExists(path: string): boolean;
        createDirectory(path: string): void;
        getExecutingFilePath(): string;
        getCurrentDirectory(): string;
        getDirectories(path: string): string[];
        readDirectory(path: string, extensions?: readonly string[], exclude?: readonly string[], include?: readonly string[], depth?: number): string[];
        getModifiedTime?(path: string): Date | undefined;
        setModifiedTime?(path: string, time: Date): void;
        deleteFile?(path: string): void;
        createHash?(data: string): string;
        createSHA256Hash?(data: string): string;
        getMemoryUsage?(): number;
        exit(exitCode?: number): void;
        enableCPUProfiler?(path: string, continuation: () => void): boolean;
        disableCPUProfiler?(continuation: () => void): boolean;
        realpath?(path: string): string;
        getEnvironmentVariable(name: string): string;
        tryEnableSourceMapsForHost?(): void;
        debugMode?: boolean;
        setTimeout?(callback: (...args: any[]) => void, ms: number, ...args: any[]): any;
        clearTimeout?(timeoutId: any): void;
        clearScreen?(): void;
        setBlocking?(): void;
        base64decode?(input: string): string;
        base64encode?(input: string): string;
        bufferFrom?(input: string, encoding?: string): Buffer;
        now?(): Date;
        require?(baseDir: string, moduleName: string): RequireResult;
    }
    export interface FileWatcher {
        close(): void;
    }
    export function getNodeMajorVersion(): number | undefined;
    export let sys: System;
    export {};
}
declare namespace ts {
    const directorySeparator = "/";
    function isAnyDirectorySeparator(charCode: number): boolean;
    function isUrl(path: string): boolean;
    function isRootedDiskPath(path: string): boolean;
    function isDiskPathRoot(path: string): boolean;
    function pathIsAbsolute(path: string): boolean;
    function pathIsRelative(path: string): boolean;
    function hasExtension(fileName: string): boolean;
    function fileExtensionIs(path: string, extension: string): boolean;
    function fileExtensionIsOneOf(path: string, extensions: readonly string[]): boolean;
    function hasTrailingDirectorySeparator(path: string): boolean;
    function getRootLength(path: string): number;
    function getDirectoryPath(path: Path): Path;
    function getDirectoryPath(path: string): string;
    function getBaseFileName(path: string): string;
    function getBaseFileName(path: string, extensions: string | readonly string[], ignoreCase: boolean): string;
    function getAnyExtensionFromPath(path: string): string;
    function getAnyExtensionFromPath(path: string, extensions: string | readonly string[], ignoreCase: boolean): string;
    function getPathComponents(path: string, currentDirectory?: string): string[];
    function getPathFromPathComponents(pathComponents: readonly string[]): string;
    function normalizeSlashes(path: string): string;
    function reducePathComponents(components: readonly string[]): string[];
    function combinePaths(path: string, ...paths: (string | undefined)[]): string;
    function resolvePath(path: string, ...paths: (string | undefined)[]): string;
    function getNormalizedPathComponents(path: string, currentDirectory: string | undefined): string[];
    function getNormalizedAbsolutePath(fileName: string, currentDirectory: string | undefined): string;
    function normalizePath(path: string): string;
    function getNormalizedAbsolutePathWithoutRoot(fileName: string, currentDirectory: string | undefined): string;
    function toPath(fileName: string, basePath: string | undefined, getCanonicalFileName: (path: string) => string): Path;
    function normalizePathAndParts(path: string): {
        path: string;
        parts: string[];
    };
    function removeTrailingDirectorySeparator(path: Path): Path;
    function removeTrailingDirectorySeparator(path: string): string;
    function ensureTrailingDirectorySeparator(path: Path): Path;
    function ensureTrailingDirectorySeparator(path: string): string;
    function ensurePathIsNonModuleName(path: string): string;
    function changeAnyExtension(path: string, ext: string): string;
    function changeAnyExtension(path: string, ext: string, extensions: string | readonly string[], ignoreCase: boolean): string;
    function comparePathsCaseSensitive(a: string, b: string): Comparison.LessThan | Comparison.LessThan | Comparison | Comparison.GreaterThan;
    function comparePathsCaseInsensitive(a: string, b: string): Comparison.LessThan | Comparison.LessThan | Comparison | Comparison.GreaterThan;
    function comparePaths(a: string, b: string, ignoreCase?: boolean): Comparison;
    function comparePaths(a: string, b: string, currentDirectory: string, ignoreCase?: boolean): Comparison;
    function containsPath(parent: string, child: string, ignoreCase?: boolean): boolean;
    function containsPath(parent: string, child: string, currentDirectory: string, ignoreCase?: boolean): boolean;
    function startsWithDirectory(fileName: string, directoryName: string, getCanonicalFileName: GetCanonicalFileName): boolean;
    function getPathComponentsRelativeTo(from: string, to: string, stringEqualityComparer: (a: string, b: string) => boolean, getCanonicalFileName: GetCanonicalFileName): string[];
    function getRelativePathFromDirectory(from: string, to: string, ignoreCase: boolean): string;
    function getRelativePathFromDirectory(fromDirectory: string, to: string, getCanonicalFileName: GetCanonicalFileName): string;
    function convertToRelativePath(absoluteOrRelativePath: string, basePath: string, getCanonicalFileName: (path: string) => string): string;
    function getRelativePathFromFile(from: string, to: string, getCanonicalFileName: GetCanonicalFileName): string;
    function getRelativePathToDirectoryOrUrl(directoryPathOrUrl: string, relativeOrAbsolutePath: string, currentDirectory: string, getCanonicalFileName: GetCanonicalFileName, isAbsolutePathAnUrl: boolean): string;
    function forEachAncestorDirectory<T>(directory: Path, callback: (directory: Path) => T | undefined): T | undefined;
    function forEachAncestorDirectory<T>(directory: string, callback: (directory: string) => T | undefined): T | undefined;
    function isNodeModulesDirectory(dirPath: Path): boolean;
}
declare namespace ts {
    const Diagnostics: {
        Unterminated_string_literal: DiagnosticMessage;
        Identifier_expected: DiagnosticMessage;
        _0_expected: DiagnosticMessage;
        A_file_cannot_have_a_reference_to_itself: DiagnosticMessage;
        The_parser_expected_to_find_a_to_match_the_token_here: DiagnosticMessage;
        Trailing_comma_not_allowed: DiagnosticMessage;
        Asterisk_Slash_expected: DiagnosticMessage;
        An_element_access_expression_should_take_an_argument: DiagnosticMessage;
        Unexpected_token: DiagnosticMessage;
        A_rest_parameter_or_binding_pattern_may_not_have_a_trailing_comma: DiagnosticMessage;
        A_rest_parameter_must_be_last_in_a_parameter_list: DiagnosticMessage;
        Parameter_cannot_have_question_mark_and_initializer: DiagnosticMessage;
        A_required_parameter_cannot_follow_an_optional_parameter: DiagnosticMessage;
        An_index_signature_cannot_have_a_rest_parameter: DiagnosticMessage;
        An_index_signature_parameter_cannot_have_an_accessibility_modifier: DiagnosticMessage;
        An_index_signature_parameter_cannot_have_a_question_mark: DiagnosticMessage;
        An_index_signature_parameter_cannot_have_an_initializer: DiagnosticMessage;
        An_index_signature_must_have_a_type_annotation: DiagnosticMessage;
        An_index_signature_parameter_must_have_a_type_annotation: DiagnosticMessage;
        An_index_signature_parameter_type_must_be_either_string_or_number: DiagnosticMessage;
        readonly_modifier_can_only_appear_on_a_property_declaration_or_index_signature: DiagnosticMessage;
        Accessibility_modifier_already_seen: DiagnosticMessage;
        _0_modifier_must_precede_1_modifier: DiagnosticMessage;
        _0_modifier_already_seen: DiagnosticMessage;
        _0_modifier_cannot_appear_on_a_class_element: DiagnosticMessage;
        super_must_be_followed_by_an_argument_list_or_member_access: DiagnosticMessage;
        Only_ambient_modules_can_use_quoted_names: DiagnosticMessage;
        Statements_are_not_allowed_in_ambient_contexts: DiagnosticMessage;
        A_declare_modifier_cannot_be_used_in_an_already_ambient_context: DiagnosticMessage;
        Initializers_are_not_allowed_in_ambient_contexts: DiagnosticMessage;
        _0_modifier_cannot_be_used_in_an_ambient_context: DiagnosticMessage;
        _0_modifier_cannot_be_used_with_a_class_declaration: DiagnosticMessage;
        _0_modifier_cannot_be_used_here: DiagnosticMessage;
        _0_modifier_cannot_appear_on_a_data_property: DiagnosticMessage;
        _0_modifier_cannot_appear_on_a_module_or_namespace_element: DiagnosticMessage;
        A_0_modifier_cannot_be_used_with_an_interface_declaration: DiagnosticMessage;
        Top_level_declarations_in_d_ts_files_must_start_with_either_a_declare_or_export_modifier: DiagnosticMessage;
        A_rest_parameter_cannot_be_optional: DiagnosticMessage;
        A_rest_parameter_cannot_have_an_initializer: DiagnosticMessage;
        A_set_accessor_must_have_exactly_one_parameter: DiagnosticMessage;
        A_set_accessor_cannot_have_an_optional_parameter: DiagnosticMessage;
        A_set_accessor_parameter_cannot_have_an_initializer: DiagnosticMessage;
        A_set_accessor_cannot_have_rest_parameter: DiagnosticMessage;
        A_get_accessor_cannot_have_parameters: DiagnosticMessage;
        Type_0_is_not_a_valid_async_function_return_type_in_ES5_SlashES3_because_it_does_not_refer_to_a_Promise_compatible_constructor_value: DiagnosticMessage;
        Accessors_are_only_available_when_targeting_ECMAScript_5_and_higher: DiagnosticMessage;
        An_async_function_or_method_must_have_a_valid_awaitable_return_type: DiagnosticMessage;
        The_return_type_of_an_async_function_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member: DiagnosticMessage;
        A_promise_must_have_a_then_method: DiagnosticMessage;
        The_first_parameter_of_the_then_method_of_a_promise_must_be_a_callback: DiagnosticMessage;
        Enum_member_must_have_initializer: DiagnosticMessage;
        Type_is_referenced_directly_or_indirectly_in_the_fulfillment_callback_of_its_own_then_method: DiagnosticMessage;
        An_export_assignment_cannot_be_used_in_a_namespace: DiagnosticMessage;
        The_return_type_of_an_async_function_or_method_must_be_the_global_Promise_T_type: DiagnosticMessage;
        In_ambient_enum_declarations_member_initializer_must_be_constant_expression: DiagnosticMessage;
        Unexpected_token_A_constructor_method_accessor_or_property_was_expected: DiagnosticMessage;
        Unexpected_token_A_type_parameter_name_was_expected_without_curly_braces: DiagnosticMessage;
        _0_modifier_cannot_appear_on_a_type_member: DiagnosticMessage;
        _0_modifier_cannot_appear_on_an_index_signature: DiagnosticMessage;
        A_0_modifier_cannot_be_used_with_an_import_declaration: DiagnosticMessage;
        Invalid_reference_directive_syntax: DiagnosticMessage;
        Octal_literals_are_not_available_when_targeting_ECMAScript_5_and_higher_Use_the_syntax_0: DiagnosticMessage;
        _0_modifier_cannot_appear_on_a_constructor_declaration: DiagnosticMessage;
        _0_modifier_cannot_appear_on_a_parameter: DiagnosticMessage;
        Only_a_single_variable_declaration_is_allowed_in_a_for_in_statement: DiagnosticMessage;
        Type_parameters_cannot_appear_on_a_constructor_declaration: DiagnosticMessage;
        Type_annotation_cannot_appear_on_a_constructor_declaration: DiagnosticMessage;
        An_accessor_cannot_have_type_parameters: DiagnosticMessage;
        A_set_accessor_cannot_have_a_return_type_annotation: DiagnosticMessage;
        An_index_signature_must_have_exactly_one_parameter: DiagnosticMessage;
        _0_list_cannot_be_empty: DiagnosticMessage;
        Type_parameter_list_cannot_be_empty: DiagnosticMessage;
        Type_argument_list_cannot_be_empty: DiagnosticMessage;
        Invalid_use_of_0_in_strict_mode: DiagnosticMessage;
        with_statements_are_not_allowed_in_strict_mode: DiagnosticMessage;
        delete_cannot_be_called_on_an_identifier_in_strict_mode: DiagnosticMessage;
        A_for_await_of_statement_is_only_allowed_within_an_async_function_or_async_generator: DiagnosticMessage;
        A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement: DiagnosticMessage;
        A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement: DiagnosticMessage;
        Jump_target_cannot_cross_function_boundary: DiagnosticMessage;
        A_return_statement_can_only_be_used_within_a_function_body: DiagnosticMessage;
        Expression_expected: DiagnosticMessage;
        Type_expected: DiagnosticMessage;
        A_default_clause_cannot_appear_more_than_once_in_a_switch_statement: DiagnosticMessage;
        Duplicate_label_0: DiagnosticMessage;
        A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement: DiagnosticMessage;
        A_break_statement_can_only_jump_to_a_label_of_an_enclosing_statement: DiagnosticMessage;
        An_object_literal_cannot_have_multiple_properties_with_the_same_name_in_strict_mode: DiagnosticMessage;
        An_object_literal_cannot_have_multiple_get_Slashset_accessors_with_the_same_name: DiagnosticMessage;
        An_object_literal_cannot_have_property_and_accessor_with_the_same_name: DiagnosticMessage;
        An_export_assignment_cannot_have_modifiers: DiagnosticMessage;
        Octal_literals_are_not_allowed_in_strict_mode: DiagnosticMessage;
        Variable_declaration_list_cannot_be_empty: DiagnosticMessage;
        Digit_expected: DiagnosticMessage;
        Hexadecimal_digit_expected: DiagnosticMessage;
        Unexpected_end_of_text: DiagnosticMessage;
        Invalid_character: DiagnosticMessage;
        Declaration_or_statement_expected: DiagnosticMessage;
        Statement_expected: DiagnosticMessage;
        case_or_default_expected: DiagnosticMessage;
        Property_or_signature_expected: DiagnosticMessage;
        Enum_member_expected: DiagnosticMessage;
        Variable_declaration_expected: DiagnosticMessage;
        Argument_expression_expected: DiagnosticMessage;
        Property_assignment_expected: DiagnosticMessage;
        Expression_or_comma_expected: DiagnosticMessage;
        Parameter_declaration_expected: DiagnosticMessage;
        Type_parameter_declaration_expected: DiagnosticMessage;
        Type_argument_expected: DiagnosticMessage;
        String_literal_expected: DiagnosticMessage;
        Line_break_not_permitted_here: DiagnosticMessage;
        or_expected: DiagnosticMessage;
        Declaration_expected: DiagnosticMessage;
        Import_declarations_in_a_namespace_cannot_reference_a_module: DiagnosticMessage;
        Cannot_use_imports_exports_or_module_augmentations_when_module_is_none: DiagnosticMessage;
        File_name_0_differs_from_already_included_file_name_1_only_in_casing: DiagnosticMessage;
        const_declarations_must_be_initialized: DiagnosticMessage;
        const_declarations_can_only_be_declared_inside_a_block: DiagnosticMessage;
        let_declarations_can_only_be_declared_inside_a_block: DiagnosticMessage;
        Unterminated_template_literal: DiagnosticMessage;
        Unterminated_regular_expression_literal: DiagnosticMessage;
        An_object_member_cannot_be_declared_optional: DiagnosticMessage;
        A_yield_expression_is_only_allowed_in_a_generator_body: DiagnosticMessage;
        Computed_property_names_are_not_allowed_in_enums: DiagnosticMessage;
        A_computed_property_name_in_an_ambient_context_must_refer_to_an_expression_whose_type_is_a_literal_type_or_a_unique_symbol_type: DiagnosticMessage;
        A_computed_property_name_in_a_class_property_declaration_must_refer_to_an_expression_whose_type_is_a_literal_type_or_a_unique_symbol_type: DiagnosticMessage;
        A_computed_property_name_in_a_method_overload_must_refer_to_an_expression_whose_type_is_a_literal_type_or_a_unique_symbol_type: DiagnosticMessage;
        A_computed_property_name_in_an_interface_must_refer_to_an_expression_whose_type_is_a_literal_type_or_a_unique_symbol_type: DiagnosticMessage;
        A_computed_property_name_in_a_type_literal_must_refer_to_an_expression_whose_type_is_a_literal_type_or_a_unique_symbol_type: DiagnosticMessage;
        A_comma_expression_is_not_allowed_in_a_computed_property_name: DiagnosticMessage;
        extends_clause_already_seen: DiagnosticMessage;
        extends_clause_must_precede_implements_clause: DiagnosticMessage;
        Classes_can_only_extend_a_single_class: DiagnosticMessage;
        implements_clause_already_seen: DiagnosticMessage;
        Interface_declaration_cannot_have_implements_clause: DiagnosticMessage;
        Binary_digit_expected: DiagnosticMessage;
        Octal_digit_expected: DiagnosticMessage;
        Unexpected_token_expected: DiagnosticMessage;
        Property_destructuring_pattern_expected: DiagnosticMessage;
        Array_element_destructuring_pattern_expected: DiagnosticMessage;
        A_destructuring_declaration_must_have_an_initializer: DiagnosticMessage;
        An_implementation_cannot_be_declared_in_ambient_contexts: DiagnosticMessage;
        Modifiers_cannot_appear_here: DiagnosticMessage;
        Merge_conflict_marker_encountered: DiagnosticMessage;
        A_rest_element_cannot_have_an_initializer: DiagnosticMessage;
        A_parameter_property_may_not_be_declared_using_a_binding_pattern: DiagnosticMessage;
        Only_a_single_variable_declaration_is_allowed_in_a_for_of_statement: DiagnosticMessage;
        The_variable_declaration_of_a_for_in_statement_cannot_have_an_initializer: DiagnosticMessage;
        The_variable_declaration_of_a_for_of_statement_cannot_have_an_initializer: DiagnosticMessage;
        An_import_declaration_cannot_have_modifiers: DiagnosticMessage;
        Module_0_has_no_default_export: DiagnosticMessage;
        An_export_declaration_cannot_have_modifiers: DiagnosticMessage;
        Export_declarations_are_not_permitted_in_a_namespace: DiagnosticMessage;
        Catch_clause_variable_cannot_have_a_type_annotation: DiagnosticMessage;
        Catch_clause_variable_cannot_have_an_initializer: DiagnosticMessage;
        An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive: DiagnosticMessage;
        Unterminated_Unicode_escape_sequence: DiagnosticMessage;
        Line_terminator_not_permitted_before_arrow: DiagnosticMessage;
        Import_assignment_cannot_be_used_when_targeting_ECMAScript_modules_Consider_using_import_Asterisk_as_ns_from_mod_import_a_from_mod_import_d_from_mod_or_another_module_format_instead: DiagnosticMessage;
        Export_assignment_cannot_be_used_when_targeting_ECMAScript_modules_Consider_using_export_default_or_another_module_format_instead: DiagnosticMessage;
        Re_exporting_a_type_when_the_isolatedModules_flag_is_provided_requires_using_export_type: DiagnosticMessage;
        Decorators_are_not_valid_here: DiagnosticMessage;
        Decorators_cannot_be_applied_to_multiple_get_Slashset_accessors_of_the_same_name: DiagnosticMessage;
        All_files_must_be_modules_when_the_isolatedModules_flag_is_provided: DiagnosticMessage;
        Invalid_use_of_0_Class_definitions_are_automatically_in_strict_mode: DiagnosticMessage;
        A_class_declaration_without_the_default_modifier_must_have_a_name: DiagnosticMessage;
        Identifier_expected_0_is_a_reserved_word_in_strict_mode: DiagnosticMessage;
        Identifier_expected_0_is_a_reserved_word_in_strict_mode_Class_definitions_are_automatically_in_strict_mode: DiagnosticMessage;
        Identifier_expected_0_is_a_reserved_word_in_strict_mode_Modules_are_automatically_in_strict_mode: DiagnosticMessage;
        Invalid_use_of_0_Modules_are_automatically_in_strict_mode: DiagnosticMessage;
        Identifier_expected_esModule_is_reserved_as_an_exported_marker_when_transforming_ECMAScript_modules: DiagnosticMessage;
        Export_assignment_is_not_supported_when_module_flag_is_system: DiagnosticMessage;
        Experimental_support_for_decorators_is_a_feature_that_is_subject_to_change_in_a_future_release_Set_the_experimentalDecorators_option_in_your_tsconfig_or_jsconfig_to_remove_this_warning: DiagnosticMessage;
        Generators_are_only_available_when_targeting_ECMAScript_2015_or_higher: DiagnosticMessage;
        Generators_are_not_allowed_in_an_ambient_context: DiagnosticMessage;
        An_overload_signature_cannot_be_declared_as_a_generator: DiagnosticMessage;
        _0_tag_already_specified: DiagnosticMessage;
        Signature_0_must_be_a_type_predicate: DiagnosticMessage;
        Cannot_find_parameter_0: DiagnosticMessage;
        Type_predicate_0_is_not_assignable_to_1: DiagnosticMessage;
        Parameter_0_is_not_in_the_same_position_as_parameter_1: DiagnosticMessage;
        A_type_predicate_is_only_allowed_in_return_type_position_for_functions_and_methods: DiagnosticMessage;
        A_type_predicate_cannot_reference_a_rest_parameter: DiagnosticMessage;
        A_type_predicate_cannot_reference_element_0_in_a_binding_pattern: DiagnosticMessage;
        An_export_assignment_can_only_be_used_in_a_module: DiagnosticMessage;
        An_import_declaration_can_only_be_used_in_a_namespace_or_module: DiagnosticMessage;
        An_export_declaration_can_only_be_used_in_a_module: DiagnosticMessage;
        An_ambient_module_declaration_is_only_allowed_at_the_top_level_in_a_file: DiagnosticMessage;
        A_namespace_declaration_is_only_allowed_in_a_namespace_or_module: DiagnosticMessage;
        The_return_type_of_a_property_decorator_function_must_be_either_void_or_any: DiagnosticMessage;
        The_return_type_of_a_parameter_decorator_function_must_be_either_void_or_any: DiagnosticMessage;
        Unable_to_resolve_signature_of_class_decorator_when_called_as_an_expression: DiagnosticMessage;
        Unable_to_resolve_signature_of_parameter_decorator_when_called_as_an_expression: DiagnosticMessage;
        Unable_to_resolve_signature_of_property_decorator_when_called_as_an_expression: DiagnosticMessage;
        Unable_to_resolve_signature_of_method_decorator_when_called_as_an_expression: DiagnosticMessage;
        abstract_modifier_can_only_appear_on_a_class_method_or_property_declaration: DiagnosticMessage;
        _0_modifier_cannot_be_used_with_1_modifier: DiagnosticMessage;
        Abstract_methods_can_only_appear_within_an_abstract_class: DiagnosticMessage;
        Method_0_cannot_have_an_implementation_because_it_is_marked_abstract: DiagnosticMessage;
        An_interface_property_cannot_have_an_initializer: DiagnosticMessage;
        A_type_literal_property_cannot_have_an_initializer: DiagnosticMessage;
        A_class_member_cannot_have_the_0_keyword: DiagnosticMessage;
        A_decorator_can_only_decorate_a_method_implementation_not_an_overload: DiagnosticMessage;
        Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5: DiagnosticMessage;
        Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Class_definitions_are_automatically_in_strict_mode: DiagnosticMessage;
        Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Modules_are_automatically_in_strict_mode: DiagnosticMessage;
        _0_tag_cannot_be_used_independently_as_a_top_level_JSDoc_tag: DiagnosticMessage;
        A_const_initializer_in_an_ambient_context_must_be_a_string_or_numeric_literal_or_literal_enum_reference: DiagnosticMessage;
        A_definite_assignment_assertion_is_not_permitted_in_this_context: DiagnosticMessage;
        A_rest_element_must_be_last_in_a_tuple_type: DiagnosticMessage;
        A_required_element_cannot_follow_an_optional_element: DiagnosticMessage;
        Definite_assignment_assertions_can_only_be_used_along_with_a_type_annotation: DiagnosticMessage;
        Module_0_can_only_be_default_imported_using_the_1_flag: DiagnosticMessage;
        Keywords_cannot_contain_escape_characters: DiagnosticMessage;
        Already_included_file_name_0_differs_from_file_name_1_only_in_casing: DiagnosticMessage;
        with_statements_are_not_allowed_in_an_async_function_block: DiagnosticMessage;
        await_expressions_are_only_allowed_within_async_functions_and_at_the_top_levels_of_modules: DiagnosticMessage;
        can_only_be_used_in_an_object_literal_property_inside_a_destructuring_assignment: DiagnosticMessage;
        The_body_of_an_if_statement_cannot_be_the_empty_statement: DiagnosticMessage;
        Global_module_exports_may_only_appear_in_module_files: DiagnosticMessage;
        Global_module_exports_may_only_appear_in_declaration_files: DiagnosticMessage;
        Global_module_exports_may_only_appear_at_top_level: DiagnosticMessage;
        A_parameter_property_cannot_be_declared_using_a_rest_parameter: DiagnosticMessage;
        An_abstract_accessor_cannot_have_an_implementation: DiagnosticMessage;
        A_default_export_can_only_be_used_in_an_ECMAScript_style_module: DiagnosticMessage;
        Type_of_await_operand_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member: DiagnosticMessage;
        Type_of_yield_operand_in_an_async_generator_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member: DiagnosticMessage;
        Type_of_iterated_elements_of_a_yield_Asterisk_operand_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member: DiagnosticMessage;
        Dynamic_imports_are_only_supported_when_the_module_flag_is_set_to_es2020_esnext_commonjs_amd_system_or_umd: DiagnosticMessage;
        Dynamic_import_must_have_one_specifier_as_an_argument: DiagnosticMessage;
        Specifier_of_dynamic_import_cannot_be_spread_element: DiagnosticMessage;
        Dynamic_import_cannot_have_type_arguments: DiagnosticMessage;
        String_literal_with_double_quotes_expected: DiagnosticMessage;
        Property_value_can_only_be_string_literal_numeric_literal_true_false_null_object_literal_or_array_literal: DiagnosticMessage;
        _0_accepts_too_few_arguments_to_be_used_as_a_decorator_here_Did_you_mean_to_call_it_first_and_write_0: DiagnosticMessage;
        A_property_of_an_interface_or_type_literal_whose_type_is_a_unique_symbol_type_must_be_readonly: DiagnosticMessage;
        A_property_of_a_class_whose_type_is_a_unique_symbol_type_must_be_both_static_and_readonly: DiagnosticMessage;
        A_variable_whose_type_is_a_unique_symbol_type_must_be_const: DiagnosticMessage;
        unique_symbol_types_may_not_be_used_on_a_variable_declaration_with_a_binding_name: DiagnosticMessage;
        unique_symbol_types_are_only_allowed_on_variables_in_a_variable_statement: DiagnosticMessage;
        unique_symbol_types_are_not_allowed_here: DiagnosticMessage;
        An_index_signature_parameter_type_cannot_be_a_type_alias_Consider_writing_0_Colon_1_Colon_2_instead: DiagnosticMessage;
        An_index_signature_parameter_type_cannot_be_a_union_type_Consider_using_a_mapped_object_type_instead: DiagnosticMessage;
        infer_declarations_are_only_permitted_in_the_extends_clause_of_a_conditional_type: DiagnosticMessage;
        Module_0_does_not_refer_to_a_value_but_is_used_as_a_value_here: DiagnosticMessage;
        Module_0_does_not_refer_to_a_type_but_is_used_as_a_type_here_Did_you_mean_typeof_import_0: DiagnosticMessage;
        Type_arguments_cannot_be_used_here: DiagnosticMessage;
        The_import_meta_meta_property_is_only_allowed_when_the_module_option_is_esnext_or_system: DiagnosticMessage;
        A_label_is_not_allowed_here: DiagnosticMessage;
        An_expression_of_type_void_cannot_be_tested_for_truthiness: DiagnosticMessage;
        This_parameter_is_not_allowed_with_use_strict_directive: DiagnosticMessage;
        use_strict_directive_cannot_be_used_with_non_simple_parameter_list: DiagnosticMessage;
        Non_simple_parameter_declared_here: DiagnosticMessage;
        use_strict_directive_used_here: DiagnosticMessage;
        Print_the_final_configuration_instead_of_building: DiagnosticMessage;
        An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal: DiagnosticMessage;
        A_bigint_literal_cannot_use_exponential_notation: DiagnosticMessage;
        A_bigint_literal_must_be_an_integer: DiagnosticMessage;
        readonly_type_modifier_is_only_permitted_on_array_and_tuple_literal_types: DiagnosticMessage;
        A_const_assertions_can_only_be_applied_to_references_to_enum_members_or_string_number_boolean_array_or_object_literals: DiagnosticMessage;
        Did_you_mean_to_mark_this_function_as_async: DiagnosticMessage;
        An_enum_member_name_must_be_followed_by_a_or: DiagnosticMessage;
        Tagged_template_expressions_are_not_permitted_in_an_optional_chain: DiagnosticMessage;
        Identifier_expected_0_is_a_reserved_word_that_cannot_be_used_here: DiagnosticMessage;
        Did_you_mean_to_parenthesize_this_function_type: DiagnosticMessage;
        _0_cannot_be_used_as_a_value_because_it_was_imported_using_import_type: DiagnosticMessage;
        _0_cannot_be_used_as_a_value_because_it_was_exported_using_export_type: DiagnosticMessage;
        A_type_only_import_can_specify_a_default_import_or_named_bindings_but_not_both: DiagnosticMessage;
        Convert_to_type_only_export: DiagnosticMessage;
        Convert_all_re_exported_types_to_type_only_exports: DiagnosticMessage;
        Split_into_two_separate_import_declarations: DiagnosticMessage;
        Split_all_invalid_type_only_imports: DiagnosticMessage;
        Specify_emit_Slashchecking_behavior_for_imports_that_are_only_used_for_types: DiagnosticMessage;
        Did_you_mean_0: DiagnosticMessage;
        Only_ECMAScript_imports_may_use_import_type: DiagnosticMessage;
        This_import_is_never_used_as_a_value_and_must_use_import_type_because_the_importsNotUsedAsValues_is_set_to_error: DiagnosticMessage;
        Convert_to_type_only_import: DiagnosticMessage;
        Convert_all_imports_not_used_as_a_value_to_type_only_imports: DiagnosticMessage;
        await_expressions_are_only_allowed_at_the_top_level_of_a_file_when_that_file_is_a_module_but_this_file_has_no_imports_or_exports_Consider_adding_an_empty_export_to_make_this_file_a_module: DiagnosticMessage;
        _0_was_imported_here: DiagnosticMessage;
        _0_was_exported_here: DiagnosticMessage;
        Top_level_await_expressions_are_only_allowed_when_the_module_option_is_set_to_esnext_or_system_and_the_target_option_is_set_to_es2017_or_higher: DiagnosticMessage;
        An_import_alias_cannot_reference_a_declaration_that_was_exported_using_export_type: DiagnosticMessage;
        An_import_alias_cannot_reference_a_declaration_that_was_imported_using_import_type: DiagnosticMessage;
        Unexpected_token_Did_you_mean_or_rbrace: DiagnosticMessage;
        Unexpected_token_Did_you_mean_or_gt: DiagnosticMessage;
        Only_named_exports_may_use_export_type: DiagnosticMessage;
        The_types_of_0_are_incompatible_between_these_types: DiagnosticMessage;
        The_types_returned_by_0_are_incompatible_between_these_types: DiagnosticMessage;
        Call_signature_return_types_0_and_1_are_incompatible: DiagnosticMessage;
        Construct_signature_return_types_0_and_1_are_incompatible: DiagnosticMessage;
        Call_signatures_with_no_arguments_have_incompatible_return_types_0_and_1: DiagnosticMessage;
        Construct_signatures_with_no_arguments_have_incompatible_return_types_0_and_1: DiagnosticMessage;
        Duplicate_identifier_0: DiagnosticMessage;
        Initializer_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor: DiagnosticMessage;
        Static_members_cannot_reference_class_type_parameters: DiagnosticMessage;
        Circular_definition_of_import_alias_0: DiagnosticMessage;
        Cannot_find_name_0: DiagnosticMessage;
        Module_0_has_no_exported_member_1: DiagnosticMessage;
        File_0_is_not_a_module: DiagnosticMessage;
        Cannot_find_module_0: DiagnosticMessage;
        Module_0_has_already_exported_a_member_named_1_Consider_explicitly_re_exporting_to_resolve_the_ambiguity: DiagnosticMessage;
        An_export_assignment_cannot_be_used_in_a_module_with_other_exported_elements: DiagnosticMessage;
        Type_0_recursively_references_itself_as_a_base_type: DiagnosticMessage;
        A_class_may_only_extend_another_class: DiagnosticMessage;
        An_interface_can_only_extend_an_object_type_or_intersection_of_object_types_with_statically_known_members: DiagnosticMessage;
        Type_parameter_0_has_a_circular_constraint: DiagnosticMessage;
        Generic_type_0_requires_1_type_argument_s: DiagnosticMessage;
        Type_0_is_not_generic: DiagnosticMessage;
        Global_type_0_must_be_a_class_or_interface_type: DiagnosticMessage;
        Global_type_0_must_have_1_type_parameter_s: DiagnosticMessage;
        Cannot_find_global_type_0: DiagnosticMessage;
        Named_property_0_of_types_1_and_2_are_not_identical: DiagnosticMessage;
        Interface_0_cannot_simultaneously_extend_types_1_and_2: DiagnosticMessage;
        Excessive_stack_depth_comparing_types_0_and_1: DiagnosticMessage;
        Type_0_is_not_assignable_to_type_1: DiagnosticMessage;
        Cannot_redeclare_exported_variable_0: DiagnosticMessage;
        Property_0_is_missing_in_type_1: DiagnosticMessage;
        Property_0_is_private_in_type_1_but_not_in_type_2: DiagnosticMessage;
        Types_of_property_0_are_incompatible: DiagnosticMessage;
        Property_0_is_optional_in_type_1_but_required_in_type_2: DiagnosticMessage;
        Types_of_parameters_0_and_1_are_incompatible: DiagnosticMessage;
        Index_signature_is_missing_in_type_0: DiagnosticMessage;
        Index_signatures_are_incompatible: DiagnosticMessage;
        this_cannot_be_referenced_in_a_module_or_namespace_body: DiagnosticMessage;
        this_cannot_be_referenced_in_current_location: DiagnosticMessage;
        this_cannot_be_referenced_in_constructor_arguments: DiagnosticMessage;
        this_cannot_be_referenced_in_a_static_property_initializer: DiagnosticMessage;
        super_can_only_be_referenced_in_a_derived_class: DiagnosticMessage;
        super_cannot_be_referenced_in_constructor_arguments: DiagnosticMessage;
        Super_calls_are_not_permitted_outside_constructors_or_in_nested_functions_inside_constructors: DiagnosticMessage;
        super_property_access_is_permitted_only_in_a_constructor_member_function_or_member_accessor_of_a_derived_class: DiagnosticMessage;
        Property_0_does_not_exist_on_type_1: DiagnosticMessage;
        Only_public_and_protected_methods_of_the_base_class_are_accessible_via_the_super_keyword: DiagnosticMessage;
        Property_0_is_private_and_only_accessible_within_class_1: DiagnosticMessage;
        An_index_expression_argument_must_be_of_type_string_number_symbol_or_any: DiagnosticMessage;
        This_syntax_requires_an_imported_helper_named_1_which_does_not_exist_in_0_Consider_upgrading_your_version_of_0: DiagnosticMessage;
        Type_0_does_not_satisfy_the_constraint_1: DiagnosticMessage;
        Argument_of_type_0_is_not_assignable_to_parameter_of_type_1: DiagnosticMessage;
        Call_target_does_not_contain_any_signatures: DiagnosticMessage;
        Untyped_function_calls_may_not_accept_type_arguments: DiagnosticMessage;
        Value_of_type_0_is_not_callable_Did_you_mean_to_include_new: DiagnosticMessage;
        This_expression_is_not_callable: DiagnosticMessage;
        Only_a_void_function_can_be_called_with_the_new_keyword: DiagnosticMessage;
        This_expression_is_not_constructable: DiagnosticMessage;
        Conversion_of_type_0_to_type_1_may_be_a_mistake_because_neither_type_sufficiently_overlaps_with_the_other_If_this_was_intentional_convert_the_expression_to_unknown_first: DiagnosticMessage;
        Object_literal_may_only_specify_known_properties_and_0_does_not_exist_in_type_1: DiagnosticMessage;
        This_syntax_requires_an_imported_helper_but_module_0_cannot_be_found: DiagnosticMessage;
        A_function_whose_declared_type_is_neither_void_nor_any_must_return_a_value: DiagnosticMessage;
        An_arithmetic_operand_must_be_of_type_any_number_bigint_or_an_enum_type: DiagnosticMessage;
        The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_or_a_property_access: DiagnosticMessage;
        The_left_hand_side_of_an_instanceof_expression_must_be_of_type_any_an_object_type_or_a_type_parameter: DiagnosticMessage;
        The_right_hand_side_of_an_instanceof_expression_must_be_of_type_any_or_of_a_type_assignable_to_the_Function_interface_type: DiagnosticMessage;
        The_left_hand_side_of_an_in_expression_must_be_of_type_any_string_number_or_symbol: DiagnosticMessage;
        The_right_hand_side_of_an_in_expression_must_be_of_type_any_an_object_type_or_a_type_parameter: DiagnosticMessage;
        The_left_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_bigint_or_an_enum_type: DiagnosticMessage;
        The_right_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_bigint_or_an_enum_type: DiagnosticMessage;
        The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access: DiagnosticMessage;
        Operator_0_cannot_be_applied_to_types_1_and_2: DiagnosticMessage;
        Function_lacks_ending_return_statement_and_return_type_does_not_include_undefined: DiagnosticMessage;
        This_condition_will_always_return_0_since_the_types_1_and_2_have_no_overlap: DiagnosticMessage;
        Type_parameter_name_cannot_be_0: DiagnosticMessage;
        A_parameter_property_is_only_allowed_in_a_constructor_implementation: DiagnosticMessage;
        A_rest_parameter_must_be_of_an_array_type: DiagnosticMessage;
        A_parameter_initializer_is_only_allowed_in_a_function_or_constructor_implementation: DiagnosticMessage;
        Parameter_0_cannot_be_referenced_in_its_initializer: DiagnosticMessage;
        Initializer_of_parameter_0_cannot_reference_identifier_1_declared_after_it: DiagnosticMessage;
        Duplicate_string_index_signature: DiagnosticMessage;
        Duplicate_number_index_signature: DiagnosticMessage;
        A_super_call_must_be_the_first_statement_in_the_constructor_when_a_class_contains_initialized_properties_parameter_properties_or_private_identifiers: DiagnosticMessage;
        Constructors_for_derived_classes_must_contain_a_super_call: DiagnosticMessage;
        A_get_accessor_must_return_a_value: DiagnosticMessage;
        Getter_and_setter_accessors_do_not_agree_in_visibility: DiagnosticMessage;
        get_and_set_accessor_must_have_the_same_type: DiagnosticMessage;
        A_signature_with_an_implementation_cannot_use_a_string_literal_type: DiagnosticMessage;
        Specialized_overload_signature_is_not_assignable_to_any_non_specialized_signature: DiagnosticMessage;
        Overload_signatures_must_all_be_exported_or_non_exported: DiagnosticMessage;
        Overload_signatures_must_all_be_ambient_or_non_ambient: DiagnosticMessage;
        Overload_signatures_must_all_be_public_private_or_protected: DiagnosticMessage;
        Overload_signatures_must_all_be_optional_or_required: DiagnosticMessage;
        Function_overload_must_be_static: DiagnosticMessage;
        Function_overload_must_not_be_static: DiagnosticMessage;
        Function_implementation_name_must_be_0: DiagnosticMessage;
        Constructor_implementation_is_missing: DiagnosticMessage;
        Function_implementation_is_missing_or_not_immediately_following_the_declaration: DiagnosticMessage;
        Multiple_constructor_implementations_are_not_allowed: DiagnosticMessage;
        Duplicate_function_implementation: DiagnosticMessage;
        This_overload_signature_is_not_compatible_with_its_implementation_signature: DiagnosticMessage;
        Individual_declarations_in_merged_declaration_0_must_be_all_exported_or_all_local: DiagnosticMessage;
        Duplicate_identifier_arguments_Compiler_uses_arguments_to_initialize_rest_parameters: DiagnosticMessage;
        Declaration_name_conflicts_with_built_in_global_identifier_0: DiagnosticMessage;
        Duplicate_identifier_this_Compiler_uses_variable_declaration_this_to_capture_this_reference: DiagnosticMessage;
        Expression_resolves_to_variable_declaration_this_that_compiler_uses_to_capture_this_reference: DiagnosticMessage;
        Duplicate_identifier_super_Compiler_uses_super_to_capture_base_class_reference: DiagnosticMessage;
        Expression_resolves_to_super_that_compiler_uses_to_capture_base_class_reference: DiagnosticMessage;
        Subsequent_variable_declarations_must_have_the_same_type_Variable_0_must_be_of_type_1_but_here_has_type_2: DiagnosticMessage;
        The_left_hand_side_of_a_for_in_statement_cannot_use_a_type_annotation: DiagnosticMessage;
        The_left_hand_side_of_a_for_in_statement_must_be_of_type_string_or_any: DiagnosticMessage;
        The_left_hand_side_of_a_for_in_statement_must_be_a_variable_or_a_property_access: DiagnosticMessage;
        The_right_hand_side_of_a_for_in_statement_must_be_of_type_any_an_object_type_or_a_type_parameter_but_here_has_type_0: DiagnosticMessage;
        Setters_cannot_return_a_value: DiagnosticMessage;
        Return_type_of_constructor_signature_must_be_assignable_to_the_instance_type_of_the_class: DiagnosticMessage;
        The_with_statement_is_not_supported_All_symbols_in_a_with_block_will_have_type_any: DiagnosticMessage;
        Property_0_of_type_1_is_not_assignable_to_string_index_type_2: DiagnosticMessage;
        Property_0_of_type_1_is_not_assignable_to_numeric_index_type_2: DiagnosticMessage;
        Numeric_index_type_0_is_not_assignable_to_string_index_type_1: DiagnosticMessage;
        Class_name_cannot_be_0: DiagnosticMessage;
        Class_0_incorrectly_extends_base_class_1: DiagnosticMessage;
        Property_0_in_type_1_is_not_assignable_to_the_same_property_in_base_type_2: DiagnosticMessage;
        Class_static_side_0_incorrectly_extends_base_class_static_side_1: DiagnosticMessage;
        Type_of_computed_property_s_value_is_0_which_is_not_assignable_to_type_1: DiagnosticMessage;
        Class_0_incorrectly_implements_interface_1: DiagnosticMessage;
        A_class_can_only_implement_an_object_type_or_intersection_of_object_types_with_statically_known_members: DiagnosticMessage;
        Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_accessor: DiagnosticMessage;
        Class_0_defines_instance_member_property_1_but_extended_class_2_defines_it_as_instance_member_function: DiagnosticMessage;
        Class_0_defines_instance_member_accessor_1_but_extended_class_2_defines_it_as_instance_member_function: DiagnosticMessage;
        Interface_name_cannot_be_0: DiagnosticMessage;
        All_declarations_of_0_must_have_identical_type_parameters: DiagnosticMessage;
        Interface_0_incorrectly_extends_interface_1: DiagnosticMessage;
        Enum_name_cannot_be_0: DiagnosticMessage;
        In_an_enum_with_multiple_declarations_only_one_declaration_can_omit_an_initializer_for_its_first_enum_element: DiagnosticMessage;
        A_namespace_declaration_cannot_be_in_a_different_file_from_a_class_or_function_with_which_it_is_merged: DiagnosticMessage;
        A_namespace_declaration_cannot_be_located_prior_to_a_class_or_function_with_which_it_is_merged: DiagnosticMessage;
        Ambient_modules_cannot_be_nested_in_other_modules_or_namespaces: DiagnosticMessage;
        Ambient_module_declaration_cannot_specify_relative_module_name: DiagnosticMessage;
        Module_0_is_hidden_by_a_local_declaration_with_the_same_name: DiagnosticMessage;
        Import_name_cannot_be_0: DiagnosticMessage;
        Import_or_export_declaration_in_an_ambient_module_declaration_cannot_reference_module_through_relative_module_name: DiagnosticMessage;
        Import_declaration_conflicts_with_local_declaration_of_0: DiagnosticMessage;
        Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module: DiagnosticMessage;
        Types_have_separate_declarations_of_a_private_property_0: DiagnosticMessage;
        Property_0_is_protected_but_type_1_is_not_a_class_derived_from_2: DiagnosticMessage;
        Property_0_is_protected_in_type_1_but_public_in_type_2: DiagnosticMessage;
        Property_0_is_protected_and_only_accessible_within_class_1_and_its_subclasses: DiagnosticMessage;
        Property_0_is_protected_and_only_accessible_through_an_instance_of_class_1: DiagnosticMessage;
        The_0_operator_is_not_allowed_for_boolean_types_Consider_using_1_instead: DiagnosticMessage;
        Block_scoped_variable_0_used_before_its_declaration: DiagnosticMessage;
        Class_0_used_before_its_declaration: DiagnosticMessage;
        Enum_0_used_before_its_declaration: DiagnosticMessage;
        Cannot_redeclare_block_scoped_variable_0: DiagnosticMessage;
        An_enum_member_cannot_have_a_numeric_name: DiagnosticMessage;
        The_type_argument_for_type_parameter_0_cannot_be_inferred_from_the_usage_Consider_specifying_the_type_arguments_explicitly: DiagnosticMessage;
        Variable_0_is_used_before_being_assigned: DiagnosticMessage;
        Type_argument_candidate_1_is_not_a_valid_type_argument_because_it_is_not_a_supertype_of_candidate_0: DiagnosticMessage;
        Type_alias_0_circularly_references_itself: DiagnosticMessage;
        Type_alias_name_cannot_be_0: DiagnosticMessage;
        An_AMD_module_cannot_have_multiple_name_assignments: DiagnosticMessage;
        Module_0_declares_1_locally_but_it_is_not_exported: DiagnosticMessage;
        Module_0_declares_1_locally_but_it_is_exported_as_2: DiagnosticMessage;
        Type_0_is_not_an_array_type: DiagnosticMessage;
        A_rest_element_must_be_last_in_a_destructuring_pattern: DiagnosticMessage;
        A_binding_pattern_parameter_cannot_be_optional_in_an_implementation_signature: DiagnosticMessage;
        A_computed_property_name_must_be_of_type_string_number_symbol_or_any: DiagnosticMessage;
        this_cannot_be_referenced_in_a_computed_property_name: DiagnosticMessage;
        super_cannot_be_referenced_in_a_computed_property_name: DiagnosticMessage;
        A_computed_property_name_cannot_reference_a_type_parameter_from_its_containing_type: DiagnosticMessage;
        Cannot_find_global_value_0: DiagnosticMessage;
        The_0_operator_cannot_be_applied_to_type_symbol: DiagnosticMessage;
        Symbol_reference_does_not_refer_to_the_global_Symbol_constructor_object: DiagnosticMessage;
        A_computed_property_name_of_the_form_0_must_be_of_type_symbol: DiagnosticMessage;
        Spread_operator_in_new_expressions_is_only_available_when_targeting_ECMAScript_5_and_higher: DiagnosticMessage;
        Enum_declarations_must_all_be_const_or_non_const: DiagnosticMessage;
        const_enum_member_initializers_can_only_contain_literal_values_and_other_computed_enum_values: DiagnosticMessage;
        const_enums_can_only_be_used_in_property_or_index_access_expressions_or_the_right_hand_side_of_an_import_declaration_or_export_assignment_or_type_query: DiagnosticMessage;
        A_const_enum_member_can_only_be_accessed_using_a_string_literal: DiagnosticMessage;
        const_enum_member_initializer_was_evaluated_to_a_non_finite_value: DiagnosticMessage;
        const_enum_member_initializer_was_evaluated_to_disallowed_value_NaN: DiagnosticMessage;
        Property_0_does_not_exist_on_const_enum_1: DiagnosticMessage;
        let_is_not_allowed_to_be_used_as_a_name_in_let_or_const_declarations: DiagnosticMessage;
        Cannot_initialize_outer_scoped_variable_0_in_the_same_scope_as_block_scoped_declaration_1: DiagnosticMessage;
        The_left_hand_side_of_a_for_of_statement_cannot_use_a_type_annotation: DiagnosticMessage;
        Export_declaration_conflicts_with_exported_declaration_of_0: DiagnosticMessage;
        The_left_hand_side_of_a_for_of_statement_must_be_a_variable_or_a_property_access: DiagnosticMessage;
        Type_0_must_have_a_Symbol_iterator_method_that_returns_an_iterator: DiagnosticMessage;
        An_iterator_must_have_a_next_method: DiagnosticMessage;
        The_type_returned_by_the_0_method_of_an_iterator_must_have_a_value_property: DiagnosticMessage;
        The_left_hand_side_of_a_for_in_statement_cannot_be_a_destructuring_pattern: DiagnosticMessage;
        Cannot_redeclare_identifier_0_in_catch_clause: DiagnosticMessage;
        Tuple_type_0_of_length_1_has_no_element_at_index_2: DiagnosticMessage;
        Using_a_string_in_a_for_of_statement_is_only_supported_in_ECMAScript_5_and_higher: DiagnosticMessage;
        Type_0_is_not_an_array_type_or_a_string_type: DiagnosticMessage;
        The_arguments_object_cannot_be_referenced_in_an_arrow_function_in_ES3_and_ES5_Consider_using_a_standard_function_expression: DiagnosticMessage;
        This_module_can_only_be_referenced_with_ECMAScript_imports_Slashexports_by_turning_on_the_0_flag_and_referencing_its_default_export: DiagnosticMessage;
        Module_0_uses_export_and_cannot_be_used_with_export_Asterisk: DiagnosticMessage;
        An_interface_can_only_extend_an_identifier_Slashqualified_name_with_optional_type_arguments: DiagnosticMessage;
        A_class_can_only_implement_an_identifier_Slashqualified_name_with_optional_type_arguments: DiagnosticMessage;
        A_rest_element_cannot_contain_a_binding_pattern: DiagnosticMessage;
        _0_is_referenced_directly_or_indirectly_in_its_own_type_annotation: DiagnosticMessage;
        Cannot_find_namespace_0: DiagnosticMessage;
        Type_0_must_have_a_Symbol_asyncIterator_method_that_returns_an_async_iterator: DiagnosticMessage;
        A_generator_cannot_have_a_void_type_annotation: DiagnosticMessage;
        _0_is_referenced_directly_or_indirectly_in_its_own_base_expression: DiagnosticMessage;
        Type_0_is_not_a_constructor_function_type: DiagnosticMessage;
        No_base_constructor_has_the_specified_number_of_type_arguments: DiagnosticMessage;
        Base_constructor_return_type_0_is_not_an_object_type_or_intersection_of_object_types_with_statically_known_members: DiagnosticMessage;
        Base_constructors_must_all_have_the_same_return_type: DiagnosticMessage;
        Cannot_create_an_instance_of_an_abstract_class: DiagnosticMessage;
        Overload_signatures_must_all_be_abstract_or_non_abstract: DiagnosticMessage;
        Abstract_method_0_in_class_1_cannot_be_accessed_via_super_expression: DiagnosticMessage;
        Classes_containing_abstract_methods_must_be_marked_abstract: DiagnosticMessage;
        Non_abstract_class_0_does_not_implement_inherited_abstract_member_1_from_class_2: DiagnosticMessage;
        All_declarations_of_an_abstract_method_must_be_consecutive: DiagnosticMessage;
        Cannot_assign_an_abstract_constructor_type_to_a_non_abstract_constructor_type: DiagnosticMessage;
        A_this_based_type_guard_is_not_compatible_with_a_parameter_based_type_guard: DiagnosticMessage;
        An_async_iterator_must_have_a_next_method: DiagnosticMessage;
        Duplicate_identifier_0_Compiler_uses_declaration_1_to_support_async_functions: DiagnosticMessage;
        Expression_resolves_to_variable_declaration_0_that_compiler_uses_to_support_async_functions: DiagnosticMessage;
        The_arguments_object_cannot_be_referenced_in_an_async_function_or_method_in_ES3_and_ES5_Consider_using_a_standard_function_or_method: DiagnosticMessage;
        yield_expressions_cannot_be_used_in_a_parameter_initializer: DiagnosticMessage;
        await_expressions_cannot_be_used_in_a_parameter_initializer: DiagnosticMessage;
        Initializer_provides_no_value_for_this_binding_element_and_the_binding_element_has_no_default_value: DiagnosticMessage;
        A_this_type_is_available_only_in_a_non_static_member_of_a_class_or_interface: DiagnosticMessage;
        The_inferred_type_of_0_references_an_inaccessible_1_type_A_type_annotation_is_necessary: DiagnosticMessage;
        A_module_cannot_have_multiple_default_exports: DiagnosticMessage;
        Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module_containing_async_functions: DiagnosticMessage;
        Property_0_is_incompatible_with_index_signature: DiagnosticMessage;
        Object_is_possibly_null: DiagnosticMessage;
        Object_is_possibly_undefined: DiagnosticMessage;
        Object_is_possibly_null_or_undefined: DiagnosticMessage;
        A_function_returning_never_cannot_have_a_reachable_end_point: DiagnosticMessage;
        Enum_type_0_has_members_with_initializers_that_are_not_literals: DiagnosticMessage;
        Type_0_cannot_be_used_to_index_type_1: DiagnosticMessage;
        Type_0_has_no_matching_index_signature_for_type_1: DiagnosticMessage;
        Type_0_cannot_be_used_as_an_index_type: DiagnosticMessage;
        Cannot_assign_to_0_because_it_is_not_a_variable: DiagnosticMessage;
        Cannot_assign_to_0_because_it_is_a_read_only_property: DiagnosticMessage;
        The_target_of_an_assignment_must_be_a_variable_or_a_property_access: DiagnosticMessage;
        Index_signature_in_type_0_only_permits_reading: DiagnosticMessage;
        Duplicate_identifier_newTarget_Compiler_uses_variable_declaration_newTarget_to_capture_new_target_meta_property_reference: DiagnosticMessage;
        Expression_resolves_to_variable_declaration_newTarget_that_compiler_uses_to_capture_new_target_meta_property_reference: DiagnosticMessage;
        A_mixin_class_must_have_a_constructor_with_a_single_rest_parameter_of_type_any: DiagnosticMessage;
        Property_0_has_conflicting_declarations_and_is_inaccessible_in_type_1: DiagnosticMessage;
        The_type_returned_by_the_0_method_of_an_async_iterator_must_be_a_promise_for_a_type_with_a_value_property: DiagnosticMessage;
        Type_0_is_not_an_array_type_or_does_not_have_a_Symbol_iterator_method_that_returns_an_iterator: DiagnosticMessage;
        Type_0_is_not_an_array_type_or_a_string_type_or_does_not_have_a_Symbol_iterator_method_that_returns_an_iterator: DiagnosticMessage;
        Property_0_does_not_exist_on_type_1_Did_you_mean_2: DiagnosticMessage;
        Cannot_find_name_0_Did_you_mean_1: DiagnosticMessage;
        Computed_values_are_not_permitted_in_an_enum_with_string_valued_members: DiagnosticMessage;
        Expected_0_arguments_but_got_1: DiagnosticMessage;
        Expected_at_least_0_arguments_but_got_1: DiagnosticMessage;
        Expected_0_arguments_but_got_1_or_more: DiagnosticMessage;
        Expected_at_least_0_arguments_but_got_1_or_more: DiagnosticMessage;
        Expected_0_type_arguments_but_got_1: DiagnosticMessage;
        Type_0_has_no_properties_in_common_with_type_1: DiagnosticMessage;
        Value_of_type_0_has_no_properties_in_common_with_type_1_Did_you_mean_to_call_it: DiagnosticMessage;
        Object_literal_may_only_specify_known_properties_but_0_does_not_exist_in_type_1_Did_you_mean_to_write_2: DiagnosticMessage;
        Base_class_expressions_cannot_reference_class_type_parameters: DiagnosticMessage;
        The_containing_function_or_module_body_is_too_large_for_control_flow_analysis: DiagnosticMessage;
        Property_0_has_no_initializer_and_is_not_definitely_assigned_in_the_constructor: DiagnosticMessage;
        Property_0_is_used_before_being_assigned: DiagnosticMessage;
        A_rest_element_cannot_have_a_property_name: DiagnosticMessage;
        Enum_declarations_can_only_merge_with_namespace_or_other_enum_declarations: DiagnosticMessage;
        Type_0_is_not_an_array_type_or_a_string_type_Use_compiler_option_downlevelIteration_to_allow_iterating_of_iterators: DiagnosticMessage;
        Object_is_of_type_unknown: DiagnosticMessage;
        Rest_signatures_are_incompatible: DiagnosticMessage;
        Property_0_is_incompatible_with_rest_element_type: DiagnosticMessage;
        A_rest_element_type_must_be_an_array_type: DiagnosticMessage;
        No_overload_expects_0_arguments_but_overloads_do_exist_that_expect_either_1_or_2_arguments: DiagnosticMessage;
        Property_0_is_a_static_member_of_type_1: DiagnosticMessage;
        Return_type_annotation_circularly_references_itself: DiagnosticMessage;
        Unused_ts_expect_error_directive: DiagnosticMessage;
        Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_node_Try_npm_i_types_Slashnode: DiagnosticMessage;
        Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_jQuery_Try_npm_i_types_Slashjquery: DiagnosticMessage;
        Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_a_test_runner_Try_npm_i_types_Slashjest_or_npm_i_types_Slashmocha: DiagnosticMessage;
        Cannot_find_name_0_Do_you_need_to_change_your_target_library_Try_changing_the_lib_compiler_option_to_es2015_or_later: DiagnosticMessage;
        Cannot_find_name_0_Do_you_need_to_change_your_target_library_Try_changing_the_lib_compiler_option_to_include_dom: DiagnosticMessage;
        _0_only_refers_to_a_type_but_is_being_used_as_a_value_here_Do_you_need_to_change_your_target_library_Try_changing_the_lib_compiler_option_to_es2015_or_later: DiagnosticMessage;
        Enum_type_0_circularly_references_itself: DiagnosticMessage;
        JSDoc_type_0_circularly_references_itself: DiagnosticMessage;
        Cannot_assign_to_0_because_it_is_a_constant: DiagnosticMessage;
        Type_instantiation_is_excessively_deep_and_possibly_infinite: DiagnosticMessage;
        Expression_produces_a_union_type_that_is_too_complex_to_represent: DiagnosticMessage;
        Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_node_Try_npm_i_types_Slashnode_and_then_add_node_to_the_types_field_in_your_tsconfig: DiagnosticMessage;
        Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_jQuery_Try_npm_i_types_Slashjquery_and_then_add_jquery_to_the_types_field_in_your_tsconfig: DiagnosticMessage;
        Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_a_test_runner_Try_npm_i_types_Slashjest_or_npm_i_types_Slashmocha_and_then_add_jest_or_mocha_to_the_types_field_in_your_tsconfig: DiagnosticMessage;
        This_module_is_declared_with_using_export_and_can_only_be_used_with_a_default_import_when_using_the_0_flag: DiagnosticMessage;
        JSX_element_attributes_type_0_may_not_be_a_union_type: DiagnosticMessage;
        The_return_type_of_a_JSX_element_constructor_must_return_an_object_type: DiagnosticMessage;
        JSX_element_implicitly_has_type_any_because_the_global_type_JSX_Element_does_not_exist: DiagnosticMessage;
        Property_0_in_type_1_is_not_assignable_to_type_2: DiagnosticMessage;
        JSX_element_type_0_does_not_have_any_construct_or_call_signatures: DiagnosticMessage;
        JSX_element_type_0_is_not_a_constructor_function_for_JSX_elements: DiagnosticMessage;
        Property_0_of_JSX_spread_attribute_is_not_assignable_to_target_property: DiagnosticMessage;
        JSX_element_class_does_not_support_attributes_because_it_does_not_have_a_0_property: DiagnosticMessage;
        The_global_type_JSX_0_may_not_have_more_than_one_property: DiagnosticMessage;
        JSX_spread_child_must_be_an_array_type: DiagnosticMessage;
        _0_is_defined_as_an_accessor_in_class_1_but_is_overridden_here_in_2_as_an_instance_property: DiagnosticMessage;
        _0_is_defined_as_a_property_in_class_1_but_is_overridden_here_in_2_as_an_accessor: DiagnosticMessage;
        Property_0_will_overwrite_the_base_property_in_1_If_this_is_intentional_add_an_initializer_Otherwise_add_a_declare_modifier_or_remove_the_redundant_declaration: DiagnosticMessage;
        Module_0_has_no_default_export_Did_you_mean_to_use_import_1_from_0_instead: DiagnosticMessage;
        Module_0_has_no_exported_member_1_Did_you_mean_to_use_import_1_from_0_instead: DiagnosticMessage;
        Type_of_property_0_circularly_references_itself_in_mapped_type_1: DiagnosticMessage;
        Cannot_augment_module_0_with_value_exports_because_it_resolves_to_a_non_module_entity: DiagnosticMessage;
        A_member_initializer_in_a_enum_declaration_cannot_reference_members_declared_after_it_including_members_defined_in_other_enums: DiagnosticMessage;
        Merged_declaration_0_cannot_include_a_default_export_declaration_Consider_adding_a_separate_export_default_0_declaration_instead: DiagnosticMessage;
        Non_abstract_class_expression_does_not_implement_inherited_abstract_member_0_from_class_1: DiagnosticMessage;
        Exported_external_package_typings_file_cannot_contain_tripleslash_references_Please_contact_the_package_author_to_update_the_package_definition: DiagnosticMessage;
        Exported_external_package_typings_file_0_is_not_a_module_Please_contact_the_package_author_to_update_the_package_definition: DiagnosticMessage;
        JSX_expressions_must_have_one_parent_element: DiagnosticMessage;
        Type_0_provides_no_match_for_the_signature_1: DiagnosticMessage;
        super_is_only_allowed_in_members_of_object_literal_expressions_when_option_target_is_ES2015_or_higher: DiagnosticMessage;
        super_can_only_be_referenced_in_members_of_derived_classes_or_object_literal_expressions: DiagnosticMessage;
        Cannot_export_0_Only_local_declarations_can_be_exported_from_a_module: DiagnosticMessage;
        Cannot_find_name_0_Did_you_mean_the_static_member_1_0: DiagnosticMessage;
        Cannot_find_name_0_Did_you_mean_the_instance_member_this_0: DiagnosticMessage;
        Invalid_module_name_in_augmentation_module_0_cannot_be_found: DiagnosticMessage;
        Invalid_module_name_in_augmentation_Module_0_resolves_to_an_untyped_module_at_1_which_cannot_be_augmented: DiagnosticMessage;
        Exports_and_export_assignments_are_not_permitted_in_module_augmentations: DiagnosticMessage;
        Imports_are_not_permitted_in_module_augmentations_Consider_moving_them_to_the_enclosing_external_module: DiagnosticMessage;
        export_modifier_cannot_be_applied_to_ambient_modules_and_module_augmentations_since_they_are_always_visible: DiagnosticMessage;
        Augmentations_for_the_global_scope_can_only_be_directly_nested_in_external_modules_or_ambient_module_declarations: DiagnosticMessage;
        Augmentations_for_the_global_scope_should_have_declare_modifier_unless_they_appear_in_already_ambient_context: DiagnosticMessage;
        Cannot_augment_module_0_because_it_resolves_to_a_non_module_entity: DiagnosticMessage;
        Cannot_assign_a_0_constructor_type_to_a_1_constructor_type: DiagnosticMessage;
        Constructor_of_class_0_is_private_and_only_accessible_within_the_class_declaration: DiagnosticMessage;
        Constructor_of_class_0_is_protected_and_only_accessible_within_the_class_declaration: DiagnosticMessage;
        Cannot_extend_a_class_0_Class_constructor_is_marked_as_private: DiagnosticMessage;
        Accessors_must_both_be_abstract_or_non_abstract: DiagnosticMessage;
        A_type_predicate_s_type_must_be_assignable_to_its_parameter_s_type: DiagnosticMessage;
        Type_0_is_not_comparable_to_type_1: DiagnosticMessage;
        A_function_that_is_called_with_the_new_keyword_cannot_have_a_this_type_that_is_void: DiagnosticMessage;
        A_0_parameter_must_be_the_first_parameter: DiagnosticMessage;
        A_constructor_cannot_have_a_this_parameter: DiagnosticMessage;
        get_and_set_accessor_must_have_the_same_this_type: DiagnosticMessage;
        this_implicitly_has_type_any_because_it_does_not_have_a_type_annotation: DiagnosticMessage;
        The_this_context_of_type_0_is_not_assignable_to_method_s_this_of_type_1: DiagnosticMessage;
        The_this_types_of_each_signature_are_incompatible: DiagnosticMessage;
        _0_refers_to_a_UMD_global_but_the_current_file_is_a_module_Consider_adding_an_import_instead: DiagnosticMessage;
        All_declarations_of_0_must_have_identical_modifiers: DiagnosticMessage;
        Cannot_find_type_definition_file_for_0: DiagnosticMessage;
        Cannot_extend_an_interface_0_Did_you_mean_implements: DiagnosticMessage;
        An_import_path_cannot_end_with_a_0_extension_Consider_importing_1_instead: DiagnosticMessage;
        _0_is_a_primitive_but_1_is_a_wrapper_object_Prefer_using_0_when_possible: DiagnosticMessage;
        _0_only_refers_to_a_type_but_is_being_used_as_a_value_here: DiagnosticMessage;
        Namespace_0_has_no_exported_member_1: DiagnosticMessage;
        Left_side_of_comma_operator_is_unused_and_has_no_side_effects: DiagnosticMessage;
        The_Object_type_is_assignable_to_very_few_other_types_Did_you_mean_to_use_the_any_type_instead: DiagnosticMessage;
        An_async_function_or_method_must_return_a_Promise_Make_sure_you_have_a_declaration_for_Promise_or_include_ES2015_in_your_lib_option: DiagnosticMessage;
        Spread_types_may_only_be_created_from_object_types: DiagnosticMessage;
        Static_property_0_conflicts_with_built_in_property_Function_0_of_constructor_function_1: DiagnosticMessage;
        Rest_types_may_only_be_created_from_object_types: DiagnosticMessage;
        The_target_of_an_object_rest_assignment_must_be_a_variable_or_a_property_access: DiagnosticMessage;
        _0_only_refers_to_a_type_but_is_being_used_as_a_namespace_here: DiagnosticMessage;
        The_operand_of_a_delete_operator_must_be_a_property_reference: DiagnosticMessage;
        The_operand_of_a_delete_operator_cannot_be_a_read_only_property: DiagnosticMessage;
        An_async_function_or_method_in_ES5_SlashES3_requires_the_Promise_constructor_Make_sure_you_have_a_declaration_for_the_Promise_constructor_or_include_ES2015_in_your_lib_option: DiagnosticMessage;
        Required_type_parameters_may_not_follow_optional_type_parameters: DiagnosticMessage;
        Generic_type_0_requires_between_1_and_2_type_arguments: DiagnosticMessage;
        Cannot_use_namespace_0_as_a_value: DiagnosticMessage;
        Cannot_use_namespace_0_as_a_type: DiagnosticMessage;
        _0_are_specified_twice_The_attribute_named_0_will_be_overwritten: DiagnosticMessage;
        A_dynamic_import_call_returns_a_Promise_Make_sure_you_have_a_declaration_for_Promise_or_include_ES2015_in_your_lib_option: DiagnosticMessage;
        A_dynamic_import_call_in_ES5_SlashES3_requires_the_Promise_constructor_Make_sure_you_have_a_declaration_for_the_Promise_constructor_or_include_ES2015_in_your_lib_option: DiagnosticMessage;
        Cannot_access_0_1_because_0_is_a_type_but_not_a_namespace_Did_you_mean_to_retrieve_the_type_of_the_property_1_in_0_with_0_1: DiagnosticMessage;
        The_expression_of_an_export_assignment_must_be_an_identifier_or_qualified_name_in_an_ambient_context: DiagnosticMessage;
        Abstract_property_0_in_class_1_cannot_be_accessed_in_the_constructor: DiagnosticMessage;
        Type_parameter_0_has_a_circular_default: DiagnosticMessage;
        Subsequent_property_declarations_must_have_the_same_type_Property_0_must_be_of_type_1_but_here_has_type_2: DiagnosticMessage;
        Duplicate_property_0: DiagnosticMessage;
        Type_0_is_not_assignable_to_type_1_Two_different_types_with_this_name_exist_but_they_are_unrelated: DiagnosticMessage;
        Class_0_incorrectly_implements_class_1_Did_you_mean_to_extend_1_and_inherit_its_members_as_a_subclass: DiagnosticMessage;
        Cannot_invoke_an_object_which_is_possibly_null: DiagnosticMessage;
        Cannot_invoke_an_object_which_is_possibly_undefined: DiagnosticMessage;
        Cannot_invoke_an_object_which_is_possibly_null_or_undefined: DiagnosticMessage;
        Module_0_has_no_exported_member_1_Did_you_mean_2: DiagnosticMessage;
        Class_name_cannot_be_Object_when_targeting_ES5_with_module_0: DiagnosticMessage;
        Cannot_find_lib_definition_for_0: DiagnosticMessage;
        Cannot_find_lib_definition_for_0_Did_you_mean_1: DiagnosticMessage;
        _0_is_declared_here: DiagnosticMessage;
        Property_0_is_used_before_its_initialization: DiagnosticMessage;
        An_arrow_function_cannot_have_a_this_parameter: DiagnosticMessage;
        Implicit_conversion_of_a_symbol_to_a_string_will_fail_at_runtime_Consider_wrapping_this_expression_in_String: DiagnosticMessage;
        Cannot_find_module_0_Consider_using_resolveJsonModule_to_import_module_with_json_extension: DiagnosticMessage;
        Property_0_was_also_declared_here: DiagnosticMessage;
        Are_you_missing_a_semicolon: DiagnosticMessage;
        Did_you_mean_for_0_to_be_constrained_to_type_new_args_Colon_any_1: DiagnosticMessage;
        Operator_0_cannot_be_applied_to_type_1: DiagnosticMessage;
        BigInt_literals_are_not_available_when_targeting_lower_than_ES2020: DiagnosticMessage;
        An_outer_value_of_this_is_shadowed_by_this_container: DiagnosticMessage;
        Type_0_is_missing_the_following_properties_from_type_1_Colon_2: DiagnosticMessage;
        Type_0_is_missing_the_following_properties_from_type_1_Colon_2_and_3_more: DiagnosticMessage;
        Property_0_is_missing_in_type_1_but_required_in_type_2: DiagnosticMessage;
        The_inferred_type_of_0_cannot_be_named_without_a_reference_to_1_This_is_likely_not_portable_A_type_annotation_is_necessary: DiagnosticMessage;
        No_overload_expects_0_type_arguments_but_overloads_do_exist_that_expect_either_1_or_2_type_arguments: DiagnosticMessage;
        Type_parameter_defaults_can_only_reference_previously_declared_type_parameters: DiagnosticMessage;
        This_JSX_tag_s_0_prop_expects_type_1_which_requires_multiple_children_but_only_a_single_child_was_provided: DiagnosticMessage;
        This_JSX_tag_s_0_prop_expects_a_single_child_of_type_1_but_multiple_children_were_provided: DiagnosticMessage;
        _0_components_don_t_accept_text_as_child_elements_Text_in_JSX_has_the_type_string_but_the_expected_type_of_1_is_2: DiagnosticMessage;
        Cannot_access_ambient_const_enums_when_the_isolatedModules_flag_is_provided: DiagnosticMessage;
        _0_refers_to_a_value_but_is_being_used_as_a_type_here: DiagnosticMessage;
        The_implementation_signature_is_declared_here: DiagnosticMessage;
        Circularity_originates_in_type_at_this_location: DiagnosticMessage;
        The_first_export_default_is_here: DiagnosticMessage;
        Another_export_default_is_here: DiagnosticMessage;
        super_may_not_use_type_arguments: DiagnosticMessage;
        No_constituent_of_type_0_is_callable: DiagnosticMessage;
        Not_all_constituents_of_type_0_are_callable: DiagnosticMessage;
        Type_0_has_no_call_signatures: DiagnosticMessage;
        Each_member_of_the_union_type_0_has_signatures_but_none_of_those_signatures_are_compatible_with_each_other: DiagnosticMessage;
        No_constituent_of_type_0_is_constructable: DiagnosticMessage;
        Not_all_constituents_of_type_0_are_constructable: DiagnosticMessage;
        Type_0_has_no_construct_signatures: DiagnosticMessage;
        Each_member_of_the_union_type_0_has_construct_signatures_but_none_of_those_signatures_are_compatible_with_each_other: DiagnosticMessage;
        Cannot_iterate_value_because_the_next_method_of_its_iterator_expects_type_1_but_for_of_will_always_send_0: DiagnosticMessage;
        Cannot_iterate_value_because_the_next_method_of_its_iterator_expects_type_1_but_array_spread_will_always_send_0: DiagnosticMessage;
        Cannot_iterate_value_because_the_next_method_of_its_iterator_expects_type_1_but_array_destructuring_will_always_send_0: DiagnosticMessage;
        Cannot_delegate_iteration_to_value_because_the_next_method_of_its_iterator_expects_type_1_but_the_containing_generator_will_always_send_0: DiagnosticMessage;
        The_0_property_of_an_iterator_must_be_a_method: DiagnosticMessage;
        The_0_property_of_an_async_iterator_must_be_a_method: DiagnosticMessage;
        No_overload_matches_this_call: DiagnosticMessage;
        The_last_overload_gave_the_following_error: DiagnosticMessage;
        The_last_overload_is_declared_here: DiagnosticMessage;
        Overload_0_of_1_2_gave_the_following_error: DiagnosticMessage;
        Did_you_forget_to_use_await: DiagnosticMessage;
        This_condition_will_always_return_true_since_the_function_is_always_defined_Did_you_mean_to_call_it_instead: DiagnosticMessage;
        Assertions_require_every_name_in_the_call_target_to_be_declared_with_an_explicit_type_annotation: DiagnosticMessage;
        Assertions_require_the_call_target_to_be_an_identifier_or_qualified_name: DiagnosticMessage;
        The_operand_of_an_increment_or_decrement_operator_may_not_be_an_optional_property_access: DiagnosticMessage;
        The_target_of_an_object_rest_assignment_may_not_be_an_optional_property_access: DiagnosticMessage;
        The_left_hand_side_of_an_assignment_expression_may_not_be_an_optional_property_access: DiagnosticMessage;
        The_left_hand_side_of_a_for_in_statement_may_not_be_an_optional_property_access: DiagnosticMessage;
        The_left_hand_side_of_a_for_of_statement_may_not_be_an_optional_property_access: DiagnosticMessage;
        _0_needs_an_explicit_type_annotation: DiagnosticMessage;
        _0_is_specified_more_than_once_so_this_usage_will_be_overwritten: DiagnosticMessage;
        get_and_set_accessors_cannot_declare_this_parameters: DiagnosticMessage;
        Import_declaration_0_is_using_private_name_1: DiagnosticMessage;
        Type_parameter_0_of_exported_class_has_or_is_using_private_name_1: DiagnosticMessage;
        Type_parameter_0_of_exported_interface_has_or_is_using_private_name_1: DiagnosticMessage;
        Type_parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1: DiagnosticMessage;
        Type_parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1: DiagnosticMessage;
        Type_parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1: DiagnosticMessage;
        Type_parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1: DiagnosticMessage;
        Type_parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1: DiagnosticMessage;
        Type_parameter_0_of_exported_function_has_or_is_using_private_name_1: DiagnosticMessage;
        Implements_clause_of_exported_class_0_has_or_is_using_private_name_1: DiagnosticMessage;
        extends_clause_of_exported_class_0_has_or_is_using_private_name_1: DiagnosticMessage;
        extends_clause_of_exported_interface_0_has_or_is_using_private_name_1: DiagnosticMessage;
        Exported_variable_0_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: DiagnosticMessage;
        Exported_variable_0_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Exported_variable_0_has_or_is_using_private_name_1: DiagnosticMessage;
        Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: DiagnosticMessage;
        Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Public_static_property_0_of_exported_class_has_or_is_using_private_name_1: DiagnosticMessage;
        Public_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: DiagnosticMessage;
        Public_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Public_property_0_of_exported_class_has_or_is_using_private_name_1: DiagnosticMessage;
        Property_0_of_exported_interface_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Property_0_of_exported_interface_has_or_is_using_private_name_1: DiagnosticMessage;
        Parameter_type_of_public_static_setter_0_from_exported_class_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Parameter_type_of_public_static_setter_0_from_exported_class_has_or_is_using_private_name_1: DiagnosticMessage;
        Parameter_type_of_public_setter_0_from_exported_class_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Parameter_type_of_public_setter_0_from_exported_class_has_or_is_using_private_name_1: DiagnosticMessage;
        Return_type_of_public_static_getter_0_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: DiagnosticMessage;
        Return_type_of_public_static_getter_0_from_exported_class_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Return_type_of_public_static_getter_0_from_exported_class_has_or_is_using_private_name_1: DiagnosticMessage;
        Return_type_of_public_getter_0_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: DiagnosticMessage;
        Return_type_of_public_getter_0_from_exported_class_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Return_type_of_public_getter_0_from_exported_class_has_or_is_using_private_name_1: DiagnosticMessage;
        Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1: DiagnosticMessage;
        Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_0: DiagnosticMessage;
        Return_type_of_call_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1: DiagnosticMessage;
        Return_type_of_call_signature_from_exported_interface_has_or_is_using_private_name_0: DiagnosticMessage;
        Return_type_of_index_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1: DiagnosticMessage;
        Return_type_of_index_signature_from_exported_interface_has_or_is_using_private_name_0: DiagnosticMessage;
        Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: DiagnosticMessage;
        Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_private_module_1: DiagnosticMessage;
        Return_type_of_public_static_method_from_exported_class_has_or_is_using_private_name_0: DiagnosticMessage;
        Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: DiagnosticMessage;
        Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_private_module_1: DiagnosticMessage;
        Return_type_of_public_method_from_exported_class_has_or_is_using_private_name_0: DiagnosticMessage;
        Return_type_of_method_from_exported_interface_has_or_is_using_name_0_from_private_module_1: DiagnosticMessage;
        Return_type_of_method_from_exported_interface_has_or_is_using_private_name_0: DiagnosticMessage;
        Return_type_of_exported_function_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: DiagnosticMessage;
        Return_type_of_exported_function_has_or_is_using_name_0_from_private_module_1: DiagnosticMessage;
        Return_type_of_exported_function_has_or_is_using_private_name_0: DiagnosticMessage;
        Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: DiagnosticMessage;
        Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Parameter_0_of_constructor_from_exported_class_has_or_is_using_private_name_1: DiagnosticMessage;
        Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1: DiagnosticMessage;
        Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1: DiagnosticMessage;
        Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: DiagnosticMessage;
        Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1: DiagnosticMessage;
        Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: DiagnosticMessage;
        Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1: DiagnosticMessage;
        Parameter_0_of_method_from_exported_interface_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1: DiagnosticMessage;
        Parameter_0_of_exported_function_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: DiagnosticMessage;
        Parameter_0_of_exported_function_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Parameter_0_of_exported_function_has_or_is_using_private_name_1: DiagnosticMessage;
        Exported_type_alias_0_has_or_is_using_private_name_1: DiagnosticMessage;
        Default_export_of_the_module_has_or_is_using_private_name_0: DiagnosticMessage;
        Type_parameter_0_of_exported_type_alias_has_or_is_using_private_name_1: DiagnosticMessage;
        Conflicting_definitions_for_0_found_at_1_and_2_Consider_installing_a_specific_version_of_this_library_to_resolve_the_conflict: DiagnosticMessage;
        Parameter_0_of_index_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Parameter_0_of_index_signature_from_exported_interface_has_or_is_using_private_name_1: DiagnosticMessage;
        Property_0_of_exported_class_expression_may_not_be_private_or_protected: DiagnosticMessage;
        Public_static_method_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: DiagnosticMessage;
        Public_static_method_0_of_exported_class_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Public_static_method_0_of_exported_class_has_or_is_using_private_name_1: DiagnosticMessage;
        Public_method_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: DiagnosticMessage;
        Public_method_0_of_exported_class_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Public_method_0_of_exported_class_has_or_is_using_private_name_1: DiagnosticMessage;
        Method_0_of_exported_interface_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Method_0_of_exported_interface_has_or_is_using_private_name_1: DiagnosticMessage;
        Type_parameter_0_of_exported_mapped_object_type_is_using_private_name_1: DiagnosticMessage;
        The_type_0_is_readonly_and_cannot_be_assigned_to_the_mutable_type_1: DiagnosticMessage;
        Private_or_protected_member_0_cannot_be_accessed_on_a_type_parameter: DiagnosticMessage;
        Parameter_0_of_accessor_has_or_is_using_private_name_1: DiagnosticMessage;
        Parameter_0_of_accessor_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Parameter_0_of_accessor_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: DiagnosticMessage;
        Type_arguments_for_0_circularly_reference_themselves: DiagnosticMessage;
        Tuple_type_arguments_circularly_reference_themselves: DiagnosticMessage;
        The_current_host_does_not_support_the_0_option: DiagnosticMessage;
        Cannot_find_the_common_subdirectory_path_for_the_input_files: DiagnosticMessage;
        File_specification_cannot_end_in_a_recursive_directory_wildcard_Asterisk_Asterisk_Colon_0: DiagnosticMessage;
        Cannot_read_file_0_Colon_1: DiagnosticMessage;
        Failed_to_parse_file_0_Colon_1: DiagnosticMessage;
        Unknown_compiler_option_0: DiagnosticMessage;
        Compiler_option_0_requires_a_value_of_type_1: DiagnosticMessage;
        Unknown_compiler_option_0_Did_you_mean_1: DiagnosticMessage;
        Could_not_write_file_0_Colon_1: DiagnosticMessage;
        Option_project_cannot_be_mixed_with_source_files_on_a_command_line: DiagnosticMessage;
        Option_isolatedModules_can_only_be_used_when_either_option_module_is_provided_or_option_target_is_ES2015_or_higher: DiagnosticMessage;
        Option_0_cannot_be_specified_when_option_target_is_ES3: DiagnosticMessage;
        Option_0_can_only_be_used_when_either_option_inlineSourceMap_or_option_sourceMap_is_provided: DiagnosticMessage;
        Option_0_cannot_be_specified_without_specifying_option_1: DiagnosticMessage;
        Option_0_cannot_be_specified_with_option_1: DiagnosticMessage;
        A_tsconfig_json_file_is_already_defined_at_Colon_0: DiagnosticMessage;
        Cannot_write_file_0_because_it_would_overwrite_input_file: DiagnosticMessage;
        Cannot_write_file_0_because_it_would_be_overwritten_by_multiple_input_files: DiagnosticMessage;
        Cannot_find_a_tsconfig_json_file_at_the_specified_directory_Colon_0: DiagnosticMessage;
        The_specified_path_does_not_exist_Colon_0: DiagnosticMessage;
        Invalid_value_for_reactNamespace_0_is_not_a_valid_identifier: DiagnosticMessage;
        Option_paths_cannot_be_used_without_specifying_baseUrl_option: DiagnosticMessage;
        Pattern_0_can_have_at_most_one_Asterisk_character: DiagnosticMessage;
        Substitution_0_in_pattern_1_can_have_at_most_one_Asterisk_character: DiagnosticMessage;
        Substitutions_for_pattern_0_should_be_an_array: DiagnosticMessage;
        Substitution_0_for_pattern_1_has_incorrect_type_expected_string_got_2: DiagnosticMessage;
        File_specification_cannot_contain_a_parent_directory_that_appears_after_a_recursive_directory_wildcard_Asterisk_Asterisk_Colon_0: DiagnosticMessage;
        Substitutions_for_pattern_0_shouldn_t_be_an_empty_array: DiagnosticMessage;
        Invalid_value_for_jsxFactory_0_is_not_a_valid_identifier_or_qualified_name: DiagnosticMessage;
        Adding_a_tsconfig_json_file_will_help_organize_projects_that_contain_both_TypeScript_and_JavaScript_files_Learn_more_at_https_Colon_Slash_Slashaka_ms_Slashtsconfig: DiagnosticMessage;
        Option_0_cannot_be_specified_without_specifying_option_1_or_option_2: DiagnosticMessage;
        Option_resolveJsonModule_cannot_be_specified_without_node_module_resolution_strategy: DiagnosticMessage;
        Option_resolveJsonModule_can_only_be_specified_when_module_code_generation_is_commonjs_amd_es2015_or_esNext: DiagnosticMessage;
        Unknown_build_option_0: DiagnosticMessage;
        Build_option_0_requires_a_value_of_type_1: DiagnosticMessage;
        Option_incremental_can_only_be_specified_using_tsconfig_emitting_to_single_file_or_when_option_tsBuildInfoFile_is_specified: DiagnosticMessage;
        _0_is_assignable_to_the_constraint_of_type_1_but_1_could_be_instantiated_with_a_different_subtype_of_constraint_2: DiagnosticMessage;
        _0_and_1_operations_cannot_be_mixed_without_parentheses: DiagnosticMessage;
        Unknown_build_option_0_Did_you_mean_1: DiagnosticMessage;
        Unknown_watch_option_0: DiagnosticMessage;
        Unknown_watch_option_0_Did_you_mean_1: DiagnosticMessage;
        Watch_option_0_requires_a_value_of_type_1: DiagnosticMessage;
        Cannot_find_a_tsconfig_json_file_at_the_current_directory_Colon_0: DiagnosticMessage;
        Generates_a_sourcemap_for_each_corresponding_d_ts_file: DiagnosticMessage;
        Concatenate_and_emit_output_to_single_file: DiagnosticMessage;
        Generates_corresponding_d_ts_file: DiagnosticMessage;
        Specify_the_location_where_debugger_should_locate_map_files_instead_of_generated_locations: DiagnosticMessage;
        Specify_the_location_where_debugger_should_locate_TypeScript_files_instead_of_source_locations: DiagnosticMessage;
        Watch_input_files: DiagnosticMessage;
        Redirect_output_structure_to_the_directory: DiagnosticMessage;
        Do_not_erase_const_enum_declarations_in_generated_code: DiagnosticMessage;
        Do_not_emit_outputs_if_any_errors_were_reported: DiagnosticMessage;
        Do_not_emit_comments_to_output: DiagnosticMessage;
        Do_not_emit_outputs: DiagnosticMessage;
        Allow_default_imports_from_modules_with_no_default_export_This_does_not_affect_code_emit_just_typechecking: DiagnosticMessage;
        Skip_type_checking_of_declaration_files: DiagnosticMessage;
        Do_not_resolve_the_real_path_of_symlinks: DiagnosticMessage;
        Only_emit_d_ts_declaration_files: DiagnosticMessage;
        Specify_ECMAScript_target_version_Colon_ES3_default_ES5_ES2015_ES2016_ES2017_ES2018_ES2019_ES2020_or_ESNEXT: DiagnosticMessage;
        Specify_module_code_generation_Colon_none_commonjs_amd_system_umd_es2015_es2020_or_ESNext: DiagnosticMessage;
        Print_this_message: DiagnosticMessage;
        Print_the_compiler_s_version: DiagnosticMessage;
        Compile_the_project_given_the_path_to_its_configuration_file_or_to_a_folder_with_a_tsconfig_json: DiagnosticMessage;
        Syntax_Colon_0: DiagnosticMessage;
        options: DiagnosticMessage;
        file: DiagnosticMessage;
        Examples_Colon_0: DiagnosticMessage;
        Options_Colon: DiagnosticMessage;
        Version_0: DiagnosticMessage;
        Insert_command_line_options_and_files_from_a_file: DiagnosticMessage;
        Starting_compilation_in_watch_mode: DiagnosticMessage;
        File_change_detected_Starting_incremental_compilation: DiagnosticMessage;
        KIND: DiagnosticMessage;
        FILE: DiagnosticMessage;
        VERSION: DiagnosticMessage;
        LOCATION: DiagnosticMessage;
        DIRECTORY: DiagnosticMessage;
        STRATEGY: DiagnosticMessage;
        FILE_OR_DIRECTORY: DiagnosticMessage;
        Generates_corresponding_map_file: DiagnosticMessage;
        Compiler_option_0_expects_an_argument: DiagnosticMessage;
        Unterminated_quoted_string_in_response_file_0: DiagnosticMessage;
        Argument_for_0_option_must_be_Colon_1: DiagnosticMessage;
        Locale_must_be_of_the_form_language_or_language_territory_For_example_0_or_1: DiagnosticMessage;
        Unsupported_locale_0: DiagnosticMessage;
        Unable_to_open_file_0: DiagnosticMessage;
        Corrupted_locale_file_0: DiagnosticMessage;
        Raise_error_on_expressions_and_declarations_with_an_implied_any_type: DiagnosticMessage;
        File_0_not_found: DiagnosticMessage;
        File_0_has_an_unsupported_extension_The_only_supported_extensions_are_1: DiagnosticMessage;
        Suppress_noImplicitAny_errors_for_indexing_objects_lacking_index_signatures: DiagnosticMessage;
        Do_not_emit_declarations_for_code_that_has_an_internal_annotation: DiagnosticMessage;
        Specify_the_root_directory_of_input_files_Use_to_control_the_output_directory_structure_with_outDir: DiagnosticMessage;
        File_0_is_not_under_rootDir_1_rootDir_is_expected_to_contain_all_source_files: DiagnosticMessage;
        Specify_the_end_of_line_sequence_to_be_used_when_emitting_files_Colon_CRLF_dos_or_LF_unix: DiagnosticMessage;
        NEWLINE: DiagnosticMessage;
        Option_0_can_only_be_specified_in_tsconfig_json_file_or_set_to_null_on_command_line: DiagnosticMessage;
        Enables_experimental_support_for_ES7_decorators: DiagnosticMessage;
        Enables_experimental_support_for_emitting_type_metadata_for_decorators: DiagnosticMessage;
        Enables_experimental_support_for_ES7_async_functions: DiagnosticMessage;
        Specify_module_resolution_strategy_Colon_node_Node_js_or_classic_TypeScript_pre_1_6: DiagnosticMessage;
        Initializes_a_TypeScript_project_and_creates_a_tsconfig_json_file: DiagnosticMessage;
        Successfully_created_a_tsconfig_json_file: DiagnosticMessage;
        Suppress_excess_property_checks_for_object_literals: DiagnosticMessage;
        Stylize_errors_and_messages_using_color_and_context_experimental: DiagnosticMessage;
        Do_not_report_errors_on_unused_labels: DiagnosticMessage;
        Report_error_when_not_all_code_paths_in_function_return_a_value: DiagnosticMessage;
        Report_errors_for_fallthrough_cases_in_switch_statement: DiagnosticMessage;
        Do_not_report_errors_on_unreachable_code: DiagnosticMessage;
        Disallow_inconsistently_cased_references_to_the_same_file: DiagnosticMessage;
        Specify_library_files_to_be_included_in_the_compilation: DiagnosticMessage;
        Specify_JSX_code_generation_Colon_preserve_react_native_or_react: DiagnosticMessage;
        File_0_has_an_unsupported_extension_so_skipping_it: DiagnosticMessage;
        Only_amd_and_system_modules_are_supported_alongside_0: DiagnosticMessage;
        Base_directory_to_resolve_non_absolute_module_names: DiagnosticMessage;
        Deprecated_Use_jsxFactory_instead_Specify_the_object_invoked_for_createElement_when_targeting_react_JSX_emit: DiagnosticMessage;
        Enable_tracing_of_the_name_resolution_process: DiagnosticMessage;
        Resolving_module_0_from_1: DiagnosticMessage;
        Explicitly_specified_module_resolution_kind_Colon_0: DiagnosticMessage;
        Module_resolution_kind_is_not_specified_using_0: DiagnosticMessage;
        Module_name_0_was_successfully_resolved_to_1: DiagnosticMessage;
        Module_name_0_was_not_resolved: DiagnosticMessage;
        paths_option_is_specified_looking_for_a_pattern_to_match_module_name_0: DiagnosticMessage;
        Module_name_0_matched_pattern_1: DiagnosticMessage;
        Trying_substitution_0_candidate_module_location_Colon_1: DiagnosticMessage;
        Resolving_module_name_0_relative_to_base_url_1_2: DiagnosticMessage;
        Loading_module_as_file_Slash_folder_candidate_module_location_0_target_file_type_1: DiagnosticMessage;
        File_0_does_not_exist: DiagnosticMessage;
        File_0_exist_use_it_as_a_name_resolution_result: DiagnosticMessage;
        Loading_module_0_from_node_modules_folder_target_file_type_1: DiagnosticMessage;
        Found_package_json_at_0: DiagnosticMessage;
        package_json_does_not_have_a_0_field: DiagnosticMessage;
        package_json_has_0_field_1_that_references_2: DiagnosticMessage;
        Allow_javascript_files_to_be_compiled: DiagnosticMessage;
        Option_0_should_have_array_of_strings_as_a_value: DiagnosticMessage;
        Checking_if_0_is_the_longest_matching_prefix_for_1_2: DiagnosticMessage;
        Expected_type_of_0_field_in_package_json_to_be_1_got_2: DiagnosticMessage;
        baseUrl_option_is_set_to_0_using_this_value_to_resolve_non_relative_module_name_1: DiagnosticMessage;
        rootDirs_option_is_set_using_it_to_resolve_relative_module_name_0: DiagnosticMessage;
        Longest_matching_prefix_for_0_is_1: DiagnosticMessage;
        Loading_0_from_the_root_dir_1_candidate_location_2: DiagnosticMessage;
        Trying_other_entries_in_rootDirs: DiagnosticMessage;
        Module_resolution_using_rootDirs_has_failed: DiagnosticMessage;
        Do_not_emit_use_strict_directives_in_module_output: DiagnosticMessage;
        Enable_strict_null_checks: DiagnosticMessage;
        Unknown_option_excludes_Did_you_mean_exclude: DiagnosticMessage;
        Raise_error_on_this_expressions_with_an_implied_any_type: DiagnosticMessage;
        Resolving_type_reference_directive_0_containing_file_1_root_directory_2: DiagnosticMessage;
        Resolving_using_primary_search_paths: DiagnosticMessage;
        Resolving_from_node_modules_folder: DiagnosticMessage;
        Type_reference_directive_0_was_successfully_resolved_to_1_primary_Colon_2: DiagnosticMessage;
        Type_reference_directive_0_was_not_resolved: DiagnosticMessage;
        Resolving_with_primary_search_path_0: DiagnosticMessage;
        Root_directory_cannot_be_determined_skipping_primary_search_paths: DiagnosticMessage;
        Resolving_type_reference_directive_0_containing_file_1_root_directory_not_set: DiagnosticMessage;
        Type_declaration_files_to_be_included_in_compilation: DiagnosticMessage;
        Looking_up_in_node_modules_folder_initial_location_0: DiagnosticMessage;
        Containing_file_is_not_specified_and_root_directory_cannot_be_determined_skipping_lookup_in_node_modules_folder: DiagnosticMessage;
        Resolving_type_reference_directive_0_containing_file_not_set_root_directory_1: DiagnosticMessage;
        Resolving_type_reference_directive_0_containing_file_not_set_root_directory_not_set: DiagnosticMessage;
        Resolving_real_path_for_0_result_1: DiagnosticMessage;
        Cannot_compile_modules_using_option_0_unless_the_module_flag_is_amd_or_system: DiagnosticMessage;
        File_name_0_has_a_1_extension_stripping_it: DiagnosticMessage;
        _0_is_declared_but_its_value_is_never_read: DiagnosticMessage;
        Report_errors_on_unused_locals: DiagnosticMessage;
        Report_errors_on_unused_parameters: DiagnosticMessage;
        The_maximum_dependency_depth_to_search_under_node_modules_and_load_JavaScript_files: DiagnosticMessage;
        Cannot_import_type_declaration_files_Consider_importing_0_instead_of_1: DiagnosticMessage;
        Property_0_is_declared_but_its_value_is_never_read: DiagnosticMessage;
        Import_emit_helpers_from_tslib: DiagnosticMessage;
        Auto_discovery_for_typings_is_enabled_in_project_0_Running_extra_resolution_pass_for_module_1_using_cache_location_2: DiagnosticMessage;
        Parse_in_strict_mode_and_emit_use_strict_for_each_source_file: DiagnosticMessage;
        Module_0_was_resolved_to_1_but_jsx_is_not_set: DiagnosticMessage;
        Module_0_was_resolved_as_locally_declared_ambient_module_in_file_1: DiagnosticMessage;
        Module_0_was_resolved_as_ambient_module_declared_in_1_since_this_file_was_not_modified: DiagnosticMessage;
        Specify_the_JSX_factory_function_to_use_when_targeting_react_JSX_emit_e_g_React_createElement_or_h: DiagnosticMessage;
        Resolution_for_module_0_was_found_in_cache_from_location_1: DiagnosticMessage;
        Directory_0_does_not_exist_skipping_all_lookups_in_it: DiagnosticMessage;
        Show_diagnostic_information: DiagnosticMessage;
        Show_verbose_diagnostic_information: DiagnosticMessage;
        Emit_a_single_file_with_source_maps_instead_of_having_a_separate_file: DiagnosticMessage;
        Emit_the_source_alongside_the_sourcemaps_within_a_single_file_requires_inlineSourceMap_or_sourceMap_to_be_set: DiagnosticMessage;
        Transpile_each_file_as_a_separate_module_similar_to_ts_transpileModule: DiagnosticMessage;
        Print_names_of_generated_files_part_of_the_compilation: DiagnosticMessage;
        Print_names_of_files_part_of_the_compilation: DiagnosticMessage;
        The_locale_used_when_displaying_messages_to_the_user_e_g_en_us: DiagnosticMessage;
        Do_not_generate_custom_helper_functions_like_extends_in_compiled_output: DiagnosticMessage;
        Do_not_include_the_default_library_file_lib_d_ts: DiagnosticMessage;
        Do_not_add_triple_slash_references_or_imported_modules_to_the_list_of_compiled_files: DiagnosticMessage;
        Deprecated_Use_skipLibCheck_instead_Skip_type_checking_of_default_library_declaration_files: DiagnosticMessage;
        List_of_folders_to_include_type_definitions_from: DiagnosticMessage;
        Disable_size_limitations_on_JavaScript_projects: DiagnosticMessage;
        The_character_set_of_the_input_files: DiagnosticMessage;
        Emit_a_UTF_8_Byte_Order_Mark_BOM_in_the_beginning_of_output_files: DiagnosticMessage;
        Do_not_truncate_error_messages: DiagnosticMessage;
        Output_directory_for_generated_declaration_files: DiagnosticMessage;
        A_series_of_entries_which_re_map_imports_to_lookup_locations_relative_to_the_baseUrl: DiagnosticMessage;
        List_of_root_folders_whose_combined_content_represents_the_structure_of_the_project_at_runtime: DiagnosticMessage;
        Show_all_compiler_options: DiagnosticMessage;
        Deprecated_Use_outFile_instead_Concatenate_and_emit_output_to_single_file: DiagnosticMessage;
        Command_line_Options: DiagnosticMessage;
        Basic_Options: DiagnosticMessage;
        Strict_Type_Checking_Options: DiagnosticMessage;
        Module_Resolution_Options: DiagnosticMessage;
        Source_Map_Options: DiagnosticMessage;
        Additional_Checks: DiagnosticMessage;
        Experimental_Options: DiagnosticMessage;
        Advanced_Options: DiagnosticMessage;
        Provide_full_support_for_iterables_in_for_of_spread_and_destructuring_when_targeting_ES5_or_ES3: DiagnosticMessage;
        Enable_all_strict_type_checking_options: DiagnosticMessage;
        List_of_language_service_plugins: DiagnosticMessage;
        Scoped_package_detected_looking_in_0: DiagnosticMessage;
        Reusing_resolution_of_module_0_to_file_1_from_old_program: DiagnosticMessage;
        Reusing_module_resolutions_originating_in_0_since_resolutions_are_unchanged_from_old_program: DiagnosticMessage;
        Disable_strict_checking_of_generic_signatures_in_function_types: DiagnosticMessage;
        Enable_strict_checking_of_function_types: DiagnosticMessage;
        Enable_strict_checking_of_property_initialization_in_classes: DiagnosticMessage;
        Numeric_separators_are_not_allowed_here: DiagnosticMessage;
        Multiple_consecutive_numeric_separators_are_not_permitted: DiagnosticMessage;
        Whether_to_keep_outdated_console_output_in_watch_mode_instead_of_clearing_the_screen: DiagnosticMessage;
        All_imports_in_import_declaration_are_unused: DiagnosticMessage;
        Found_1_error_Watching_for_file_changes: DiagnosticMessage;
        Found_0_errors_Watching_for_file_changes: DiagnosticMessage;
        Resolve_keyof_to_string_valued_property_names_only_no_numbers_or_symbols: DiagnosticMessage;
        _0_is_declared_but_never_used: DiagnosticMessage;
        Include_modules_imported_with_json_extension: DiagnosticMessage;
        All_destructured_elements_are_unused: DiagnosticMessage;
        All_variables_are_unused: DiagnosticMessage;
        Definitions_of_the_following_identifiers_conflict_with_those_in_another_file_Colon_0: DiagnosticMessage;
        Conflicts_are_in_this_file: DiagnosticMessage;
        Project_references_may_not_form_a_circular_graph_Cycle_detected_Colon_0: DiagnosticMessage;
        _0_was_also_declared_here: DiagnosticMessage;
        and_here: DiagnosticMessage;
        All_type_parameters_are_unused: DiagnosticMessage;
        package_json_has_a_typesVersions_field_with_version_specific_path_mappings: DiagnosticMessage;
        package_json_does_not_have_a_typesVersions_entry_that_matches_version_0: DiagnosticMessage;
        package_json_has_a_typesVersions_entry_0_that_matches_compiler_version_1_looking_for_a_pattern_to_match_module_name_2: DiagnosticMessage;
        package_json_has_a_typesVersions_entry_0_that_is_not_a_valid_semver_range: DiagnosticMessage;
        An_argument_for_0_was_not_provided: DiagnosticMessage;
        An_argument_matching_this_binding_pattern_was_not_provided: DiagnosticMessage;
        Did_you_mean_to_call_this_expression: DiagnosticMessage;
        Did_you_mean_to_use_new_with_this_expression: DiagnosticMessage;
        Enable_strict_bind_call_and_apply_methods_on_functions: DiagnosticMessage;
        Using_compiler_options_of_project_reference_redirect_0: DiagnosticMessage;
        Found_1_error: DiagnosticMessage;
        Found_0_errors: DiagnosticMessage;
        Module_name_0_was_successfully_resolved_to_1_with_Package_ID_2: DiagnosticMessage;
        Type_reference_directive_0_was_successfully_resolved_to_1_with_Package_ID_2_primary_Colon_3: DiagnosticMessage;
        package_json_had_a_falsy_0_field: DiagnosticMessage;
        Disable_use_of_source_files_instead_of_declaration_files_from_referenced_projects: DiagnosticMessage;
        Emit_class_fields_with_Define_instead_of_Set: DiagnosticMessage;
        Generates_a_CPU_profile: DiagnosticMessage;
        Disable_solution_searching_for_this_project: DiagnosticMessage;
        Specify_strategy_for_watching_file_Colon_FixedPollingInterval_default_PriorityPollingInterval_DynamicPriorityPolling_UseFsEvents_UseFsEventsOnParentDirectory: DiagnosticMessage;
        Specify_strategy_for_watching_directory_on_platforms_that_don_t_support_recursive_watching_natively_Colon_UseFsEvents_default_FixedPollingInterval_DynamicPriorityPolling: DiagnosticMessage;
        Specify_strategy_for_creating_a_polling_watch_when_it_fails_to_create_using_file_system_events_Colon_FixedInterval_default_PriorityInterval_DynamicPriority: DiagnosticMessage;
        Synchronously_call_callbacks_and_update_the_state_of_directory_watchers_on_platforms_that_don_t_support_recursive_watching_natively: DiagnosticMessage;
        Tag_0_expects_at_least_1_arguments_but_the_JSX_factory_2_provides_at_most_3: DiagnosticMessage;
        Option_0_can_only_be_specified_in_tsconfig_json_file_or_set_to_false_or_null_on_command_line: DiagnosticMessage;
        Projects_to_reference: DiagnosticMessage;
        Enable_project_compilation: DiagnosticMessage;
        Composite_projects_may_not_disable_declaration_emit: DiagnosticMessage;
        Output_file_0_has_not_been_built_from_source_file_1: DiagnosticMessage;
        Referenced_project_0_must_have_setting_composite_Colon_true: DiagnosticMessage;
        File_0_is_not_listed_within_the_file_list_of_project_1_Projects_must_list_all_files_or_use_an_include_pattern: DiagnosticMessage;
        Cannot_prepend_project_0_because_it_does_not_have_outFile_set: DiagnosticMessage;
        Output_file_0_from_project_1_does_not_exist: DiagnosticMessage;
        Project_0_is_out_of_date_because_oldest_output_1_is_older_than_newest_input_2: DiagnosticMessage;
        Project_0_is_up_to_date_because_newest_input_1_is_older_than_oldest_output_2: DiagnosticMessage;
        Project_0_is_out_of_date_because_output_file_1_does_not_exist: DiagnosticMessage;
        Project_0_is_out_of_date_because_its_dependency_1_is_out_of_date: DiagnosticMessage;
        Project_0_is_up_to_date_with_d_ts_files_from_its_dependencies: DiagnosticMessage;
        Projects_in_this_build_Colon_0: DiagnosticMessage;
        A_non_dry_build_would_delete_the_following_files_Colon_0: DiagnosticMessage;
        A_non_dry_build_would_build_project_0: DiagnosticMessage;
        Building_project_0: DiagnosticMessage;
        Updating_output_timestamps_of_project_0: DiagnosticMessage;
        delete_this_Project_0_is_up_to_date_because_it_was_previously_built: DiagnosticMessage;
        Project_0_is_up_to_date: DiagnosticMessage;
        Skipping_build_of_project_0_because_its_dependency_1_has_errors: DiagnosticMessage;
        Project_0_can_t_be_built_because_its_dependency_1_has_errors: DiagnosticMessage;
        Build_one_or_more_projects_and_their_dependencies_if_out_of_date: DiagnosticMessage;
        Delete_the_outputs_of_all_projects: DiagnosticMessage;
        Enable_verbose_logging: DiagnosticMessage;
        Show_what_would_be_built_or_deleted_if_specified_with_clean: DiagnosticMessage;
        Build_all_projects_including_those_that_appear_to_be_up_to_date: DiagnosticMessage;
        Option_build_must_be_the_first_command_line_argument: DiagnosticMessage;
        Options_0_and_1_cannot_be_combined: DiagnosticMessage;
        Updating_unchanged_output_timestamps_of_project_0: DiagnosticMessage;
        Project_0_is_out_of_date_because_output_of_its_dependency_1_has_changed: DiagnosticMessage;
        Updating_output_of_project_0: DiagnosticMessage;
        A_non_dry_build_would_update_timestamps_for_output_of_project_0: DiagnosticMessage;
        A_non_dry_build_would_update_output_of_project_0: DiagnosticMessage;
        Cannot_update_output_of_project_0_because_there_was_error_reading_file_1: DiagnosticMessage;
        Cannot_write_file_0_because_it_will_overwrite_tsbuildinfo_file_generated_by_referenced_project_1: DiagnosticMessage;
        Enable_incremental_compilation: DiagnosticMessage;
        Composite_projects_may_not_disable_incremental_compilation: DiagnosticMessage;
        Specify_file_to_store_incremental_compilation_information: DiagnosticMessage;
        Project_0_is_out_of_date_because_output_for_it_was_generated_with_version_1_that_differs_with_current_version_2: DiagnosticMessage;
        Skipping_build_of_project_0_because_its_dependency_1_was_not_built: DiagnosticMessage;
        Project_0_can_t_be_built_because_its_dependency_1_was_not_built: DiagnosticMessage;
        Have_recompiles_in_incremental_and_watch_assume_that_changes_within_a_file_will_only_affect_files_directly_depending_on_it: DiagnosticMessage;
        The_expected_type_comes_from_property_0_which_is_declared_here_on_type_1: DiagnosticMessage;
        The_expected_type_comes_from_this_index_signature: DiagnosticMessage;
        The_expected_type_comes_from_the_return_type_of_this_signature: DiagnosticMessage;
        Print_names_of_files_that_are_part_of_the_compilation_and_then_stop_processing: DiagnosticMessage;
        File_0_is_a_JavaScript_file_Did_you_mean_to_enable_the_allowJs_option: DiagnosticMessage;
        Variable_0_implicitly_has_an_1_type: DiagnosticMessage;
        Parameter_0_implicitly_has_an_1_type: DiagnosticMessage;
        Member_0_implicitly_has_an_1_type: DiagnosticMessage;
        new_expression_whose_target_lacks_a_construct_signature_implicitly_has_an_any_type: DiagnosticMessage;
        _0_which_lacks_return_type_annotation_implicitly_has_an_1_return_type: DiagnosticMessage;
        Function_expression_which_lacks_return_type_annotation_implicitly_has_an_0_return_type: DiagnosticMessage;
        Construct_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type: DiagnosticMessage;
        Function_type_which_lacks_return_type_annotation_implicitly_has_an_0_return_type: DiagnosticMessage;
        Element_implicitly_has_an_any_type_because_index_expression_is_not_of_type_number: DiagnosticMessage;
        Could_not_find_a_declaration_file_for_module_0_1_implicitly_has_an_any_type: DiagnosticMessage;
        Element_implicitly_has_an_any_type_because_type_0_has_no_index_signature: DiagnosticMessage;
        Object_literal_s_property_0_implicitly_has_an_1_type: DiagnosticMessage;
        Rest_parameter_0_implicitly_has_an_any_type: DiagnosticMessage;
        Call_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type: DiagnosticMessage;
        _0_implicitly_has_type_any_because_it_does_not_have_a_type_annotation_and_is_referenced_directly_or_indirectly_in_its_own_initializer: DiagnosticMessage;
        _0_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions: DiagnosticMessage;
        Function_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions: DiagnosticMessage;
        Generator_implicitly_has_yield_type_0_because_it_does_not_yield_any_values_Consider_supplying_a_return_type_annotation: DiagnosticMessage;
        JSX_element_implicitly_has_type_any_because_no_interface_JSX_0_exists: DiagnosticMessage;
        Unreachable_code_detected: DiagnosticMessage;
        Unused_label: DiagnosticMessage;
        Fallthrough_case_in_switch: DiagnosticMessage;
        Not_all_code_paths_return_a_value: DiagnosticMessage;
        Binding_element_0_implicitly_has_an_1_type: DiagnosticMessage;
        Property_0_implicitly_has_type_any_because_its_set_accessor_lacks_a_parameter_type_annotation: DiagnosticMessage;
        Property_0_implicitly_has_type_any_because_its_get_accessor_lacks_a_return_type_annotation: DiagnosticMessage;
        Variable_0_implicitly_has_type_1_in_some_locations_where_its_type_cannot_be_determined: DiagnosticMessage;
        Try_npm_install_types_Slash_1_if_it_exists_or_add_a_new_declaration_d_ts_file_containing_declare_module_0: DiagnosticMessage;
        Dynamic_import_s_specifier_must_be_of_type_string_but_here_has_type_0: DiagnosticMessage;
        Enables_emit_interoperability_between_CommonJS_and_ES_Modules_via_creation_of_namespace_objects_for_all_imports_Implies_allowSyntheticDefaultImports: DiagnosticMessage;
        Type_originates_at_this_import_A_namespace_style_import_cannot_be_called_or_constructed_and_will_cause_a_failure_at_runtime_Consider_using_a_default_import_or_import_require_here_instead: DiagnosticMessage;
        Mapped_object_type_implicitly_has_an_any_template_type: DiagnosticMessage;
        If_the_0_package_actually_exposes_this_module_consider_sending_a_pull_request_to_amend_https_Colon_Slash_Slashgithub_com_SlashDefinitelyTyped_SlashDefinitelyTyped_Slashtree_Slashmaster_Slashtypes_Slash_1: DiagnosticMessage;
        The_containing_arrow_function_captures_the_global_value_of_this: DiagnosticMessage;
        Module_0_was_resolved_to_1_but_resolveJsonModule_is_not_used: DiagnosticMessage;
        Variable_0_implicitly_has_an_1_type_but_a_better_type_may_be_inferred_from_usage: DiagnosticMessage;
        Parameter_0_implicitly_has_an_1_type_but_a_better_type_may_be_inferred_from_usage: DiagnosticMessage;
        Member_0_implicitly_has_an_1_type_but_a_better_type_may_be_inferred_from_usage: DiagnosticMessage;
        Variable_0_implicitly_has_type_1_in_some_locations_but_a_better_type_may_be_inferred_from_usage: DiagnosticMessage;
        Rest_parameter_0_implicitly_has_an_any_type_but_a_better_type_may_be_inferred_from_usage: DiagnosticMessage;
        Property_0_implicitly_has_type_any_but_a_better_type_for_its_get_accessor_may_be_inferred_from_usage: DiagnosticMessage;
        Property_0_implicitly_has_type_any_but_a_better_type_for_its_set_accessor_may_be_inferred_from_usage: DiagnosticMessage;
        _0_implicitly_has_an_1_return_type_but_a_better_type_may_be_inferred_from_usage: DiagnosticMessage;
        Parameter_has_a_name_but_no_type_Did_you_mean_0_Colon_1: DiagnosticMessage;
        Element_implicitly_has_an_any_type_because_type_0_has_no_index_signature_Did_you_mean_to_call_1: DiagnosticMessage;
        Element_implicitly_has_an_any_type_because_expression_of_type_0_can_t_be_used_to_index_type_1: DiagnosticMessage;
        No_index_signature_with_a_parameter_of_type_0_was_found_on_type_1: DiagnosticMessage;
        _0_which_lacks_return_type_annotation_implicitly_has_an_1_yield_type: DiagnosticMessage;
        You_cannot_rename_this_element: DiagnosticMessage;
        You_cannot_rename_elements_that_are_defined_in_the_standard_TypeScript_library: DiagnosticMessage;
        import_can_only_be_used_in_TypeScript_files: DiagnosticMessage;
        export_can_only_be_used_in_TypeScript_files: DiagnosticMessage;
        Type_parameter_declarations_can_only_be_used_in_TypeScript_files: DiagnosticMessage;
        implements_clauses_can_only_be_used_in_TypeScript_files: DiagnosticMessage;
        _0_declarations_can_only_be_used_in_TypeScript_files: DiagnosticMessage;
        Type_aliases_can_only_be_used_in_TypeScript_files: DiagnosticMessage;
        The_0_modifier_can_only_be_used_in_TypeScript_files: DiagnosticMessage;
        Type_annotations_can_only_be_used_in_TypeScript_files: DiagnosticMessage;
        Type_arguments_can_only_be_used_in_TypeScript_files: DiagnosticMessage;
        Parameter_modifiers_can_only_be_used_in_TypeScript_files: DiagnosticMessage;
        Non_null_assertions_can_only_be_used_in_TypeScript_files: DiagnosticMessage;
        Type_assertion_expressions_can_only_be_used_in_TypeScript_files: DiagnosticMessage;
        Octal_literal_types_must_use_ES2015_syntax_Use_the_syntax_0: DiagnosticMessage;
        Octal_literals_are_not_allowed_in_enums_members_initializer_Use_the_syntax_0: DiagnosticMessage;
        Report_errors_in_js_files: DiagnosticMessage;
        JSDoc_types_can_only_be_used_inside_documentation_comments: DiagnosticMessage;
        JSDoc_typedef_tag_should_either_have_a_type_annotation_or_be_followed_by_property_or_member_tags: DiagnosticMessage;
        JSDoc_0_is_not_attached_to_a_class: DiagnosticMessage;
        JSDoc_0_1_does_not_match_the_extends_2_clause: DiagnosticMessage;
        JSDoc_param_tag_has_name_0_but_there_is_no_parameter_with_that_name: DiagnosticMessage;
        Class_declarations_cannot_have_more_than_one_augments_or_extends_tag: DiagnosticMessage;
        Expected_0_type_arguments_provide_these_with_an_extends_tag: DiagnosticMessage;
        Expected_0_1_type_arguments_provide_these_with_an_extends_tag: DiagnosticMessage;
        JSDoc_may_only_appear_in_the_last_parameter_of_a_signature: DiagnosticMessage;
        JSDoc_param_tag_has_name_0_but_there_is_no_parameter_with_that_name_It_would_match_arguments_if_it_had_an_array_type: DiagnosticMessage;
        The_type_of_a_function_declaration_must_match_the_function_s_signature: DiagnosticMessage;
        You_cannot_rename_a_module_via_a_global_import: DiagnosticMessage;
        Qualified_name_0_is_not_allowed_without_a_leading_param_object_1: DiagnosticMessage;
        Only_identifiers_Slashqualified_names_with_optional_type_arguments_are_currently_supported_in_a_class_extends_clause: DiagnosticMessage;
        class_expressions_are_not_currently_supported: DiagnosticMessage;
        Language_service_is_disabled: DiagnosticMessage;
        Declaration_emit_for_this_file_requires_using_private_name_0_An_explicit_type_annotation_may_unblock_declaration_emit: DiagnosticMessage;
        Declaration_emit_for_this_file_requires_using_private_name_0_from_module_1_An_explicit_type_annotation_may_unblock_declaration_emit: DiagnosticMessage;
        JSX_attributes_must_only_be_assigned_a_non_empty_expression: DiagnosticMessage;
        JSX_elements_cannot_have_multiple_attributes_with_the_same_name: DiagnosticMessage;
        Expected_corresponding_JSX_closing_tag_for_0: DiagnosticMessage;
        JSX_attribute_expected: DiagnosticMessage;
        Cannot_use_JSX_unless_the_jsx_flag_is_provided: DiagnosticMessage;
        A_constructor_cannot_contain_a_super_call_when_its_class_extends_null: DiagnosticMessage;
        An_unary_expression_with_the_0_operator_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Consider_enclosing_the_expression_in_parentheses: DiagnosticMessage;
        A_type_assertion_expression_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Consider_enclosing_the_expression_in_parentheses: DiagnosticMessage;
        JSX_element_0_has_no_corresponding_closing_tag: DiagnosticMessage;
        super_must_be_called_before_accessing_this_in_the_constructor_of_a_derived_class: DiagnosticMessage;
        Unknown_type_acquisition_option_0: DiagnosticMessage;
        super_must_be_called_before_accessing_a_property_of_super_in_the_constructor_of_a_derived_class: DiagnosticMessage;
        _0_is_not_a_valid_meta_property_for_keyword_1_Did_you_mean_2: DiagnosticMessage;
        Meta_property_0_is_only_allowed_in_the_body_of_a_function_declaration_function_expression_or_constructor: DiagnosticMessage;
        JSX_fragment_has_no_corresponding_closing_tag: DiagnosticMessage;
        Expected_corresponding_closing_tag_for_JSX_fragment: DiagnosticMessage;
        JSX_fragment_is_not_supported_when_using_jsxFactory: DiagnosticMessage;
        JSX_fragment_is_not_supported_when_using_an_inline_JSX_factory_pragma: DiagnosticMessage;
        Unknown_type_acquisition_option_0_Did_you_mean_1: DiagnosticMessage;
        Circularity_detected_while_resolving_configuration_Colon_0: DiagnosticMessage;
        A_path_in_an_extends_option_must_be_relative_or_rooted_but_0_is_not: DiagnosticMessage;
        The_files_list_in_config_file_0_is_empty: DiagnosticMessage;
        No_inputs_were_found_in_config_file_0_Specified_include_paths_were_1_and_exclude_paths_were_2: DiagnosticMessage;
        File_is_a_CommonJS_module_it_may_be_converted_to_an_ES6_module: DiagnosticMessage;
        This_constructor_function_may_be_converted_to_a_class_declaration: DiagnosticMessage;
        Import_may_be_converted_to_a_default_import: DiagnosticMessage;
        JSDoc_types_may_be_moved_to_TypeScript_types: DiagnosticMessage;
        require_call_may_be_converted_to_an_import: DiagnosticMessage;
        This_may_be_converted_to_an_async_function: DiagnosticMessage;
        await_has_no_effect_on_the_type_of_this_expression: DiagnosticMessage;
        Numeric_literals_with_absolute_values_equal_to_2_53_or_greater_are_too_large_to_be_represented_accurately_as_integers: DiagnosticMessage;
        Add_missing_super_call: DiagnosticMessage;
        Make_super_call_the_first_statement_in_the_constructor: DiagnosticMessage;
        Change_extends_to_implements: DiagnosticMessage;
        Remove_unused_declaration_for_Colon_0: DiagnosticMessage;
        Remove_import_from_0: DiagnosticMessage;
        Implement_interface_0: DiagnosticMessage;
        Implement_inherited_abstract_class: DiagnosticMessage;
        Add_0_to_unresolved_variable: DiagnosticMessage;
        Remove_destructuring: DiagnosticMessage;
        Remove_variable_statement: DiagnosticMessage;
        Remove_template_tag: DiagnosticMessage;
        Remove_type_parameters: DiagnosticMessage;
        Import_0_from_module_1: DiagnosticMessage;
        Change_0_to_1: DiagnosticMessage;
        Add_0_to_existing_import_declaration_from_1: DiagnosticMessage;
        Declare_property_0: DiagnosticMessage;
        Add_index_signature_for_property_0: DiagnosticMessage;
        Disable_checking_for_this_file: DiagnosticMessage;
        Ignore_this_error_message: DiagnosticMessage;
        Initialize_property_0_in_the_constructor: DiagnosticMessage;
        Initialize_static_property_0: DiagnosticMessage;
        Change_spelling_to_0: DiagnosticMessage;
        Declare_method_0: DiagnosticMessage;
        Declare_static_method_0: DiagnosticMessage;
        Prefix_0_with_an_underscore: DiagnosticMessage;
        Rewrite_as_the_indexed_access_type_0: DiagnosticMessage;
        Declare_static_property_0: DiagnosticMessage;
        Call_decorator_expression: DiagnosticMessage;
        Add_async_modifier_to_containing_function: DiagnosticMessage;
        Replace_infer_0_with_unknown: DiagnosticMessage;
        Replace_all_unused_infer_with_unknown: DiagnosticMessage;
        Import_default_0_from_module_1: DiagnosticMessage;
        Add_default_import_0_to_existing_import_declaration_from_1: DiagnosticMessage;
        Add_parameter_name: DiagnosticMessage;
        Declare_a_private_field_named_0: DiagnosticMessage;
        Convert_function_to_an_ES2015_class: DiagnosticMessage;
        Convert_function_0_to_class: DiagnosticMessage;
        Extract_to_0_in_1: DiagnosticMessage;
        Extract_function: DiagnosticMessage;
        Extract_constant: DiagnosticMessage;
        Extract_to_0_in_enclosing_scope: DiagnosticMessage;
        Extract_to_0_in_1_scope: DiagnosticMessage;
        Annotate_with_type_from_JSDoc: DiagnosticMessage;
        Annotate_with_types_from_JSDoc: DiagnosticMessage;
        Infer_type_of_0_from_usage: DiagnosticMessage;
        Infer_parameter_types_from_usage: DiagnosticMessage;
        Convert_to_default_import: DiagnosticMessage;
        Install_0: DiagnosticMessage;
        Replace_import_with_0: DiagnosticMessage;
        Use_synthetic_default_member: DiagnosticMessage;
        Convert_to_ES6_module: DiagnosticMessage;
        Add_undefined_type_to_property_0: DiagnosticMessage;
        Add_initializer_to_property_0: DiagnosticMessage;
        Add_definite_assignment_assertion_to_property_0: DiagnosticMessage;
        Add_all_missing_members: DiagnosticMessage;
        Infer_all_types_from_usage: DiagnosticMessage;
        Delete_all_unused_declarations: DiagnosticMessage;
        Prefix_all_unused_declarations_with_where_possible: DiagnosticMessage;
        Fix_all_detected_spelling_errors: DiagnosticMessage;
        Add_initializers_to_all_uninitialized_properties: DiagnosticMessage;
        Add_definite_assignment_assertions_to_all_uninitialized_properties: DiagnosticMessage;
        Add_undefined_type_to_all_uninitialized_properties: DiagnosticMessage;
        Change_all_jsdoc_style_types_to_TypeScript: DiagnosticMessage;
        Change_all_jsdoc_style_types_to_TypeScript_and_add_undefined_to_nullable_types: DiagnosticMessage;
        Implement_all_unimplemented_interfaces: DiagnosticMessage;
        Install_all_missing_types_packages: DiagnosticMessage;
        Rewrite_all_as_indexed_access_types: DiagnosticMessage;
        Convert_all_to_default_imports: DiagnosticMessage;
        Make_all_super_calls_the_first_statement_in_their_constructor: DiagnosticMessage;
        Add_qualifier_to_all_unresolved_variables_matching_a_member_name: DiagnosticMessage;
        Change_all_extended_interfaces_to_implements: DiagnosticMessage;
        Add_all_missing_super_calls: DiagnosticMessage;
        Implement_all_inherited_abstract_classes: DiagnosticMessage;
        Add_all_missing_async_modifiers: DiagnosticMessage;
        Add_ts_ignore_to_all_error_messages: DiagnosticMessage;
        Annotate_everything_with_types_from_JSDoc: DiagnosticMessage;
        Add_to_all_uncalled_decorators: DiagnosticMessage;
        Convert_all_constructor_functions_to_classes: DiagnosticMessage;
        Generate_get_and_set_accessors: DiagnosticMessage;
        Convert_require_to_import: DiagnosticMessage;
        Convert_all_require_to_import: DiagnosticMessage;
        Move_to_a_new_file: DiagnosticMessage;
        Remove_unreachable_code: DiagnosticMessage;
        Remove_all_unreachable_code: DiagnosticMessage;
        Add_missing_typeof: DiagnosticMessage;
        Remove_unused_label: DiagnosticMessage;
        Remove_all_unused_labels: DiagnosticMessage;
        Convert_0_to_mapped_object_type: DiagnosticMessage;
        Convert_namespace_import_to_named_imports: DiagnosticMessage;
        Convert_named_imports_to_namespace_import: DiagnosticMessage;
        Add_or_remove_braces_in_an_arrow_function: DiagnosticMessage;
        Add_braces_to_arrow_function: DiagnosticMessage;
        Remove_braces_from_arrow_function: DiagnosticMessage;
        Convert_default_export_to_named_export: DiagnosticMessage;
        Convert_named_export_to_default_export: DiagnosticMessage;
        Add_missing_enum_member_0: DiagnosticMessage;
        Add_all_missing_imports: DiagnosticMessage;
        Convert_to_async_function: DiagnosticMessage;
        Convert_all_to_async_functions: DiagnosticMessage;
        Add_unknown_conversion_for_non_overlapping_types: DiagnosticMessage;
        Add_unknown_to_all_conversions_of_non_overlapping_types: DiagnosticMessage;
        Add_missing_new_operator_to_call: DiagnosticMessage;
        Add_missing_new_operator_to_all_calls: DiagnosticMessage;
        Add_names_to_all_parameters_without_names: DiagnosticMessage;
        Enable_the_experimentalDecorators_option_in_your_configuration_file: DiagnosticMessage;
        Convert_parameters_to_destructured_object: DiagnosticMessage;
        Allow_accessing_UMD_globals_from_modules: DiagnosticMessage;
        Extract_type: DiagnosticMessage;
        Extract_to_type_alias: DiagnosticMessage;
        Extract_to_typedef: DiagnosticMessage;
        Infer_this_type_of_0_from_usage: DiagnosticMessage;
        Add_const_to_unresolved_variable: DiagnosticMessage;
        Add_const_to_all_unresolved_variables: DiagnosticMessage;
        Add_await: DiagnosticMessage;
        Add_await_to_initializer_for_0: DiagnosticMessage;
        Fix_all_expressions_possibly_missing_await: DiagnosticMessage;
        Remove_unnecessary_await: DiagnosticMessage;
        Remove_all_unnecessary_uses_of_await: DiagnosticMessage;
        Enable_the_jsx_flag_in_your_configuration_file: DiagnosticMessage;
        Add_await_to_initializers: DiagnosticMessage;
        Extract_to_interface: DiagnosticMessage;
        Convert_to_a_bigint_numeric_literal: DiagnosticMessage;
        Convert_all_to_bigint_numeric_literals: DiagnosticMessage;
        Convert_const_to_let: DiagnosticMessage;
        Prefix_with_declare: DiagnosticMessage;
        Prefix_all_incorrect_property_declarations_with_declare: DiagnosticMessage;
        Convert_to_template_string: DiagnosticMessage;
        Add_export_to_make_this_file_into_a_module: DiagnosticMessage;
        Set_the_target_option_in_your_configuration_file_to_0: DiagnosticMessage;
        Set_the_module_option_in_your_configuration_file_to_0: DiagnosticMessage;
        Convert_invalid_character_to_its_html_entity_code: DiagnosticMessage;
        Wrap_invalid_character_in_an_expression_container: DiagnosticMessage;
        No_value_exists_in_scope_for_the_shorthand_property_0_Either_declare_one_or_provide_an_initializer: DiagnosticMessage;
        Classes_may_not_have_a_field_named_constructor: DiagnosticMessage;
        JSX_expressions_may_not_use_the_comma_operator_Did_you_mean_to_write_an_array: DiagnosticMessage;
        Private_identifiers_cannot_be_used_as_parameters: DiagnosticMessage;
        An_accessibility_modifier_cannot_be_used_with_a_private_identifier: DiagnosticMessage;
        The_operand_of_a_delete_operator_cannot_be_a_private_identifier: DiagnosticMessage;
        constructor_is_a_reserved_word: DiagnosticMessage;
        Property_0_is_not_accessible_outside_class_1_because_it_has_a_private_identifier: DiagnosticMessage;
        The_property_0_cannot_be_accessed_on_type_1_within_this_class_because_it_is_shadowed_by_another_private_identifier_with_the_same_spelling: DiagnosticMessage;
        Property_0_in_type_1_refers_to_a_different_member_that_cannot_be_accessed_from_within_type_2: DiagnosticMessage;
        Private_identifiers_are_not_allowed_outside_class_bodies: DiagnosticMessage;
        The_shadowing_declaration_of_0_is_defined_here: DiagnosticMessage;
        The_declaration_of_0_that_you_probably_intended_to_use_is_defined_here: DiagnosticMessage;
        _0_modifier_cannot_be_used_with_a_private_identifier: DiagnosticMessage;
        A_method_cannot_be_named_with_a_private_identifier: DiagnosticMessage;
        An_accessor_cannot_be_named_with_a_private_identifier: DiagnosticMessage;
        An_enum_member_cannot_be_named_with_a_private_identifier: DiagnosticMessage;
        can_only_be_used_at_the_start_of_a_file: DiagnosticMessage;
        Compiler_reserves_name_0_when_emitting_private_identifier_downlevel: DiagnosticMessage;
        Private_identifiers_are_only_available_when_targeting_ECMAScript_2015_and_higher: DiagnosticMessage;
        Private_identifiers_are_not_allowed_in_variable_declarations: DiagnosticMessage;
        An_optional_chain_cannot_contain_private_identifiers: DiagnosticMessage;
    };
}
declare namespace ts {
    type ErrorCallback = (message: DiagnosticMessage, length: number) => void;
    function tokenIsIdentifierOrKeyword(token: SyntaxKind): boolean;
    function tokenIsIdentifierOrKeywordOrGreaterThan(token: SyntaxKind): boolean;
    interface Scanner {
        getStartPos(): number;
        getToken(): SyntaxKind;
        getTextPos(): number;
        getTokenPos(): number;
        getTokenText(): string;
        getTokenValue(): string;
        hasUnicodeEscape(): boolean;
        hasExtendedUnicodeEscape(): boolean;
        hasPrecedingLineBreak(): boolean;
        isIdentifier(): boolean;
        isReservedWord(): boolean;
        isUnterminated(): boolean;
        getCommentDirectives(): CommentDirective[] | undefined;
        getTokenFlags(): TokenFlags;
        reScanGreaterToken(): SyntaxKind;
        reScanSlashToken(): SyntaxKind;
        reScanTemplateToken(isTaggedTemplate: boolean): SyntaxKind;
        reScanTemplateHeadOrNoSubstitutionTemplate(): SyntaxKind;
        scanJsxIdentifier(): SyntaxKind;
        scanJsxAttributeValue(): SyntaxKind;
        reScanJsxAttributeValue(): SyntaxKind;
        reScanJsxToken(): JsxTokenSyntaxKind;
        reScanLessThanToken(): SyntaxKind;
        reScanQuestionToken(): SyntaxKind;
        scanJsxToken(): JsxTokenSyntaxKind;
        scanJsDocToken(): JSDocSyntaxKind;
        scan(): SyntaxKind;
        getText(): string;
        clearCommentDirectives(): void;
        setText(text: string | undefined, start?: number, length?: number): void;
        setOnError(onError: ErrorCallback | undefined): void;
        setScriptTarget(scriptTarget: ScriptTarget): void;
        setLanguageVariant(variant: LanguageVariant): void;
        setTextPos(textPos: number): void;
        setInJSDocType(inType: boolean): void;
        lookAhead<T>(callback: () => T): T;
        scanRange<T>(start: number, length: number, callback: () => T): T;
        tryScan<T>(callback: () => T): T;
    }
    function isUnicodeIdentifierStart(code: number, languageVersion: ScriptTarget | undefined): boolean;
    function tokenToString(t: SyntaxKind): string | undefined;
    function stringToToken(s: string): SyntaxKind | undefined;
    function computeLineStarts(text: string): number[];
    function getPositionOfLineAndCharacter(sourceFile: SourceFileLike, line: number, character: number): number;
    function getPositionOfLineAndCharacter(sourceFile: SourceFileLike, line: number, character: number, allowEdits?: true): number;
    function computePositionOfLineAndCharacter(lineStarts: readonly number[], line: number, character: number, debugText?: string, allowEdits?: true): number;
    function getLineStarts(sourceFile: SourceFileLike): readonly number[];
    function computeLineAndCharacterOfPosition(lineStarts: readonly number[], position: number): LineAndCharacter;
    function getLineAndCharacterOfPosition(sourceFile: SourceFileLike, position: number): LineAndCharacter;
    function isWhiteSpaceLike(ch: number): boolean;
    function isWhiteSpaceSingleLine(ch: number): boolean;
    function isLineBreak(ch: number): boolean;
    function isOctalDigit(ch: number): boolean;
    function couldStartTrivia(text: string, pos: number): boolean;
    function skipTrivia(text: string, pos: number, stopAfterLineBreak?: boolean, stopAtComments?: boolean): number;
    function isShebangTrivia(text: string, pos: number): boolean;
    function scanShebangTrivia(text: string, pos: number): number;
    function forEachLeadingCommentRange<U>(text: string, pos: number, cb: (pos: number, end: number, kind: CommentKind, hasTrailingNewLine: boolean) => U): U | undefined;
    function forEachLeadingCommentRange<T, U>(text: string, pos: number, cb: (pos: number, end: number, kind: CommentKind, hasTrailingNewLine: boolean, state: T) => U, state: T): U | undefined;
    function forEachTrailingCommentRange<U>(text: string, pos: number, cb: (pos: number, end: number, kind: CommentKind, hasTrailingNewLine: boolean) => U): U | undefined;
    function forEachTrailingCommentRange<T, U>(text: string, pos: number, cb: (pos: number, end: number, kind: CommentKind, hasTrailingNewLine: boolean, state: T) => U, state: T): U | undefined;
    function reduceEachLeadingCommentRange<T, U>(text: string, pos: number, cb: (pos: number, end: number, kind: CommentKind, hasTrailingNewLine: boolean, state: T, memo: U) => U, state: T, initial: U): U | undefined;
    function reduceEachTrailingCommentRange<T, U>(text: string, pos: number, cb: (pos: number, end: number, kind: CommentKind, hasTrailingNewLine: boolean, state: T, memo: U) => U, state: T, initial: U): U | undefined;
    function getLeadingCommentRanges(text: string, pos: number): CommentRange[] | undefined;
    function getTrailingCommentRanges(text: string, pos: number): CommentRange[] | undefined;
    function getShebang(text: string): string | undefined;
    function isIdentifierStart(ch: number, languageVersion: ScriptTarget | undefined): boolean;
    function isIdentifierPart(ch: number, languageVersion: ScriptTarget | undefined): boolean;
    function isIdentifierText(name: string, languageVersion: ScriptTarget | undefined): boolean;
    function createScanner(languageVersion: ScriptTarget, skipTrivia: boolean, languageVariant?: LanguageVariant, textInitial?: string, onError?: ErrorCallback, start?: number, length?: number): Scanner;
    function utf16EncodeAsString(codePoint: number): string;
}
declare namespace ts {
    function isExternalModuleNameRelative(moduleName: string): boolean;
    function sortAndDeduplicateDiagnostics<T extends Diagnostic>(diagnostics: readonly T[]): SortedReadonlyArray<T>;
    function getDefaultLibFileName(options: CompilerOptions): string;
    function textSpanEnd(span: TextSpan): number;
    function textSpanIsEmpty(span: TextSpan): boolean;
    function textSpanContainsPosition(span: TextSpan, position: number): boolean;
    function textRangeContainsPositionInclusive(span: TextRange, position: number): boolean;
    function textSpanContainsTextSpan(span: TextSpan, other: TextSpan): boolean;
    function textSpanOverlapsWith(span: TextSpan, other: TextSpan): boolean;
    function textSpanOverlap(span1: TextSpan, span2: TextSpan): TextSpan | undefined;
    function textSpanIntersectsWithTextSpan(span: TextSpan, other: TextSpan): boolean;
    function textSpanIntersectsWith(span: TextSpan, start: number, length: number): boolean;
    function decodedTextSpanIntersectsWith(start1: number, length1: number, start2: number, length2: number): boolean;
    function textSpanIntersectsWithPosition(span: TextSpan, position: number): boolean;
    function textSpanIntersection(span1: TextSpan, span2: TextSpan): TextSpan | undefined;
    function createTextSpan(start: number, length: number): TextSpan;
    function createTextSpanFromBounds(start: number, end: number): TextSpan;
    function textChangeRangeNewSpan(range: TextChangeRange): TextSpan;
    function textChangeRangeIsUnchanged(range: TextChangeRange): boolean;
    function createTextChangeRange(span: TextSpan, newLength: number): TextChangeRange;
    let unchangedTextChangeRange: TextChangeRange;
    function collapseTextChangeRangesAcrossMultipleVersions(changes: readonly TextChangeRange[]): TextChangeRange;
    function getTypeParameterOwner(d: Declaration): Declaration | undefined;
    type ParameterPropertyDeclaration = ParameterDeclaration & {
        parent: ConstructorDeclaration;
        name: Identifier;
    };
    function isParameterPropertyDeclaration(node: Node, parent: Node): node is ParameterPropertyDeclaration;
    function isEmptyBindingPattern(node: BindingName): node is BindingPattern;
    function isEmptyBindingElement(node: BindingElement): boolean;
    function walkUpBindingElementsAndPatterns(binding: BindingElement): VariableDeclaration | ParameterDeclaration;
    function getCombinedModifierFlags(node: Declaration): ModifierFlags;
    function getCombinedNodeFlags(node: Node): NodeFlags;
    function validateLocaleAndSetLanguage(locale: string, sys: {
        getExecutingFilePath(): string;
        resolvePath(path: string): string;
        fileExists(fileName: string): boolean;
        readFile(fileName: string): string | undefined;
    }, errors?: Push<Diagnostic>): void;
    function getOriginalNode(node: Node): Node;
    function getOriginalNode<T extends Node>(node: Node, nodeTest: (node: Node) => node is T): T;
    function getOriginalNode(node: Node | undefined): Node | undefined;
    function getOriginalNode<T extends Node>(node: Node | undefined, nodeTest: (node: Node | undefined) => node is T): T | undefined;
    function isParseTreeNode(node: Node): boolean;
    function getParseTreeNode(node: Node): Node;
    function getParseTreeNode<T extends Node>(node: Node | undefined, nodeTest?: (node: Node) => node is T): T | undefined;
    function escapeLeadingUnderscores(identifier: string): __String;
    function unescapeLeadingUnderscores(identifier: __String): string;
    function idText(identifierOrPrivateName: Identifier | PrivateIdentifier): string;
    function symbolName(symbol: Symbol): string;
    function nodeHasName(statement: Node, name: Identifier): boolean;
    function getNameOfJSDocTypedef(declaration: JSDocTypedefTag): Identifier | PrivateIdentifier | undefined;
    function isNamedDeclaration(node: Node): node is NamedDeclaration & {
        name: DeclarationName;
    };
    function getNonAssignedNameOfDeclaration(declaration: Declaration | Expression): DeclarationName | undefined;
    function getNameOfDeclaration(declaration: Declaration | Expression): DeclarationName | undefined;
    function getJSDocParameterTags(param: ParameterDeclaration): readonly JSDocParameterTag[];
    function getJSDocTypeParameterTags(param: TypeParameterDeclaration): readonly JSDocTemplateTag[];
    function hasJSDocParameterTags(node: FunctionLikeDeclaration | SignatureDeclaration): boolean;
    function getJSDocAugmentsTag(node: Node): JSDocAugmentsTag | undefined;
    function getJSDocImplementsTags(node: Node): readonly JSDocImplementsTag[];
    function getJSDocClassTag(node: Node): JSDocClassTag | undefined;
    function getJSDocPublicTag(node: Node): JSDocPublicTag | undefined;
    function getJSDocPrivateTag(node: Node): JSDocPrivateTag | undefined;
    function getJSDocProtectedTag(node: Node): JSDocProtectedTag | undefined;
    function getJSDocReadonlyTag(node: Node): JSDocReadonlyTag | undefined;
    function getJSDocEnumTag(node: Node): JSDocEnumTag | undefined;
    function getJSDocThisTag(node: Node): JSDocThisTag | undefined;
    function getJSDocReturnTag(node: Node): JSDocReturnTag | undefined;
    function getJSDocTemplateTag(node: Node): JSDocTemplateTag | undefined;
    function getJSDocTypeTag(node: Node): JSDocTypeTag | undefined;
    function getJSDocType(node: Node): TypeNode | undefined;
    function getJSDocReturnType(node: Node): TypeNode | undefined;
    function getJSDocTags(node: Node): readonly JSDocTag[];
    function getAllJSDocTags<T extends JSDocTag>(node: Node, predicate: (tag: JSDocTag) => tag is T): readonly T[];
    function getAllJSDocTagsOfKind(node: Node, kind: SyntaxKind): readonly JSDocTag[];
    function getEffectiveTypeParameterDeclarations(node: DeclarationWithTypeParameters): readonly TypeParameterDeclaration[];
    function getEffectiveConstraintOfTypeParameter(node: TypeParameterDeclaration): TypeNode | undefined;
    function isNumericLiteral(node: Node): node is NumericLiteral;
    function isBigIntLiteral(node: Node): node is BigIntLiteral;
    function isStringLiteral(node: Node): node is StringLiteral;
    function isJsxText(node: Node): node is JsxText;
    function isRegularExpressionLiteral(node: Node): node is RegularExpressionLiteral;
    function isNoSubstitutionTemplateLiteral(node: Node): node is NoSubstitutionTemplateLiteral;
    function isTemplateHead(node: Node): node is TemplateHead;
    function isTemplateMiddle(node: Node): node is TemplateMiddle;
    function isTemplateTail(node: Node): node is TemplateTail;
    function isIdentifier(node: Node): node is Identifier;
    function isQualifiedName(node: Node): node is QualifiedName;
    function isComputedPropertyName(node: Node): node is ComputedPropertyName;
    function isPrivateIdentifier(node: Node): node is PrivateIdentifier;
    function isIdentifierOrPrivateIdentifier(node: Node): node is Identifier | PrivateIdentifier;
    function isTypeParameterDeclaration(node: Node): node is TypeParameterDeclaration;
    function isParameter(node: Node): node is ParameterDeclaration;
    function isDecorator(node: Node): node is Decorator;
    function isPropertySignature(node: Node): node is PropertySignature;
    function isPropertyDeclaration(node: Node): node is PropertyDeclaration;
    function isMethodSignature(node: Node): node is MethodSignature;
    function isMethodDeclaration(node: Node): node is MethodDeclaration;
    function isConstructorDeclaration(node: Node): node is ConstructorDeclaration;
    function isGetAccessorDeclaration(node: Node): node is GetAccessorDeclaration;
    function isSetAccessorDeclaration(node: Node): node is SetAccessorDeclaration;
    function isCallSignatureDeclaration(node: Node): node is CallSignatureDeclaration;
    function isConstructSignatureDeclaration(node: Node): node is ConstructSignatureDeclaration;
    function isIndexSignatureDeclaration(node: Node): node is IndexSignatureDeclaration;
    function isGetOrSetAccessorDeclaration(node: Node): node is AccessorDeclaration;
    function isTypePredicateNode(node: Node): node is TypePredicateNode;
    function isTypeReferenceNode(node: Node): node is TypeReferenceNode;
    function isFunctionTypeNode(node: Node): node is FunctionTypeNode;
    function isConstructorTypeNode(node: Node): node is ConstructorTypeNode;
    function isTypeQueryNode(node: Node): node is TypeQueryNode;
    function isTypeLiteralNode(node: Node): node is TypeLiteralNode;
    function isArrayTypeNode(node: Node): node is ArrayTypeNode;
    function isTupleTypeNode(node: Node): node is TupleTypeNode;
    function isUnionTypeNode(node: Node): node is UnionTypeNode;
    function isIntersectionTypeNode(node: Node): node is IntersectionTypeNode;
    function isConditionalTypeNode(node: Node): node is ConditionalTypeNode;
    function isInferTypeNode(node: Node): node is InferTypeNode;
    function isParenthesizedTypeNode(node: Node): node is ParenthesizedTypeNode;
    function isThisTypeNode(node: Node): node is ThisTypeNode;
    function isTypeOperatorNode(node: Node): node is TypeOperatorNode;
    function isIndexedAccessTypeNode(node: Node): node is IndexedAccessTypeNode;
    function isMappedTypeNode(node: Node): node is MappedTypeNode;
    function isLiteralTypeNode(node: Node): node is LiteralTypeNode;
    function isImportTypeNode(node: Node): node is ImportTypeNode;
    function isObjectBindingPattern(node: Node): node is ObjectBindingPattern;
    function isArrayBindingPattern(node: Node): node is ArrayBindingPattern;
    function isBindingElement(node: Node): node is BindingElement;
    function isArrayLiteralExpression(node: Node): node is ArrayLiteralExpression;
    function isObjectLiteralExpression(node: Node): node is ObjectLiteralExpression;
    function isPropertyAccessExpression(node: Node): node is PropertyAccessExpression;
    function isPropertyAccessChain(node: Node): node is PropertyAccessChain;
    function isElementAccessExpression(node: Node): node is ElementAccessExpression;
    function isElementAccessChain(node: Node): node is ElementAccessChain;
    function isCallExpression(node: Node): node is CallExpression;
    function isCallChain(node: Node): node is CallChain;
    function isOptionalChain(node: Node): node is PropertyAccessChain | ElementAccessChain | CallChain;
    function isOptionalChainRoot(node: Node): node is OptionalChainRoot;
    function isExpressionOfOptionalChainRoot(node: Node): node is Expression & {
        parent: OptionalChainRoot;
    };
    function isOutermostOptionalChain(node: OptionalChain): boolean;
    function isNullishCoalesce(node: Node): boolean;
    function isNewExpression(node: Node): node is NewExpression;
    function isTaggedTemplateExpression(node: Node): node is TaggedTemplateExpression;
    function isTypeAssertion(node: Node): node is TypeAssertion;
    function isConstTypeReference(node: Node): boolean;
    function isParenthesizedExpression(node: Node): node is ParenthesizedExpression;
    function skipPartiallyEmittedExpressions(node: Expression): Expression;
    function skipPartiallyEmittedExpressions(node: Node): Node;
    function isFunctionExpression(node: Node): node is FunctionExpression;
    function isArrowFunction(node: Node): node is ArrowFunction;
    function isDeleteExpression(node: Node): node is DeleteExpression;
    function isTypeOfExpression(node: Node): node is TypeOfExpression;
    function isVoidExpression(node: Node): node is VoidExpression;
    function isAwaitExpression(node: Node): node is AwaitExpression;
    function isPrefixUnaryExpression(node: Node): node is PrefixUnaryExpression;
    function isPostfixUnaryExpression(node: Node): node is PostfixUnaryExpression;
    function isBinaryExpression(node: Node): node is BinaryExpression;
    function isConditionalExpression(node: Node): node is ConditionalExpression;
    function isTemplateExpression(node: Node): node is TemplateExpression;
    function isYieldExpression(node: Node): node is YieldExpression;
    function isSpreadElement(node: Node): node is SpreadElement;
    function isClassExpression(node: Node): node is ClassExpression;
    function isOmittedExpression(node: Node): node is OmittedExpression;
    function isExpressionWithTypeArguments(node: Node): node is ExpressionWithTypeArguments;
    function isAsExpression(node: Node): node is AsExpression;
    function isNonNullExpression(node: Node): node is NonNullExpression;
    function isMetaProperty(node: Node): node is MetaProperty;
    function isTemplateSpan(node: Node): node is TemplateSpan;
    function isSemicolonClassElement(node: Node): node is SemicolonClassElement;
    function isBlock(node: Node): node is Block;
    function isVariableStatement(node: Node): node is VariableStatement;
    function isEmptyStatement(node: Node): node is EmptyStatement;
    function isExpressionStatement(node: Node): node is ExpressionStatement;
    function isIfStatement(node: Node): node is IfStatement;
    function isDoStatement(node: Node): node is DoStatement;
    function isWhileStatement(node: Node): node is WhileStatement;
    function isForStatement(node: Node): node is ForStatement;
    function isForInStatement(node: Node): node is ForInStatement;
    function isForOfStatement(node: Node): node is ForOfStatement;
    function isContinueStatement(node: Node): node is ContinueStatement;
    function isBreakStatement(node: Node): node is BreakStatement;
    function isBreakOrContinueStatement(node: Node): node is BreakOrContinueStatement;
    function isReturnStatement(node: Node): node is ReturnStatement;
    function isWithStatement(node: Node): node is WithStatement;
    function isSwitchStatement(node: Node): node is SwitchStatement;
    function isLabeledStatement(node: Node): node is LabeledStatement;
    function isThrowStatement(node: Node): node is ThrowStatement;
    function isTryStatement(node: Node): node is TryStatement;
    function isDebuggerStatement(node: Node): node is DebuggerStatement;
    function isVariableDeclaration(node: Node): node is VariableDeclaration;
    function isVariableDeclarationList(node: Node): node is VariableDeclarationList;
    function isFunctionDeclaration(node: Node): node is FunctionDeclaration;
    function isClassDeclaration(node: Node): node is ClassDeclaration;
    function isInterfaceDeclaration(node: Node): node is InterfaceDeclaration;
    function isTypeAliasDeclaration(node: Node): node is TypeAliasDeclaration;
    function isEnumDeclaration(node: Node): node is EnumDeclaration;
    function isModuleDeclaration(node: Node): node is ModuleDeclaration;
    function isModuleBlock(node: Node): node is ModuleBlock;
    function isCaseBlock(node: Node): node is CaseBlock;
    function isNamespaceExportDeclaration(node: Node): node is NamespaceExportDeclaration;
    function isImportEqualsDeclaration(node: Node): node is ImportEqualsDeclaration;
    function isImportDeclaration(node: Node): node is ImportDeclaration;
    function isImportClause(node: Node): node is ImportClause;
    function isNamespaceImport(node: Node): node is NamespaceImport;
    function isNamespaceExport(node: Node): node is NamespaceExport;
    function isNamedExportBindings(node: Node): node is NamedExportBindings;
    function isNamedImports(node: Node): node is NamedImports;
    function isImportSpecifier(node: Node): node is ImportSpecifier;
    function isExportAssignment(node: Node): node is ExportAssignment;
    function isExportDeclaration(node: Node): node is ExportDeclaration;
    function isNamedExports(node: Node): node is NamedExports;
    function isExportSpecifier(node: Node): node is ExportSpecifier;
    function isMissingDeclaration(node: Node): node is MissingDeclaration;
    function isExternalModuleReference(node: Node): node is ExternalModuleReference;
    function isJsxElement(node: Node): node is JsxElement;
    function isJsxSelfClosingElement(node: Node): node is JsxSelfClosingElement;
    function isJsxOpeningElement(node: Node): node is JsxOpeningElement;
    function isJsxClosingElement(node: Node): node is JsxClosingElement;
    function isJsxFragment(node: Node): node is JsxFragment;
    function isJsxOpeningFragment(node: Node): node is JsxOpeningFragment;
    function isJsxClosingFragment(node: Node): node is JsxClosingFragment;
    function isJsxAttribute(node: Node): node is JsxAttribute;
    function isJsxAttributes(node: Node): node is JsxAttributes;
    function isJsxSpreadAttribute(node: Node): node is JsxSpreadAttribute;
    function isJsxExpression(node: Node): node is JsxExpression;
    function isCaseClause(node: Node): node is CaseClause;
    function isDefaultClause(node: Node): node is DefaultClause;
    function isHeritageClause(node: Node): node is HeritageClause;
    function isCatchClause(node: Node): node is CatchClause;
    function isPropertyAssignment(node: Node): node is PropertyAssignment;
    function isShorthandPropertyAssignment(node: Node): node is ShorthandPropertyAssignment;
    function isSpreadAssignment(node: Node): node is SpreadAssignment;
    function isEnumMember(node: Node): node is EnumMember;
    function isSourceFile(node: Node): node is SourceFile;
    function isBundle(node: Node): node is Bundle;
    function isUnparsedSource(node: Node): node is UnparsedSource;
    function isUnparsedPrepend(node: Node): node is UnparsedPrepend;
    function isUnparsedTextLike(node: Node): node is UnparsedTextLike;
    function isUnparsedNode(node: Node): node is UnparsedNode;
    function isJSDocTypeExpression(node: Node): node is JSDocTypeExpression;
    function isJSDocAllType(node: Node): node is JSDocAllType;
    function isJSDocUnknownType(node: Node): node is JSDocUnknownType;
    function isJSDocNullableType(node: Node): node is JSDocNullableType;
    function isJSDocNonNullableType(node: Node): node is JSDocNonNullableType;
    function isJSDocOptionalType(node: Node): node is JSDocOptionalType;
    function isJSDocFunctionType(node: Node): node is JSDocFunctionType;
    function isJSDocVariadicType(node: Node): node is JSDocVariadicType;
    function isJSDoc(node: Node): node is JSDoc;
    function isJSDocAuthorTag(node: Node): node is JSDocAuthorTag;
    function isJSDocAugmentsTag(node: Node): node is JSDocAugmentsTag;
    function isJSDocImplementsTag(node: Node): node is JSDocImplementsTag;
    function isJSDocClassTag(node: Node): node is JSDocClassTag;
    function isJSDocPublicTag(node: Node): node is JSDocPublicTag;
    function isJSDocPrivateTag(node: Node): node is JSDocPrivateTag;
    function isJSDocProtectedTag(node: Node): node is JSDocProtectedTag;
    function isJSDocReadonlyTag(node: Node): node is JSDocReadonlyTag;
    function isJSDocEnumTag(node: Node): node is JSDocEnumTag;
    function isJSDocThisTag(node: Node): node is JSDocThisTag;
    function isJSDocParameterTag(node: Node): node is JSDocParameterTag;
    function isJSDocReturnTag(node: Node): node is JSDocReturnTag;
    function isJSDocTypeTag(node: Node): node is JSDocTypeTag;
    function isJSDocTemplateTag(node: Node): node is JSDocTemplateTag;
    function isJSDocTypedefTag(node: Node): node is JSDocTypedefTag;
    function isJSDocPropertyTag(node: Node): node is JSDocPropertyTag;
    function isJSDocPropertyLikeTag(node: Node): node is JSDocPropertyLikeTag;
    function isJSDocTypeLiteral(node: Node): node is JSDocTypeLiteral;
    function isJSDocCallbackTag(node: Node): node is JSDocCallbackTag;
    function isJSDocSignature(node: Node): node is JSDocSignature;
    function isSyntaxList(n: Node): n is SyntaxList;
    function isNode(node: Node): boolean;
    function isNodeKind(kind: SyntaxKind): boolean;
    function isToken(n: Node): boolean;
    function isNodeArray<T extends Node>(array: readonly T[]): array is NodeArray<T>;
    function isLiteralKind(kind: SyntaxKind): boolean;
    function isLiteralExpression(node: Node): node is LiteralExpression;
    function isTemplateLiteralKind(kind: SyntaxKind): boolean;
    type TemplateLiteralToken = NoSubstitutionTemplateLiteral | TemplateHead | TemplateMiddle | TemplateTail;
    function isTemplateLiteralToken(node: Node): node is TemplateLiteralToken;
    function isTemplateMiddleOrTemplateTail(node: Node): node is TemplateMiddle | TemplateTail;
    function isImportOrExportSpecifier(node: Node): node is ImportSpecifier | ExportSpecifier;
    function isTypeOnlyImportOrExportDeclaration(node: Node): node is TypeOnlyCompatibleAliasDeclaration;
    function isStringTextContainingNode(node: Node): node is StringLiteral | TemplateLiteralToken;
    function isGeneratedIdentifier(node: Node): node is GeneratedIdentifier;
    function isPrivateIdentifierPropertyDeclaration(node: Node): node is PrivateIdentifierPropertyDeclaration;
    function isPrivateIdentifierPropertyAccessExpression(node: Node): node is PrivateIdentifierPropertyAccessExpression;
    function isModifierKind(token: SyntaxKind): token is Modifier["kind"];
    function isParameterPropertyModifier(kind: SyntaxKind): boolean;
    function isClassMemberModifier(idToken: SyntaxKind): boolean;
    function isModifier(node: Node): node is Modifier;
    function isEntityName(node: Node): node is EntityName;
    function isPropertyName(node: Node): node is PropertyName;
    function isBindingName(node: Node): node is BindingName;
    function isFunctionLike(node: Node): node is SignatureDeclaration;
    function isFunctionLikeDeclaration(node: Node): node is FunctionLikeDeclaration;
    function isFunctionLikeKind(kind: SyntaxKind): boolean;
    function isFunctionOrModuleBlock(node: Node): boolean;
    function isClassElement(node: Node): node is ClassElement;
    function isClassLike(node: Node): node is ClassLikeDeclaration;
    function isAccessor(node: Node): node is AccessorDeclaration;
    function isMethodOrAccessor(node: Node): node is MethodDeclaration | AccessorDeclaration;
    function isTypeElement(node: Node): node is TypeElement;
    function isClassOrTypeElement(node: Node): node is ClassElement | TypeElement;
    function isObjectLiteralElementLike(node: Node): node is ObjectLiteralElementLike;
    function isTypeNode(node: Node): node is TypeNode;
    function isFunctionOrConstructorTypeNode(node: Node): node is FunctionTypeNode | ConstructorTypeNode;
    function isBindingPattern(node: Node | undefined): node is BindingPattern;
    function isAssignmentPattern(node: Node): node is AssignmentPattern;
    function isArrayBindingElement(node: Node): node is ArrayBindingElement;
    function isDeclarationBindingElement(bindingElement: BindingOrAssignmentElement): bindingElement is VariableDeclaration | ParameterDeclaration | BindingElement;
    function isBindingOrAssignmentPattern(node: BindingOrAssignmentElementTarget): node is BindingOrAssignmentPattern;
    function isObjectBindingOrAssignmentPattern(node: BindingOrAssignmentElementTarget): node is ObjectBindingOrAssignmentPattern;
    function isArrayBindingOrAssignmentPattern(node: BindingOrAssignmentElementTarget): node is ArrayBindingOrAssignmentPattern;
    function isPropertyAccessOrQualifiedNameOrImportTypeNode(node: Node): node is PropertyAccessExpression | QualifiedName | ImportTypeNode;
    function isPropertyAccessOrQualifiedName(node: Node): node is PropertyAccessExpression | QualifiedName;
    function isCallLikeExpression(node: Node): node is CallLikeExpression;
    function isCallOrNewExpression(node: Node): node is CallExpression | NewExpression;
    function isTemplateLiteral(node: Node): node is TemplateLiteral;
    function isLeftHandSideExpression(node: Node): node is LeftHandSideExpression;
    function isUnaryExpression(node: Node): node is UnaryExpression;
    function isUnaryExpressionWithWrite(expr: Node): expr is PrefixUnaryExpression | PostfixUnaryExpression;
    function isExpression(node: Node): node is Expression;
    function isAssertionExpression(node: Node): node is AssertionExpression;
    function isPartiallyEmittedExpression(node: Node): node is PartiallyEmittedExpression;
    function isNotEmittedStatement(node: Node): node is NotEmittedStatement;
    function isSyntheticReference(node: Node): node is SyntheticReferenceExpression;
    function isNotEmittedOrPartiallyEmittedNode(node: Node): node is NotEmittedStatement | PartiallyEmittedExpression;
    function isIterationStatement(node: Node, lookInLabeledStatements: false): node is IterationStatement;
    function isIterationStatement(node: Node, lookInLabeledStatements: boolean): node is IterationStatement | LabeledStatement;
    function isScopeMarker(node: Node): boolean;
    function hasScopeMarker(statements: readonly Statement[]): boolean;
    function needsScopeMarker(result: Statement): boolean;
    function isExternalModuleIndicator(result: Statement): boolean;
    function isForInOrOfStatement(node: Node): node is ForInOrOfStatement;
    function isConciseBody(node: Node): node is ConciseBody;
    function isFunctionBody(node: Node): node is FunctionBody;
    function isForInitializer(node: Node): node is ForInitializer;
    function isModuleBody(node: Node): node is ModuleBody;
    function isNamespaceBody(node: Node): node is NamespaceBody;
    function isJSDocNamespaceBody(node: Node): node is JSDocNamespaceBody;
    function isNamedImportBindings(node: Node): node is NamedImportBindings;
    function isModuleOrEnumDeclaration(node: Node): node is ModuleDeclaration | EnumDeclaration;
    function isDeclaration(node: Node): node is NamedDeclaration;
    function isDeclarationStatement(node: Node): node is DeclarationStatement;
    function isStatementButNotDeclaration(node: Node): node is Statement;
    function isStatement(node: Node): node is Statement;
    function isModuleReference(node: Node): node is ModuleReference;
    function isJsxTagNameExpression(node: Node): node is JsxTagNameExpression;
    function isJsxChild(node: Node): node is JsxChild;
    function isJsxAttributeLike(node: Node): node is JsxAttributeLike;
    function isStringLiteralOrJsxExpression(node: Node): node is StringLiteral | JsxExpression;
    function isJsxOpeningLikeElement(node: Node): node is JsxOpeningLikeElement;
    function isCaseOrDefaultClause(node: Node): node is CaseOrDefaultClause;
    function isJSDocNode(node: Node): boolean;
    function isJSDocCommentContainingNode(node: Node): boolean;
    function isJSDocTag(node: Node): node is JSDocTag;
    function isSetAccessor(node: Node): node is SetAccessorDeclaration;
    function isGetAccessor(node: Node): node is GetAccessorDeclaration;
    function hasJSDocNodes(node: Node): node is HasJSDoc;
    function hasType(node: Node): node is HasType;
    function hasInitializer(node: Node): node is HasInitializer;
    function hasOnlyExpressionInitializer(node: Node): node is HasExpressionInitializer;
    function isObjectLiteralElement(node: Node): node is ObjectLiteralElement;
    function isTypeReferenceType(node: Node): node is TypeReferenceType;
    function guessIndentation(lines: string[]): number | undefined;
    function isStringLiteralLike(node: Node): node is StringLiteralLike;
}
declare namespace ts {
    const resolvingEmptyArray: never[];
    const emptyMap: ReadonlyMap<never> & ReadonlyPragmaMap;
    const emptyUnderscoreEscapedMap: ReadonlyUnderscoreEscapedMap<never>;
    const externalHelpersModuleNameText = "tslib";
    const defaultMaximumTruncationLength = 160;
    function getDeclarationOfKind<T extends Declaration>(symbol: Symbol, kind: T["kind"]): T | undefined;
    function createUnderscoreEscapedMap<T>(): UnderscoreEscapedMap<T>;
    function hasEntries(map: ReadonlyUnderscoreEscapedMap<any> | undefined): map is ReadonlyUnderscoreEscapedMap<any>;
    function createSymbolTable(symbols?: readonly Symbol[]): SymbolTable;
    function isTransientSymbol(symbol: Symbol): symbol is TransientSymbol;
    function changesAffectModuleResolution(oldOptions: CompilerOptions, newOptions: CompilerOptions): boolean;
    function optionsHaveModuleResolutionChanges(oldOptions: CompilerOptions, newOptions: CompilerOptions): boolean;
    function findAncestor<T extends Node>(node: Node | undefined, callback: (element: Node) => element is T): T | undefined;
    function findAncestor(node: Node | undefined, callback: (element: Node) => boolean | "quit"): Node | undefined;
    function forEachAncestor<T>(node: Node, callback: (n: Node) => T | undefined | "quit"): T | undefined;
    function forEachEntry<T, U>(map: ReadonlyUnderscoreEscapedMap<T>, callback: (value: T, key: __String) => U | undefined): U | undefined;
    function forEachEntry<T, U>(map: ReadonlyMap<T>, callback: (value: T, key: string) => U | undefined): U | undefined;
    function forEachKey<T>(map: ReadonlyUnderscoreEscapedMap<{}>, callback: (key: __String) => T | undefined): T | undefined;
    function forEachKey<T>(map: ReadonlyMap<{}>, callback: (key: string) => T | undefined): T | undefined;
    function copyEntries<T>(source: ReadonlyUnderscoreEscapedMap<T>, target: UnderscoreEscapedMap<T>): void;
    function copyEntries<T>(source: ReadonlyMap<T>, target: Map<T>): void;
    function arrayToSet(array: readonly string[]): Map<true>;
    function arrayToSet<T>(array: readonly T[], makeKey: (value: T) => string | undefined): Map<true>;
    function arrayToSet<T>(array: readonly T[], makeKey: (value: T) => __String | undefined): UnderscoreEscapedMap<true>;
    function cloneMap(map: SymbolTable): SymbolTable;
    function cloneMap<T>(map: ReadonlyMap<T>): Map<T>;
    function cloneMap<T>(map: ReadonlyUnderscoreEscapedMap<T>): UnderscoreEscapedMap<T>;
    function usingSingleLineStringWriter(action: (writer: EmitTextWriter) => void): string;
    function getFullWidth(node: Node): number;
    function getResolvedModule(sourceFile: SourceFile | undefined, moduleNameText: string): ResolvedModuleFull | undefined;
    function setResolvedModule(sourceFile: SourceFile, moduleNameText: string, resolvedModule: ResolvedModuleFull): void;
    function setResolvedTypeReferenceDirective(sourceFile: SourceFile, typeReferenceDirectiveName: string, resolvedTypeReferenceDirective?: ResolvedTypeReferenceDirective): void;
    function projectReferenceIsEqualTo(oldRef: ProjectReference, newRef: ProjectReference): boolean;
    function moduleResolutionIsEqualTo(oldResolution: ResolvedModuleFull, newResolution: ResolvedModuleFull): boolean;
    function packageIdToString({ name, subModuleName, version }: PackageId): string;
    function typeDirectiveIsEqualTo(oldResolution: ResolvedTypeReferenceDirective, newResolution: ResolvedTypeReferenceDirective): boolean;
    function hasChangesInResolutions<T>(names: readonly string[], newResolutions: readonly T[], oldResolutions: ReadonlyMap<T> | undefined, comparer: (oldResolution: T, newResolution: T) => boolean): boolean;
    function containsParseError(node: Node): boolean;
    function getSourceFileOfNode(node: Node): SourceFile;
    function getSourceFileOfNode(node: Node | undefined): SourceFile | undefined;
    function isStatementWithLocals(node: Node): boolean;
    function getStartPositionOfLine(line: number, sourceFile: SourceFileLike): number;
    function nodePosToString(node: Node): string;
    function getEndLinePosition(line: number, sourceFile: SourceFileLike): number;
    function isFileLevelUniqueName(sourceFile: SourceFile, name: string, hasGlobalName?: PrintHandlers["hasGlobalName"]): boolean;
    function nodeIsMissing(node: Node | undefined): boolean;
    function nodeIsPresent(node: Node | undefined): boolean;
    function insertStatementsAfterStandardPrologue<T extends Statement>(to: T[], from: readonly T[] | undefined): T[];
    function insertStatementsAfterCustomPrologue<T extends Statement>(to: T[], from: readonly T[] | undefined): T[];
    function insertStatementAfterStandardPrologue<T extends Statement>(to: T[], statement: T | undefined): T[];
    function insertStatementAfterCustomPrologue<T extends Statement>(to: T[], statement: T | undefined): T[];
    function isRecognizedTripleSlashComment(text: string, commentPos: number, commentEnd: number): boolean;
    function isPinnedComment(text: string, start: number): boolean;
    function createCommentDirectivesMap(sourceFile: SourceFile, commentDirectives: CommentDirective[]): CommentDirectivesMap;
    function getTokenPosOfNode(node: Node, sourceFile?: SourceFileLike, includeJsDoc?: boolean): number;
    function getNonDecoratorTokenPosOfNode(node: Node, sourceFile?: SourceFileLike): number;
    function getSourceTextOfNodeFromSourceFile(sourceFile: SourceFile, node: Node, includeTrivia?: boolean): string;
    function getTextOfNodeFromSourceText(sourceText: string, node: Node, includeTrivia?: boolean): string;
    function getTextOfNode(node: Node, includeTrivia?: boolean): string;
    function indexOfNode(nodeArray: readonly Node[], node: Node): number;
    function getEmitFlags(node: Node): EmitFlags;
    function getLiteralText(node: LiteralLikeNode, sourceFile: SourceFile, neverAsciiEscape: boolean | undefined, jsxAttributeEscape: boolean): string;
    function getTextOfConstantValue(value: string | number): string;
    function makeIdentifierFromModuleName(moduleName: string): string;
    function isBlockOrCatchScoped(declaration: Declaration): boolean;
    function isCatchClauseVariableDeclarationOrBindingElement(declaration: Declaration): boolean;
    function isAmbientModule(node: Node): node is AmbientModuleDeclaration;
    function isModuleWithStringLiteralName(node: Node): node is ModuleDeclaration;
    function isNonGlobalAmbientModule(node: Node): node is ModuleDeclaration & {
        name: StringLiteral;
    };
    function isEffectiveModuleDeclaration(node: Node): boolean;
    function isShorthandAmbientModuleSymbol(moduleSymbol: Symbol): boolean;
    function isBlockScopedContainerTopLevel(node: Node): boolean;
    function isGlobalScopeAugmentation(module: ModuleDeclaration): boolean;
    function isExternalModuleAugmentation(node: Node): node is AmbientModuleDeclaration;
    function isModuleAugmentationExternal(node: AmbientModuleDeclaration): boolean;
    function getNonAugmentationDeclaration(symbol: Symbol): Declaration | undefined;
    function isEffectiveExternalModule(node: SourceFile, compilerOptions: CompilerOptions): boolean;
    function isEffectiveStrictModeSourceFile(node: SourceFile, compilerOptions: CompilerOptions): boolean;
    function isBlockScope(node: Node, parentNode: Node): boolean;
    function isDeclarationWithTypeParameters(node: Node): node is DeclarationWithTypeParameters;
    function isDeclarationWithTypeParameterChildren(node: Node): node is DeclarationWithTypeParameterChildren;
    function isAnyImportSyntax(node: Node): node is AnyImportSyntax;
    function isLateVisibilityPaintedStatement(node: Node): node is LateVisibilityPaintedStatement;
    function isAnyImportOrReExport(node: Node): node is AnyImportOrReExport;
    function getEnclosingBlockScopeContainer(node: Node): Node;
    function declarationNameToString(name: DeclarationName | QualifiedName | undefined): string;
    function getNameFromIndexInfo(info: IndexInfo): string | undefined;
    function getTextOfPropertyName(name: PropertyName | NoSubstitutionTemplateLiteral): __String;
    function entityNameToString(name: EntityNameOrEntityNameExpression | JsxTagNameExpression | PrivateIdentifier): string;
    function createDiagnosticForNode(node: Node, message: DiagnosticMessage, arg0?: string | number, arg1?: string | number, arg2?: string | number, arg3?: string | number): DiagnosticWithLocation;
    function createDiagnosticForNodeArray(sourceFile: SourceFile, nodes: NodeArray<Node>, message: DiagnosticMessage, arg0?: string | number, arg1?: string | number, arg2?: string | number, arg3?: string | number): DiagnosticWithLocation;
    function createDiagnosticForNodeInSourceFile(sourceFile: SourceFile, node: Node, message: DiagnosticMessage, arg0?: string | number, arg1?: string | number, arg2?: string | number, arg3?: string | number): DiagnosticWithLocation;
    function createDiagnosticForNodeFromMessageChain(node: Node, messageChain: DiagnosticMessageChain, relatedInformation?: DiagnosticRelatedInformation[]): DiagnosticWithLocation;
    function createDiagnosticForRange(sourceFile: SourceFile, range: TextRange, message: DiagnosticMessage): DiagnosticWithLocation;
    function getSpanOfTokenAtPosition(sourceFile: SourceFile, pos: number): TextSpan;
    function getErrorSpanForNode(sourceFile: SourceFile, node: Node): TextSpan;
    function isExternalOrCommonJsModule(file: SourceFile): boolean;
    function isJsonSourceFile(file: SourceFile): file is JsonSourceFile;
    function isEnumConst(node: EnumDeclaration): boolean;
    function isDeclarationReadonly(declaration: Declaration): boolean;
    function isVarConst(node: VariableDeclaration | VariableDeclarationList): boolean;
    function isLet(node: Node): boolean;
    function isSuperCall(n: Node): n is SuperCall;
    function isImportCall(n: Node): n is ImportCall;
    function isImportMeta(n: Node): n is ImportMetaProperty;
    function isLiteralImportTypeNode(n: Node): n is LiteralImportTypeNode;
    function isPrologueDirective(node: Node): node is PrologueDirective;
    function getLeadingCommentRangesOfNode(node: Node, sourceFileOfNode: SourceFile): CommentRange[] | undefined;
    function getJSDocCommentRanges(node: Node, text: string): CommentRange[] | undefined;
    const fullTripleSlashReferencePathRegEx: RegExp;
    const fullTripleSlashAMDReferencePathRegEx: RegExp;
    function isPartOfTypeNode(node: Node): boolean;
    function isChildOfNodeWithKind(node: Node, kind: SyntaxKind): boolean;
    function forEachReturnStatement<T>(body: Block, visitor: (stmt: ReturnStatement) => T): T | undefined;
    function forEachYieldExpression(body: Block, visitor: (expr: YieldExpression) => void): void;
    function getRestParameterElementType(node: TypeNode | undefined): TypeNode | undefined;
    function getMembersOfDeclaration(node: Declaration): NodeArray<ClassElement | TypeElement | ObjectLiteralElement> | undefined;
    function isVariableLike(node: Node): node is VariableLikeDeclaration;
    function isVariableLikeOrAccessor(node: Node): node is AccessorDeclaration | VariableLikeDeclaration;
    function isVariableDeclarationInVariableStatement(node: VariableDeclaration): boolean;
    function isValidESSymbolDeclaration(node: Node): node is VariableDeclaration | PropertyDeclaration | SignatureDeclaration;
    function introducesArgumentsExoticObject(node: Node): boolean;
    function unwrapInnermostStatementOfLabel(node: LabeledStatement, beforeUnwrapLabelCallback?: (node: LabeledStatement) => void): Statement;
    function isFunctionBlock(node: Node): boolean;
    function isObjectLiteralMethod(node: Node): node is MethodDeclaration;
    function isObjectLiteralOrClassExpressionMethod(node: Node): node is MethodDeclaration;
    function isIdentifierTypePredicate(predicate: TypePredicate): predicate is IdentifierTypePredicate;
    function isThisTypePredicate(predicate: TypePredicate): predicate is ThisTypePredicate;
    function getPropertyAssignment(objectLiteral: ObjectLiteralExpression, key: string, key2?: string): readonly PropertyAssignment[];
    function getTsConfigObjectLiteralExpression(tsConfigSourceFile: TsConfigSourceFile | undefined): ObjectLiteralExpression | undefined;
    function getTsConfigPropArrayElementValue(tsConfigSourceFile: TsConfigSourceFile | undefined, propKey: string, elementValue: string): StringLiteral | undefined;
    function getTsConfigPropArray(tsConfigSourceFile: TsConfigSourceFile | undefined, propKey: string): readonly PropertyAssignment[];
    function getContainingFunction(node: Node): SignatureDeclaration | undefined;
    function getContainingFunctionDeclaration(node: Node): FunctionLikeDeclaration | undefined;
    function getContainingClass(node: Node): ClassLikeDeclaration | undefined;
    function getThisContainer(node: Node, includeArrowFunctions: boolean): Node;
    function getNewTargetContainer(node: Node): Node | undefined;
    function getSuperContainer(node: Node, stopOnFunctions: boolean): Node;
    function getImmediatelyInvokedFunctionExpression(func: Node): CallExpression | undefined;
    function isSuperOrSuperProperty(node: Node): node is SuperExpression | SuperProperty;
    function isSuperProperty(node: Node): node is SuperProperty;
    function isThisProperty(node: Node): boolean;
    function getEntityNameFromTypeNode(node: TypeNode): EntityNameOrEntityNameExpression | undefined;
    function getInvokedExpression(node: CallLikeExpression): Expression;
    function nodeCanBeDecorated(node: ClassDeclaration): true;
    function nodeCanBeDecorated(node: ClassElement, parent: Node): boolean;
    function nodeCanBeDecorated(node: Node, parent: Node, grandparent: Node): boolean;
    function nodeIsDecorated(node: ClassDeclaration): boolean;
    function nodeIsDecorated(node: ClassElement, parent: Node): boolean;
    function nodeIsDecorated(node: Node, parent: Node, grandparent: Node): boolean;
    function nodeOrChildIsDecorated(node: ClassDeclaration): boolean;
    function nodeOrChildIsDecorated(node: ClassElement, parent: Node): boolean;
    function nodeOrChildIsDecorated(node: Node, parent: Node, grandparent: Node): boolean;
    function childIsDecorated(node: ClassDeclaration): boolean;
    function childIsDecorated(node: Node, parent: Node): boolean;
    function isJSXTagName(node: Node): boolean;
    function isExpressionNode(node: Node): boolean;
    function isInExpressionContext(node: Node): boolean;
    function isPartOfTypeQuery(node: Node): boolean;
    function isExternalModuleImportEqualsDeclaration(node: Node): node is ImportEqualsDeclaration & {
        moduleReference: ExternalModuleReference;
    };
    function getExternalModuleImportEqualsDeclarationExpression(node: Node): Expression;
    function isInternalModuleImportEqualsDeclaration(node: Node): node is ImportEqualsDeclaration;
    function isSourceFileJS(file: SourceFile): boolean;
    function isSourceFileNotJS(file: SourceFile): boolean;
    function isInJSFile(node: Node | undefined): boolean;
    function isInJsonFile(node: Node | undefined): boolean;
    function isSourceFileNotJson(file: SourceFile): boolean;
    function isInJSDoc(node: Node | undefined): boolean;
    function isJSDocIndexSignature(node: TypeReferenceNode | ExpressionWithTypeArguments): boolean | undefined;
    function isRequireCall(callExpression: Node, requireStringLiteralLikeArgument: true): callExpression is RequireOrImportCall & {
        expression: Identifier;
        arguments: [StringLiteralLike];
    };
    function isRequireCall(callExpression: Node, requireStringLiteralLikeArgument: boolean): callExpression is CallExpression;
    function isRequireVariableDeclaration(node: Node, requireStringLiteralLikeArgument: true): node is RequireVariableDeclaration;
    function isRequireVariableDeclaration(node: Node, requireStringLiteralLikeArgument: boolean): node is VariableDeclaration;
    function isRequireVariableDeclarationStatement(node: Node, requireStringLiteralLikeArgument?: boolean): node is VariableStatement;
    function isSingleOrDoubleQuote(charCode: number): boolean;
    function isStringDoubleQuoted(str: StringLiteralLike, sourceFile: SourceFile): boolean;
    function getDeclarationOfExpando(node: Node): Node | undefined;
    function isAssignmentDeclaration(decl: Declaration): boolean;
    function getEffectiveInitializer(node: HasExpressionInitializer): Expression | undefined;
    function getDeclaredExpandoInitializer(node: HasExpressionInitializer): Expression | undefined;
    function getAssignedExpandoInitializer(node: Node | undefined): Expression | undefined;
    function getExpandoInitializer(initializer: Node, isPrototypeAssignment: boolean): Expression | undefined;
    function isDefaultedExpandoInitializer(node: BinaryExpression): boolean | undefined;
    function getNameOfExpando(node: Declaration): DeclarationName | undefined;
    function getRightMostAssignedExpression(node: Expression): Expression;
    function isExportsIdentifier(node: Node): boolean;
    function isModuleExportsAccessExpression(node: Node): node is LiteralLikeElementAccessExpression & {
        expression: Identifier;
    };
    function getAssignmentDeclarationKind(expr: BinaryExpression | CallExpression): AssignmentDeclarationKind;
    function isBindableObjectDefinePropertyCall(expr: CallExpression): expr is BindableObjectDefinePropertyCall;
    function isLiteralLikeAccess(node: Node): node is LiteralLikeElementAccessExpression | PropertyAccessExpression;
    function isLiteralLikeElementAccess(node: Node): node is LiteralLikeElementAccessExpression;
    function isBindableStaticAccessExpression(node: Node, excludeThisKeyword?: boolean): node is BindableStaticAccessExpression;
    function isBindableStaticElementAccessExpression(node: Node, excludeThisKeyword?: boolean): node is BindableStaticElementAccessExpression;
    function isBindableStaticNameExpression(node: Node, excludeThisKeyword?: boolean): node is BindableStaticNameExpression;
    function getNameOrArgument(expr: PropertyAccessExpression | LiteralLikeElementAccessExpression): Identifier | PrivateIdentifier | (Expression & StringLiteral) | (Expression & NumericLiteral) | (Expression & NoSubstitutionTemplateLiteral) | (Expression & WellKnownSymbolExpression);
    function getElementOrPropertyAccessArgumentExpressionOrName(node: AccessExpression): Identifier | PrivateIdentifier | StringLiteralLike | NumericLiteral | ElementAccessExpression | undefined;
    function getElementOrPropertyAccessName(node: LiteralLikeElementAccessExpression | PropertyAccessExpression): __String;
    function getElementOrPropertyAccessName(node: AccessExpression): __String | undefined;
    function getAssignmentDeclarationPropertyAccessKind(lhs: AccessExpression): AssignmentDeclarationKind;
    function getInitializerOfBinaryExpression(expr: BinaryExpression): Expression;
    function isPrototypePropertyAssignment(node: Node): boolean;
    function isSpecialPropertyDeclaration(expr: PropertyAccessExpression | ElementAccessExpression): expr is PropertyAccessExpression | LiteralLikeElementAccessExpression;
    function isFunctionSymbol(symbol: Symbol | undefined): boolean | undefined;
    function importFromModuleSpecifier(node: StringLiteralLike): AnyValidImportOrReExport;
    function tryGetImportFromModuleSpecifier(node: StringLiteralLike): AnyValidImportOrReExport | undefined;
    function getExternalModuleName(node: AnyImportOrReExport | ImportTypeNode): Expression | undefined;
    function getNamespaceDeclarationNode(node: ImportDeclaration | ImportEqualsDeclaration | ExportDeclaration): ImportEqualsDeclaration | NamespaceImport | NamespaceExport | undefined;
    function isDefaultImport(node: ImportDeclaration | ImportEqualsDeclaration | ExportDeclaration): boolean;
    function forEachImportClauseDeclaration<T>(node: ImportClause, action: (declaration: ImportClause | NamespaceImport | ImportSpecifier) => T | undefined): T | undefined;
    function hasQuestionToken(node: Node): boolean;
    function isJSDocConstructSignature(node: Node): boolean;
    function isJSDocTypeAlias(node: Node): node is JSDocTypedefTag | JSDocCallbackTag | JSDocEnumTag;
    function isTypeAlias(node: Node): node is JSDocTypedefTag | JSDocCallbackTag | JSDocEnumTag | TypeAliasDeclaration;
    function getSingleInitializerOfVariableStatementOrPropertyDeclaration(node: Node): Expression | undefined;
    function getJSDocCommentsAndTags(hostNode: Node): readonly (JSDoc | JSDocTag)[];
    function getParameterSymbolFromJSDoc(node: JSDocParameterTag): Symbol | undefined;
    function getHostSignatureFromJSDoc(node: Node): SignatureDeclaration | undefined;
    function getEffectiveJSDocHost(node: Node): Node | undefined;
    function getJSDocHost(node: Node): HasJSDoc;
    function getTypeParameterFromJsDoc(node: TypeParameterDeclaration & {
        parent: JSDocTemplateTag;
    }): TypeParameterDeclaration | undefined;
    function hasRestParameter(s: SignatureDeclaration | JSDocSignature): boolean;
    function isRestParameter(node: ParameterDeclaration | JSDocParameterTag): boolean;
    function hasTypeArguments(node: Node): node is HasTypeArguments;
    const enum AssignmentKind {
        None = 0,
        Definite = 1,
        Compound = 2
    }
    function getAssignmentTargetKind(node: Node): AssignmentKind;
    function isAssignmentTarget(node: Node): boolean;
    type NodeWithPossibleHoistedDeclaration = Block | VariableStatement | WithStatement | IfStatement | SwitchStatement | CaseBlock | CaseClause | DefaultClause | LabeledStatement | ForStatement | ForInStatement | ForOfStatement | DoStatement | WhileStatement | TryStatement | CatchClause;
    function isNodeWithPossibleHoistedDeclaration(node: Node): node is NodeWithPossibleHoistedDeclaration;
    type ValueSignatureDeclaration = FunctionDeclaration | MethodDeclaration | ConstructorDeclaration | AccessorDeclaration | FunctionExpression | ArrowFunction;
    function isValueSignatureDeclaration(node: Node): node is ValueSignatureDeclaration;
    function walkUpParenthesizedTypes(node: Node): Node;
    function walkUpParenthesizedExpressions(node: Node): Node;
    function skipParentheses(node: Expression): Expression;
    function skipParentheses(node: Node): Node;
    function isDeleteTarget(node: Node): boolean;
    function isNodeDescendantOf(node: Node, ancestor: Node | undefined): boolean;
    function isDeclarationName(name: Node): boolean;
    function getDeclarationFromName(name: Node): Declaration | undefined;
    function isLiteralComputedPropertyDeclarationName(node: Node): boolean;
    function isIdentifierName(node: Identifier): boolean;
    function isAliasSymbolDeclaration(node: Node): boolean;
    function getAliasDeclarationFromName(node: EntityName): Declaration | undefined;
    function isAliasableExpression(e: Expression): boolean;
    function exportAssignmentIsAlias(node: ExportAssignment | BinaryExpression): boolean;
    function getExportAssignmentExpression(node: ExportAssignment | BinaryExpression): Expression;
    function getPropertyAssignmentAliasLikeExpression(node: PropertyAssignment | ShorthandPropertyAssignment | PropertyAccessExpression): Expression;
    function getEffectiveBaseTypeNode(node: ClassLikeDeclaration | InterfaceDeclaration): ExpressionWithTypeArguments | undefined;
    function getClassExtendsHeritageElement(node: ClassLikeDeclaration | InterfaceDeclaration): ExpressionWithTypeArguments | undefined;
    function getEffectiveImplementsTypeNodes(node: ClassLikeDeclaration): undefined | readonly ExpressionWithTypeArguments[];
    function getAllSuperTypeNodes(node: Node): readonly TypeNode[];
    function getInterfaceBaseTypeNodes(node: InterfaceDeclaration): NodeArray<ExpressionWithTypeArguments> | undefined;
    function getHeritageClause(clauses: NodeArray<HeritageClause> | undefined, kind: SyntaxKind): HeritageClause | undefined;
    function getAncestor(node: Node | undefined, kind: SyntaxKind): Node | undefined;
    function isKeyword(token: SyntaxKind): boolean;
    function isContextualKeyword(token: SyntaxKind): boolean;
    function isNonContextualKeyword(token: SyntaxKind): boolean;
    function isFutureReservedKeyword(token: SyntaxKind): boolean;
    function isStringANonContextualKeyword(name: string): boolean;
    function isStringAKeyword(name: string): boolean;
    function isIdentifierANonContextualKeyword({ originalKeywordKind }: Identifier): boolean;
    type TriviaKind = SyntaxKind.SingleLineCommentTrivia | SyntaxKind.MultiLineCommentTrivia | SyntaxKind.NewLineTrivia | SyntaxKind.WhitespaceTrivia | SyntaxKind.ShebangTrivia | SyntaxKind.ConflictMarkerTrivia;
    function isTrivia(token: SyntaxKind): token is TriviaKind;
    const enum FunctionFlags {
        Normal = 0,
        Generator = 1,
        Async = 2,
        Invalid = 4,
        AsyncGenerator = 3
    }
    function getFunctionFlags(node: SignatureDeclaration | undefined): FunctionFlags;
    function isAsyncFunction(node: Node): boolean;
    function isStringOrNumericLiteralLike(node: Node): node is StringLiteralLike | NumericLiteral;
    function isSignedNumericLiteral(node: Node): node is PrefixUnaryExpression & {
        operand: NumericLiteral;
    };
    function hasDynamicName(declaration: Declaration): declaration is DynamicNamedDeclaration | DynamicNamedBinaryExpression;
    function isDynamicName(name: DeclarationName): boolean;
    function isWellKnownSymbolSyntactically(node: Node): node is WellKnownSymbolExpression;
    function getPropertyNameForPropertyNameNode(name: PropertyName): __String | undefined;
    type PropertyNameLiteral = Identifier | StringLiteralLike | NumericLiteral;
    function isPropertyNameLiteral(node: Node): node is PropertyNameLiteral;
    function getTextOfIdentifierOrLiteral(node: PropertyNameLiteral): string;
    function getEscapedTextOfIdentifierOrLiteral(node: PropertyNameLiteral): __String;
    function getPropertyNameForUniqueESSymbol(symbol: Symbol): __String;
    function getPropertyNameForKnownSymbolName(symbolName: string): __String;
    function getSymbolNameForPrivateIdentifier(containingClassSymbol: Symbol, description: __String): __String;
    function isKnownSymbol(symbol: Symbol): boolean;
    function isESSymbolIdentifier(node: Node): boolean;
    function isPushOrUnshiftIdentifier(node: Identifier): boolean;
    function isParameterDeclaration(node: VariableLikeDeclaration): boolean;
    function getRootDeclaration(node: Node): Node;
    function nodeStartsNewLexicalEnvironment(node: Node): boolean;
    function nodeIsSynthesized(range: TextRange): boolean;
    function getOriginalSourceFile(sourceFile: SourceFile): SourceFile;
    const enum Associativity {
        Left = 0,
        Right = 1
    }
    function getExpressionAssociativity(expression: Expression): Associativity;
    function getOperatorAssociativity(kind: SyntaxKind, operator: SyntaxKind, hasArguments?: boolean): Associativity;
    function getExpressionPrecedence(expression: Expression): number;
    function getOperator(expression: Expression): SyntaxKind;
    function getOperatorPrecedence(nodeKind: SyntaxKind, operatorKind: SyntaxKind, hasArguments?: boolean): number;
    function getBinaryOperatorPrecedence(kind: SyntaxKind): number;
    function createDiagnosticCollection(): DiagnosticCollection;
    function hasInvalidEscape(template: TemplateLiteral): boolean;
    function escapeString(s: string, quoteChar?: CharacterCodes.doubleQuote | CharacterCodes.singleQuote | CharacterCodes.backtick): string;
    function escapeNonAsciiString(s: string, quoteChar?: CharacterCodes.doubleQuote | CharacterCodes.singleQuote | CharacterCodes.backtick): string;
    function escapeJsxAttributeString(s: string, quoteChar?: CharacterCodes.doubleQuote | CharacterCodes.singleQuote): string;
    function stripQuotes(name: string): string;
    function isIntrinsicJsxName(name: __String | string): boolean;
    function getIndentString(level: number): string;
    function getIndentSize(): number;
    function createTextWriter(newLine: string): EmitTextWriter;
    function getTrailingSemicolonDeferringWriter(writer: EmitTextWriter): EmitTextWriter;
    interface ResolveModuleNameResolutionHost {
        getCanonicalFileName(p: string): string;
        getCommonSourceDirectory(): string;
        getCurrentDirectory(): string;
    }
    function getResolvedExternalModuleName(host: ResolveModuleNameResolutionHost, file: SourceFile, referenceFile?: SourceFile): string;
    function getExternalModuleNameFromDeclaration(host: ResolveModuleNameResolutionHost, resolver: EmitResolver, declaration: ImportEqualsDeclaration | ImportDeclaration | ExportDeclaration | ModuleDeclaration | ImportTypeNode): string | undefined;
    function getExternalModuleNameFromPath(host: ResolveModuleNameResolutionHost, fileName: string, referencePath?: string): string;
    function getOwnEmitOutputFilePath(fileName: string, host: EmitHost, extension: string): string;
    function getDeclarationEmitOutputFilePath(fileName: string, host: EmitHost): string;
    function getDeclarationEmitOutputFilePathWorker(fileName: string, options: CompilerOptions, currentDirectory: string, commonSourceDirectory: string, getCanonicalFileName: GetCanonicalFileName): string;
    interface EmitFileNames {
        jsFilePath?: string | undefined;
        sourceMapFilePath?: string | undefined;
        declarationFilePath?: string | undefined;
        declarationMapPath?: string | undefined;
        buildInfoPath?: string | undefined;
    }
    function getSourceFilesToEmit(host: EmitHost, targetSourceFile?: SourceFile, forceDtsEmit?: boolean): readonly SourceFile[];
    function sourceFileMayBeEmitted(sourceFile: SourceFile, host: SourceFileMayBeEmittedHost, forceDtsEmit?: boolean): boolean;
    function getSourceFilePathInNewDir(fileName: string, host: EmitHost, newDirPath: string): string;
    function getSourceFilePathInNewDirWorker(fileName: string, newDirPath: string, currentDirectory: string, commonSourceDirectory: string, getCanonicalFileName: GetCanonicalFileName): string;
    function writeFile(host: {
        writeFile: WriteFileCallback;
    }, diagnostics: DiagnosticCollection, fileName: string, data: string, writeByteOrderMark: boolean, sourceFiles?: readonly SourceFile[]): void;
    function writeFileEnsuringDirectories(path: string, data: string, writeByteOrderMark: boolean, writeFile: (path: string, data: string, writeByteOrderMark: boolean) => void, createDirectory: (path: string) => void, directoryExists: (path: string) => boolean): void;
    function getLineOfLocalPosition(currentSourceFile: SourceFile, pos: number): number;
    function getLineOfLocalPositionFromLineMap(lineMap: readonly number[], pos: number): number;
    function getFirstConstructorWithBody(node: ClassLikeDeclaration): ConstructorDeclaration & {
        body: FunctionBody;
    } | undefined;
    function getSetAccessorValueParameter(accessor: SetAccessorDeclaration): ParameterDeclaration | undefined;
    function getSetAccessorTypeAnnotationNode(accessor: SetAccessorDeclaration): TypeNode | undefined;
    function getThisParameter(signature: SignatureDeclaration | JSDocSignature): ParameterDeclaration | undefined;
    function parameterIsThisKeyword(parameter: ParameterDeclaration): boolean;
    function isThisIdentifier(node: Node | undefined): boolean;
    function identifierIsThisKeyword(id: Identifier): boolean;
    function getAllAccessorDeclarations(declarations: readonly Declaration[], accessor: AccessorDeclaration): AllAccessorDeclarations;
    function getEffectiveTypeAnnotationNode(node: Node): TypeNode | undefined;
    function getTypeAnnotationNode(node: Node): TypeNode | undefined;
    function getEffectiveReturnTypeNode(node: SignatureDeclaration | JSDocSignature): TypeNode | undefined;
    function getJSDocTypeParameterDeclarations(node: DeclarationWithTypeParameters): readonly TypeParameterDeclaration[];
    function getEffectiveSetAccessorTypeAnnotationNode(node: SetAccessorDeclaration): TypeNode | undefined;
    function emitNewLineBeforeLeadingComments(lineMap: readonly number[], writer: EmitTextWriter, node: TextRange, leadingComments: readonly CommentRange[] | undefined): void;
    function emitNewLineBeforeLeadingCommentsOfPosition(lineMap: readonly number[], writer: EmitTextWriter, pos: number, leadingComments: readonly CommentRange[] | undefined): void;
    function emitNewLineBeforeLeadingCommentOfPosition(lineMap: readonly number[], writer: EmitTextWriter, pos: number, commentPos: number): void;
    function emitComments(text: string, lineMap: readonly number[], writer: EmitTextWriter, comments: readonly CommentRange[] | undefined, leadingSeparator: boolean, trailingSeparator: boolean, newLine: string, writeComment: (text: string, lineMap: readonly number[], writer: EmitTextWriter, commentPos: number, commentEnd: number, newLine: string) => void): void;
    function emitDetachedComments(text: string, lineMap: readonly number[], writer: EmitTextWriter, writeComment: (text: string, lineMap: readonly number[], writer: EmitTextWriter, commentPos: number, commentEnd: number, newLine: string) => void, node: TextRange, newLine: string, removeComments: boolean): {
        nodePos: number;
        detachedCommentEndPos: number;
    } | undefined;
    function writeCommentRange(text: string, lineMap: readonly number[], writer: EmitTextWriter, commentPos: number, commentEnd: number, newLine: string): void;
    function hasModifiers(node: Node): boolean;
    function hasModifier(node: Node, flags: ModifierFlags): boolean;
    function hasStaticModifier(node: Node): boolean;
    function hasReadonlyModifier(node: Node): boolean;
    function getSelectedModifierFlags(node: Node, flags: ModifierFlags): ModifierFlags;
    function getModifierFlags(node: Node): ModifierFlags;
    function getModifierFlagsNoCache(node: Node): ModifierFlags;
    function modifierToFlag(token: SyntaxKind): ModifierFlags;
    function isLogicalOperator(token: SyntaxKind): boolean;
    function isAssignmentOperator(token: SyntaxKind): boolean;
    function tryGetClassExtendingExpressionWithTypeArguments(node: Node): ClassLikeDeclaration | undefined;
    interface ClassImplementingOrExtendingExpressionWithTypeArguments {
        readonly class: ClassLikeDeclaration;
        readonly isImplements: boolean;
    }
    function tryGetClassImplementingOrExtendingExpressionWithTypeArguments(node: Node): ClassImplementingOrExtendingExpressionWithTypeArguments | undefined;
    function isAssignmentExpression(node: Node, excludeCompoundAssignment: true): node is AssignmentExpression<EqualsToken>;
    function isAssignmentExpression(node: Node, excludeCompoundAssignment?: false): node is AssignmentExpression<AssignmentOperatorToken>;
    function isDestructuringAssignment(node: Node): node is DestructuringAssignment;
    function isExpressionWithTypeArgumentsInClassExtendsClause(node: Node): node is ExpressionWithTypeArguments;
    function isEntityNameExpression(node: Node): node is EntityNameExpression;
    function getFirstIdentifier(node: EntityNameOrEntityNameExpression): Identifier;
    function isDottedName(node: Expression): boolean;
    function isPropertyAccessEntityNameExpression(node: Node): node is PropertyAccessEntityNameExpression;
    function tryGetPropertyAccessOrIdentifierToString(expr: Expression): string | undefined;
    function isPrototypeAccess(node: Node): node is BindableStaticAccessExpression;
    function isRightSideOfQualifiedNameOrPropertyAccess(node: Node): boolean;
    function isEmptyObjectLiteral(expression: Node): boolean;
    function isEmptyArrayLiteral(expression: Node): boolean;
    function getLocalSymbolForExportDefault(symbol: Symbol): Symbol | undefined;
    function tryExtractTSExtension(fileName: string): string | undefined;
    function convertToBase64(input: string): string;
    function base64encode(host: {
        base64encode?(input: string): string;
    } | undefined, input: string): string;
    function base64decode(host: {
        base64decode?(input: string): string;
    } | undefined, input: string): string;
    function readJson(path: string, host: {
        readFile(fileName: string): string | undefined;
    }): object;
    function directoryProbablyExists(directoryName: string, host: {
        directoryExists?: (directoryName: string) => boolean;
    }): boolean;
    function getNewLineCharacter(options: CompilerOptions | PrinterOptions, getNewLine?: () => string): string;
    function createRange(pos: number, end?: number): TextRange;
    function moveRangeEnd(range: TextRange, end: number): TextRange;
    function moveRangePos(range: TextRange, pos: number): TextRange;
    function moveRangePastDecorators(node: Node): TextRange;
    function moveRangePastModifiers(node: Node): TextRange;
    function isCollapsedRange(range: TextRange): boolean;
    function createTokenRange(pos: number, token: SyntaxKind): TextRange;
    function rangeIsOnSingleLine(range: TextRange, sourceFile: SourceFile): boolean;
    function rangeStartPositionsAreOnSameLine(range1: TextRange, range2: TextRange, sourceFile: SourceFile): boolean;
    function rangeEndPositionsAreOnSameLine(range1: TextRange, range2: TextRange, sourceFile: SourceFile): boolean;
    function rangeStartIsOnSameLineAsRangeEnd(range1: TextRange, range2: TextRange, sourceFile: SourceFile): boolean;
    function rangeEndIsOnSameLineAsRangeStart(range1: TextRange, range2: TextRange, sourceFile: SourceFile): boolean;
    function isNodeArrayMultiLine(list: NodeArray<Node>, sourceFile: SourceFile): boolean;
    function positionsAreOnSameLine(pos1: number, pos2: number, sourceFile: SourceFile): boolean;
    function getStartPositionOfRange(range: TextRange, sourceFile: SourceFile): number;
    function isDeclarationNameOfEnumOrNamespace(node: Identifier): boolean;
    function getInitializedVariables(node: VariableDeclarationList): readonly VariableDeclaration[];
    function isWatchSet(options: CompilerOptions): boolean | undefined;
    function closeFileWatcher(watcher: FileWatcher): void;
    function getCheckFlags(symbol: Symbol): CheckFlags;
    function getDeclarationModifierFlagsFromSymbol(s: Symbol): ModifierFlags;
    function skipAlias(symbol: Symbol, checker: TypeChecker): Symbol;
    function getCombinedLocalAndExportSymbolFlags(symbol: Symbol): SymbolFlags;
    function isWriteOnlyAccess(node: Node): boolean;
    function isWriteAccess(node: Node): boolean;
    function compareDataObjects(dst: any, src: any): boolean;
    function clearMap<T>(map: {
        forEach: Map<T>["forEach"];
        clear: Map<T>["clear"];
    }, onDeleteValue: (valueInMap: T, key: string) => void): void;
    interface MutateMapSkippingNewValuesOptions<T, U> {
        onDeleteValue(existingValue: T, key: string): void;
        onExistingValue?(existingValue: T, valueInNewMap: U, key: string): void;
    }
    function mutateMapSkippingNewValues<T, U>(map: Map<T>, newMap: ReadonlyMap<U>, options: MutateMapSkippingNewValuesOptions<T, U>): void;
    interface MutateMapOptions<T, U> extends MutateMapSkippingNewValuesOptions<T, U> {
        createNewValue(key: string, valueInNewMap: U): T;
    }
    function mutateMap<T, U>(map: Map<T>, newMap: ReadonlyMap<U>, options: MutateMapOptions<T, U>): void;
    function isAbstractConstructorType(type: Type): boolean;
    function isAbstractConstructorSymbol(symbol: Symbol): boolean;
    function getClassLikeDeclarationOfSymbol(symbol: Symbol): ClassLikeDeclaration | undefined;
    function getObjectFlags(type: Type): ObjectFlags;
    function typeHasCallOrConstructSignatures(type: Type, checker: TypeChecker): boolean;
    function forSomeAncestorDirectory(directory: string, callback: (directory: string) => boolean): boolean;
    function isUMDExportSymbol(symbol: Symbol | undefined): boolean;
    function showModuleSpecifier({ moduleSpecifier }: ImportDeclaration): string;
    function getLastChild(node: Node): Node | undefined;
    function addToSeen(seen: Map<true>, key: string | number): boolean;
    function addToSeen<T>(seen: Map<T>, key: string | number, value: T): boolean;
    function isObjectTypeDeclaration(node: Node): node is ObjectTypeDeclaration;
    function isTypeNodeKind(kind: SyntaxKind): boolean;
    function isAccessExpression(node: Node): node is AccessExpression;
    function getNameOfAccessExpression(node: AccessExpression): Expression | PrivateIdentifier;
    function isBundleFileTextLike(section: BundleFileSection): section is BundleFileTextLike;
    function isNamedImportsOrExports(node: Node): node is NamedImportsOrExports;
    interface ObjectAllocator {
        getNodeConstructor(): new (kind: SyntaxKind, pos?: number, end?: number) => Node;
        getTokenConstructor(): new <TKind extends SyntaxKind>(kind: TKind, pos?: number, end?: number) => Token<TKind>;
        getIdentifierConstructor(): new (kind: SyntaxKind.Identifier, pos?: number, end?: number) => Identifier;
        getPrivateIdentifierConstructor(): new (kind: SyntaxKind.PrivateIdentifier, pos?: number, end?: number) => PrivateIdentifier;
        getSourceFileConstructor(): new (kind: SyntaxKind.SourceFile, pos?: number, end?: number) => SourceFile;
        getSymbolConstructor(): new (flags: SymbolFlags, name: __String) => Symbol;
        getTypeConstructor(): new (checker: TypeChecker, flags: TypeFlags) => Type;
        getSignatureConstructor(): new (checker: TypeChecker, flags: SignatureFlags) => Signature;
        getSourceMapSourceConstructor(): new (fileName: string, text: string, skipTrivia?: (pos: number) => number) => SourceMapSource;
    }
    let objectAllocator: ObjectAllocator;
    function setObjectAllocator(alloc: ObjectAllocator): void;
    function formatStringFromArgs(text: string, args: ArrayLike<string | number>, baseIndex?: number): string;
    let localizedDiagnosticMessages: MapLike<string> | undefined;
    function setLocalizedDiagnosticMessages(messages: typeof localizedDiagnosticMessages): void;
    function getLocaleSpecificMessage(message: DiagnosticMessage): string;
    function createFileDiagnostic(file: SourceFile, start: number, length: number, message: DiagnosticMessage, ...args: (string | number | undefined)[]): DiagnosticWithLocation;
    function formatMessage(_dummy: any, message: DiagnosticMessage, ...args: (string | number | undefined)[]): string;
    function createCompilerDiagnostic(message: DiagnosticMessage, ...args: (string | number | undefined)[]): Diagnostic;
    function createCompilerDiagnosticFromMessageChain(chain: DiagnosticMessageChain): Diagnostic;
    function chainDiagnosticMessages(details: DiagnosticMessageChain | DiagnosticMessageChain[] | undefined, message: DiagnosticMessage, ...args: (string | number | undefined)[]): DiagnosticMessageChain;
    function concatenateDiagnosticMessageChains(headChain: DiagnosticMessageChain, tailChain: DiagnosticMessageChain): void;
    function compareDiagnostics(d1: Diagnostic, d2: Diagnostic): Comparison;
    function compareDiagnosticsSkipRelatedInformation(d1: Diagnostic, d2: Diagnostic): Comparison;
    function getEmitScriptTarget(compilerOptions: CompilerOptions): ScriptTarget;
    function getEmitModuleKind(compilerOptions: {
        module?: CompilerOptions["module"];
        target?: CompilerOptions["target"];
    }): ModuleKind.None | ModuleKind.CommonJS | ModuleKind;
    function getEmitModuleResolutionKind(compilerOptions: CompilerOptions): ModuleResolutionKind;
    function hasJsonModuleEmitEnabled(options: CompilerOptions): boolean;
    function unreachableCodeIsError(options: CompilerOptions): boolean;
    function unusedLabelIsError(options: CompilerOptions): boolean;
    function getAreDeclarationMapsEnabled(options: CompilerOptions): boolean;
    function getAllowSyntheticDefaultImports(compilerOptions: CompilerOptions): boolean;
    function getEmitDeclarations(compilerOptions: CompilerOptions): boolean;
    function isIncrementalCompilation(options: CompilerOptions): boolean;
    type StrictOptionName = "noImplicitAny" | "noImplicitThis" | "strictNullChecks" | "strictFunctionTypes" | "strictBindCallApply" | "strictPropertyInitialization" | "alwaysStrict";
    function getStrictOptionValue(compilerOptions: CompilerOptions, flag: StrictOptionName): boolean;
    function compilerOptionsAffectSemanticDiagnostics(newOptions: CompilerOptions, oldOptions: CompilerOptions): boolean;
    function compilerOptionsAffectEmit(newOptions: CompilerOptions, oldOptions: CompilerOptions): boolean;
    function getCompilerOptionValue(options: CompilerOptions, option: CommandLineOption): unknown;
    function hasZeroOrOneAsteriskCharacter(str: string): boolean;
    function discoverProbableSymlinks(files: readonly SourceFile[], getCanonicalFileName: GetCanonicalFileName, cwd: string): ReadonlyMap<string>;
    function tryRemoveDirectoryPrefix(path: string, dirPath: string, getCanonicalFileName: GetCanonicalFileName): string | undefined;
    function regExpEscape(text: string): string;
    const commonPackageFolders: readonly string[];
    function getRegularExpressionForWildcard(specs: readonly string[] | undefined, basePath: string, usage: "files" | "directories" | "exclude"): string | undefined;
    function getRegularExpressionsForWildcards(specs: readonly string[] | undefined, basePath: string, usage: "files" | "directories" | "exclude"): readonly string[] | undefined;
    function isImplicitGlob(lastPathComponent: string): boolean;
    interface FileSystemEntries {
        readonly files: readonly string[];
        readonly directories: readonly string[];
    }
    interface FileMatcherPatterns {
        includeFilePatterns: readonly string[] | undefined;
        includeFilePattern: string | undefined;
        includeDirectoryPattern: string | undefined;
        excludePattern: string | undefined;
        basePaths: readonly string[];
    }
    function getFileMatcherPatterns(path: string, excludes: readonly string[] | undefined, includes: readonly string[] | undefined, useCaseSensitiveFileNames: boolean, currentDirectory: string): FileMatcherPatterns;
    function getRegexFromPattern(pattern: string, useCaseSensitiveFileNames: boolean): RegExp;
    function matchFiles(path: string, extensions: readonly string[] | undefined, excludes: readonly string[] | undefined, includes: readonly string[] | undefined, useCaseSensitiveFileNames: boolean, currentDirectory: string, depth: number | undefined, getFileSystemEntries: (path: string) => FileSystemEntries, realpath: (path: string) => string): string[];
    function ensureScriptKind(fileName: string, scriptKind: ScriptKind | undefined): ScriptKind;
    function getScriptKindFromFileName(fileName: string): ScriptKind;
    const supportedTSExtensions: readonly Extension[];
    const supportedTSExtensionsWithJson: readonly Extension[];
    const supportedTSExtensionsForExtractExtension: readonly Extension[];
    const supportedJSExtensions: readonly Extension[];
    const supportedJSAndJsonExtensions: readonly Extension[];
    function getSupportedExtensions(options?: CompilerOptions): readonly Extension[];
    function getSupportedExtensions(options?: CompilerOptions, extraFileExtensions?: readonly FileExtensionInfo[]): readonly string[];
    function getSuppoertedExtensionsWithJsonIfResolveJsonModule(options: CompilerOptions | undefined, supportedExtensions: readonly string[]): readonly string[];
    function hasJSFileExtension(fileName: string): boolean;
    function hasTSFileExtension(fileName: string): boolean;
    function isSupportedSourceFileName(fileName: string, compilerOptions?: CompilerOptions, extraFileExtensions?: readonly FileExtensionInfo[]): boolean;
    const enum ExtensionPriority {
        TypeScriptFiles = 0,
        DeclarationAndJavaScriptFiles = 2,
        Highest = 0,
        Lowest = 2
    }
    function getExtensionPriority(path: string, supportedExtensions: readonly string[]): ExtensionPriority;
    function adjustExtensionPriority(extensionPriority: ExtensionPriority, supportedExtensions: readonly string[]): ExtensionPriority;
    function getNextLowestExtensionPriority(extensionPriority: ExtensionPriority, supportedExtensions: readonly string[]): ExtensionPriority;
    function removeFileExtension(path: string): string;
    function tryRemoveExtension(path: string, extension: string): string | undefined;
    function removeExtension(path: string, extension: string): string;
    function changeExtension<T extends string | Path>(path: T, newExtension: string): T;
    function tryParsePattern(pattern: string): Pattern | undefined;
    function positionIsSynthesized(pos: number): boolean;
    function extensionIsTS(ext: Extension): boolean;
    function resolutionExtensionIsTSOrJson(ext: Extension): boolean;
    function extensionFromPath(path: string): Extension;
    function isAnySupportedFileExtension(path: string): boolean;
    function tryGetExtensionFromPath(path: string): Extension | undefined;
    function isCheckJsEnabledForFile(sourceFile: SourceFile, compilerOptions: CompilerOptions): boolean | undefined;
    const emptyFileSystemEntries: FileSystemEntries;
    function matchPatternOrExact(patternStrings: readonly string[], candidate: string): string | Pattern | undefined;
    type Mutable<T extends object> = {
        -readonly [K in keyof T]: T[K];
    };
    function sliceAfter<T>(arr: readonly T[], value: T): readonly T[];
    function addRelatedInfo<T extends Diagnostic>(diagnostic: T, ...relatedInformation: DiagnosticRelatedInformation[]): T;
    function minAndMax<T>(arr: readonly T[], getValue: (value: T) => number): {
        readonly min: number;
        readonly max: number;
    };
    interface ReadonlyNodeSet<TNode extends Node> {
        has(node: TNode): boolean;
        forEach(cb: (node: TNode) => void): void;
        some(pred: (node: TNode) => boolean): boolean;
    }
    class NodeSet<TNode extends Node> implements ReadonlyNodeSet<TNode> {
        private map;
        add(node: TNode): void;
        tryAdd(node: TNode): boolean;
        has(node: TNode): boolean;
        forEach(cb: (node: TNode) => void): void;
        some(pred: (node: TNode) => boolean): boolean;
    }
    interface ReadonlyNodeMap<TNode extends Node, TValue> {
        get(node: TNode): TValue | undefined;
        has(node: TNode): boolean;
    }
    class NodeMap<TNode extends Node, TValue> implements ReadonlyNodeMap<TNode, TValue> {
        private map;
        get(node: TNode): TValue | undefined;
        getOrUpdate(node: TNode, setValue: () => TValue): TValue;
        set(node: TNode, value: TValue): void;
        has(node: TNode): boolean;
        forEach(cb: (value: TValue, node: TNode) => void): void;
    }
    function rangeOfNode(node: Node): TextRange;
    function rangeOfTypeParameters(typeParameters: NodeArray<TypeParameterDeclaration>): TextRange;
    interface HostWithIsSourceOfProjectReferenceRedirect {
        isSourceOfProjectReferenceRedirect(fileName: string): boolean;
    }
    function skipTypeChecking(sourceFile: SourceFile, options: CompilerOptions, host: HostWithIsSourceOfProjectReferenceRedirect): boolean;
    function isJsonEqual(a: unknown, b: unknown): boolean;
    function getOrUpdate<T>(map: Map<T>, key: string, getDefault: () => T): T;
    function parsePseudoBigInt(stringValue: string): string;
    function pseudoBigIntToString({ negative, base10Value }: PseudoBigInt): string;
    function isValidTypeOnlyAliasUseSite(useSite: Node): boolean;
    function typeOnlyDeclarationIsExport(typeOnlyDeclaration: Node): boolean;
}
declare namespace ts {
    export function createNode(kind: SyntaxKind, pos?: number, end?: number): Node;
    export function isJSDocLikeText(text: string, start: number): boolean;
    export function forEachChild<T>(node: Node, cbNode: (node: Node) => T | undefined, cbNodes?: (nodes: NodeArray<Node>) => T | undefined): T | undefined;
    export function forEachChildRecursively<T>(rootNode: Node, cbNode: (node: Node, parent: Node) => T | "skip" | undefined, cbNodes?: (nodes: NodeArray<Node>, parent: Node) => T | "skip" | undefined): T | undefined;
    export function createSourceFile(fileName: string, sourceText: string, languageVersion: ScriptTarget, setParentNodes?: boolean, scriptKind?: ScriptKind): SourceFile;
    export function parseIsolatedEntityName(text: string, languageVersion: ScriptTarget): EntityName | undefined;
    export function parseJsonText(fileName: string, sourceText: string): JsonSourceFile;
    export function isExternalModule(file: SourceFile): boolean;
    export function updateSourceFile(sourceFile: SourceFile, newText: string, textChangeRange: TextChangeRange, aggressiveChecks?: boolean): SourceFile;
    export function parseIsolatedJSDocComment(content: string, start?: number, length?: number): {
        jsDoc: JSDoc;
        diagnostics: Diagnostic[];
    } | undefined;
    export function parseJSDocTypeExpressionForTests(content: string, start?: number, length?: number): {
        jsDocTypeExpression: JSDocTypeExpression;
        diagnostics: Diagnostic[];
    } | undefined;
    export function isDeclarationFileName(fileName: string): boolean;
    export interface PragmaContext {
        languageVersion: ScriptTarget;
        pragmas?: PragmaMap;
        checkJsDirective?: CheckJsDirective;
        referencedFiles: FileReference[];
        typeReferenceDirectives: FileReference[];
        libReferenceDirectives: FileReference[];
        amdDependencies: AmdDependency[];
        hasNoDefaultLib?: boolean;
        moduleName?: string;
    }
    export function processCommentPragmas(context: PragmaContext, sourceText: string): void;
    type PragmaDiagnosticReporter = (pos: number, length: number, message: DiagnosticMessage) => void;
    export function processPragmasIntoFields(context: PragmaContext, reportDiagnostic: PragmaDiagnosticReporter): void;
    export function tagNamesAreEquivalent(lhs: JsxTagNameExpression, rhs: JsxTagNameExpression): boolean;
    export {};
}
declare namespace ts {
    export const compileOnSaveCommandLineOption: CommandLineOption;
    export const libs: string[];
    export const libMap: Map<string>;
    export const optionsForWatch: CommandLineOption[];
    export const commonOptionsWithBuild: CommandLineOption[];
    export const optionDeclarations: CommandLineOption[];
    export const semanticDiagnosticsOptionDeclarations: readonly CommandLineOption[];
    export const affectsEmitOptionDeclarations: readonly CommandLineOption[];
    export const moduleResolutionOptionDeclarations: readonly CommandLineOption[];
    export const sourceFileAffectingCompilerOptions: readonly CommandLineOption[];
    export const transpileOptionValueCompilerOptions: readonly CommandLineOption[];
    export const buildOpts: CommandLineOption[];
    export const typeAcquisitionDeclarations: CommandLineOption[];
    export interface OptionsNameMap {
        optionsNameMap: Map<CommandLineOption>;
        shortOptionNames: Map<string>;
    }
    export function createOptionNameMap(optionDeclarations: readonly CommandLineOption[]): OptionsNameMap;
    export function getOptionsNameMap(): OptionsNameMap;
    export const defaultInitCompilerOptions: CompilerOptions;
    export function convertEnableAutoDiscoveryToEnable(typeAcquisition: TypeAcquisition): TypeAcquisition;
    export function createCompilerDiagnosticForInvalidCustomType(opt: CommandLineOptionOfCustomType): Diagnostic;
    export function parseCustomTypeOption(opt: CommandLineOptionOfCustomType, value: string, errors: Push<Diagnostic>): string | number | undefined;
    export function parseListTypeOption(opt: CommandLineOptionOfListType, value: string | undefined, errors: Push<Diagnostic>): (string | number)[] | undefined;
    export interface OptionsBase {
        [option: string]: CompilerOptionsValue | TsConfigSourceFile | undefined;
    }
    export interface ParseCommandLineWorkerDiagnostics extends DidYouMeanOptionsDiagnostics {
        getOptionsNameMap: () => OptionsNameMap;
        optionTypeMismatchDiagnostic: DiagnosticMessage;
    }
    export function parseCommandLineWorker(diagnostics: ParseCommandLineWorkerDiagnostics, commandLine: readonly string[], readFile?: (path: string) => string | undefined): {
        options: OptionsBase;
        watchOptions: WatchOptions | undefined;
        fileNames: string[];
        errors: Diagnostic[];
    };
    export const compilerOptionsDidYouMeanDiagnostics: ParseCommandLineWorkerDiagnostics;
    export function parseCommandLine(commandLine: readonly string[], readFile?: (path: string) => string | undefined): ParsedCommandLine;
    export function getOptionFromName(optionName: string, allowShort?: boolean): CommandLineOption | undefined;
    export interface ParsedBuildCommand {
        buildOptions: BuildOptions;
        watchOptions: WatchOptions | undefined;
        projects: string[];
        errors: Diagnostic[];
    }
    export function parseBuildCommand(args: readonly string[]): ParsedBuildCommand;
    export function getDiagnosticText(_message: DiagnosticMessage, ..._args: any[]): string;
    export type DiagnosticReporter = (diagnostic: Diagnostic) => void;
    export interface ConfigFileDiagnosticsReporter {
        onUnRecoverableConfigFileDiagnostic: DiagnosticReporter;
    }
    export interface ParseConfigFileHost extends ParseConfigHost, ConfigFileDiagnosticsReporter {
        getCurrentDirectory(): string;
    }
    export function getParsedCommandLineOfConfigFile(configFileName: string, optionsToExtend: CompilerOptions, host: ParseConfigFileHost, extendedConfigCache?: Map<ExtendedConfigCacheEntry>, watchOptionsToExtend?: WatchOptions): ParsedCommandLine | undefined;
    export function readConfigFile(fileName: string, readFile: (path: string) => string | undefined): {
        config?: any;
        error?: Diagnostic;
    };
    export function parseConfigFileTextToJson(fileName: string, jsonText: string): {
        config?: any;
        error?: Diagnostic;
    };
    export function readJsonConfigFile(fileName: string, readFile: (path: string) => string | undefined): TsConfigSourceFile;
    interface JsonConversionNotifier {
        onSetValidOptionKeyValueInParent(parentOption: string, option: CommandLineOption, value: CompilerOptionsValue): void;
        onSetValidOptionKeyValueInRoot(key: string, keyNode: PropertyName, value: CompilerOptionsValue, valueNode: Expression): void;
        onSetUnknownOptionKeyValueInRoot(key: string, keyNode: PropertyName, value: CompilerOptionsValue, valueNode: Expression): void;
    }
    export function convertToObject(sourceFile: JsonSourceFile, errors: Push<Diagnostic>): any;
    export function convertToObjectWorker(sourceFile: JsonSourceFile, errors: Push<Diagnostic>, returnValue: boolean, knownRootOptions: CommandLineOption | undefined, jsonConversionNotifier: JsonConversionNotifier | undefined): any;
    export interface TSConfig {
        compilerOptions: CompilerOptions;
        compileOnSave: boolean | undefined;
        exclude?: readonly string[];
        files: readonly string[] | undefined;
        include?: readonly string[];
        references: readonly ProjectReference[] | undefined;
    }
    export interface ConvertToTSConfigHost {
        getCurrentDirectory(): string;
        useCaseSensitiveFileNames: boolean;
    }
    export function convertToTSConfig(configParseResult: ParsedCommandLine, configFileName: string, host: ConvertToTSConfigHost): TSConfig;
    export function generateTSConfig(options: CompilerOptions, fileNames: readonly string[], newLine: string): string;
    export function convertToOptionsWithAbsolutePaths(options: CompilerOptions, toAbsolutePath: (path: string) => string): CompilerOptions;
    export function parseJsonConfigFileContent(json: any, host: ParseConfigHost, basePath: string, existingOptions?: CompilerOptions, configFileName?: string, resolutionStack?: Path[], extraFileExtensions?: readonly FileExtensionInfo[], extendedConfigCache?: Map<ExtendedConfigCacheEntry>, existingWatchOptions?: WatchOptions): ParsedCommandLine;
    export function parseJsonSourceFileConfigFileContent(sourceFile: TsConfigSourceFile, host: ParseConfigHost, basePath: string, existingOptions?: CompilerOptions, configFileName?: string, resolutionStack?: Path[], extraFileExtensions?: readonly FileExtensionInfo[], extendedConfigCache?: Map<ExtendedConfigCacheEntry>, existingWatchOptions?: WatchOptions): ParsedCommandLine;
    export function setConfigFileInOptions(options: CompilerOptions, configFile: TsConfigSourceFile | undefined): void;
    export function canJsonReportNoInutFiles(raw: any): boolean;
    export function updateErrorForNoInputFiles(result: ExpandResult, configFileName: string, configFileSpecs: ConfigFileSpecs, configParseDiagnostics: Diagnostic[], canJsonReportNoInutFiles: boolean): boolean;
    export interface ParsedTsconfig {
        raw: any;
        options?: CompilerOptions;
        watchOptions?: WatchOptions;
        typeAcquisition?: TypeAcquisition;
        extendedConfigPath?: string;
    }
    export interface ExtendedConfigCacheEntry {
        extendedResult: TsConfigSourceFile;
        extendedConfig: ParsedTsconfig | undefined;
    }
    export function convertCompilerOptionsFromJson(jsonOptions: any, basePath: string, configFileName?: string): {
        options: CompilerOptions;
        errors: Diagnostic[];
    };
    export function convertTypeAcquisitionFromJson(jsonOptions: any, basePath: string, configFileName?: string): {
        options: TypeAcquisition;
        errors: Diagnostic[];
    };
    export function getFileNamesFromConfigSpecs(spec: ConfigFileSpecs, basePath: string, options: CompilerOptions, host: ParseConfigHost, extraFileExtensions?: readonly FileExtensionInfo[]): ExpandResult;
    export function convertCompilerOptionsForTelemetry(opts: CompilerOptions): CompilerOptions;
    export {};
}
declare namespace ts {
    function trace(host: ModuleResolutionHost, message: DiagnosticMessage, ...args: any[]): void;
    function isTraceEnabled(compilerOptions: CompilerOptions, host: ModuleResolutionHost): boolean;
    function getPackageJsonTypesVersionsPaths(typesVersions: MapLike<MapLike<string[]>>): {
        version: string;
        paths: MapLike<string[]>;
    } | undefined;
    function getEffectiveTypeRoots(options: CompilerOptions, host: GetEffectiveTypeRootsHost): string[] | undefined;
    function resolveTypeReferenceDirective(typeReferenceDirectiveName: string, containingFile: string | undefined, options: CompilerOptions, host: ModuleResolutionHost, redirectedReference?: ResolvedProjectReference): ResolvedTypeReferenceDirectiveWithFailedLookupLocations;
    function getAutomaticTypeDirectiveNames(options: CompilerOptions, host: ModuleResolutionHost): string[];
    interface ModuleResolutionCache extends NonRelativeModuleNameResolutionCache {
        getOrCreateCacheForDirectory(directoryName: string, redirectedReference?: ResolvedProjectReference): Map<ResolvedModuleWithFailedLookupLocations>;
        directoryToModuleNameMap: CacheWithRedirects<Map<ResolvedModuleWithFailedLookupLocations>>;
    }
    interface NonRelativeModuleNameResolutionCache {
        getOrCreateCacheForModuleName(nonRelativeModuleName: string, redirectedReference?: ResolvedProjectReference): PerModuleNameCache;
        moduleNameToDirectoryMap: CacheWithRedirects<PerModuleNameCache>;
    }
    interface PerModuleNameCache {
        get(directory: string): ResolvedModuleWithFailedLookupLocations | undefined;
        set(directory: string, result: ResolvedModuleWithFailedLookupLocations): void;
    }
    function createModuleResolutionCache(currentDirectory: string, getCanonicalFileName: (s: string) => string, options?: CompilerOptions): ModuleResolutionCache;
    interface CacheWithRedirects<T> {
        ownMap: Map<T>;
        redirectsMap: Map<Map<T>>;
        getOrCreateMapOfCacheRedirects(redirectedReference: ResolvedProjectReference | undefined): Map<T>;
        clear(): void;
        setOwnOptions(newOptions: CompilerOptions): void;
        setOwnMap(newOwnMap: Map<T>): void;
    }
    function createCacheWithRedirects<T>(options?: CompilerOptions): CacheWithRedirects<T>;
    function createModuleResolutionCacheWithMaps(directoryToModuleNameMap: CacheWithRedirects<Map<ResolvedModuleWithFailedLookupLocations>>, moduleNameToDirectoryMap: CacheWithRedirects<PerModuleNameCache>, currentDirectory: string, getCanonicalFileName: GetCanonicalFileName): ModuleResolutionCache;
    function resolveModuleNameFromCache(moduleName: string, containingFile: string, cache: ModuleResolutionCache): ResolvedModuleWithFailedLookupLocations | undefined;
    function resolveModuleName(moduleName: string, containingFile: string, compilerOptions: CompilerOptions, host: ModuleResolutionHost, cache?: ModuleResolutionCache, redirectedReference?: ResolvedProjectReference): ResolvedModuleWithFailedLookupLocations;
    function resolveJSModule(moduleName: string, initialDir: string, host: ModuleResolutionHost): string;
    function tryResolveJSModule(moduleName: string, initialDir: string, host: ModuleResolutionHost): string | undefined;
    function nodeModuleNameResolver(moduleName: string, containingFile: string, compilerOptions: CompilerOptions, host: ModuleResolutionHost, cache?: ModuleResolutionCache, redirectedReference?: ResolvedProjectReference): ResolvedModuleWithFailedLookupLocations;
    function nodeModuleNameResolver(moduleName: string, containingFile: string, compilerOptions: CompilerOptions, host: ModuleResolutionHost, cache?: ModuleResolutionCache, redirectedReference?: ResolvedProjectReference, lookupConfig?: boolean): ResolvedModuleWithFailedLookupLocations;
    const nodeModulesPathPart = "/node_modules/";
    function pathContainsNodeModules(path: string): boolean;
    function parsePackageName(moduleName: string): {
        packageName: string;
        rest: string;
    };
    function getTypesPackageName(packageName: string): string;
    function mangleScopedPackageName(packageName: string): string;
    function getPackageNameFromTypesPackageName(mangledName: string): string;
    function unmangleScopedPackageName(typesPackageName: string): string;
    function classicNameResolver(moduleName: string, containingFile: string, compilerOptions: CompilerOptions, host: ModuleResolutionHost, cache?: NonRelativeModuleNameResolutionCache, redirectedReference?: ResolvedProjectReference): ResolvedModuleWithFailedLookupLocations;
    function loadModuleFromGlobalCache(moduleName: string, projectName: string | undefined, compilerOptions: CompilerOptions, host: ModuleResolutionHost, globalCache: string): ResolvedModuleWithFailedLookupLocations;
}
declare namespace ts {
    const enum ModuleInstanceState {
        NonInstantiated = 0,
        Instantiated = 1,
        ConstEnumOnly = 2
    }
    function getModuleInstanceState(node: ModuleDeclaration, visited?: Map<ModuleInstanceState | undefined>): ModuleInstanceState;
    function bindSourceFile(file: SourceFile, options: CompilerOptions): void;
    function isExportsOrModuleExportsOrAlias(sourceFile: SourceFile, node: Expression): boolean;
    function computeTransformFlagsForNode(node: Node, subtreeFlags: TransformFlags): TransformFlags;
    function getTransformFlagsSubtreeExclusions(kind: SyntaxKind): TransformFlags;
}
declare namespace ts {
    function createGetSymbolWalker(getRestTypeOfSignature: (sig: Signature) => Type, getTypePredicateOfSignature: (sig: Signature) => TypePredicate | undefined, getReturnTypeOfSignature: (sig: Signature) => Type, getBaseTypes: (type: Type) => Type[], resolveStructuredTypeMembers: (type: ObjectType) => ResolvedType, getTypeOfSymbol: (sym: Symbol) => Type, getResolvedSymbol: (node: Node) => Symbol, getIndexTypeOfStructuredType: (type: Type, kind: IndexKind) => Type | undefined, getConstraintOfTypeParameter: (typeParameter: TypeParameter) => Type | undefined, getFirstIdentifier: (node: EntityNameOrEntityNameExpression) => Identifier, getTypeArguments: (type: TypeReference) => readonly Type[]): (accept?: (symbol: Symbol) => boolean) => SymbolWalker;
}
declare namespace ts {
    function getNodeId(node: Node): number;
    function getSymbolId(symbol: Symbol): number;
    function isInstantiatedModule(node: ModuleDeclaration, preserveConstEnums: boolean): boolean;
    function createTypeChecker(host: TypeCheckerHost, produceDiagnostics: boolean): TypeChecker;
    function signatureHasRestParameter(s: Signature): boolean;
    function signatureHasLiteralTypes(s: Signature): boolean;
}
declare namespace ts {
    function updateNode<T extends Node>(updated: T, original: T): T;
    function createNodeArray<T extends Node>(elements?: T[], hasTrailingComma?: boolean): MutableNodeArray<T>;
    function createNodeArray<T extends Node>(elements?: readonly T[], hasTrailingComma?: boolean): NodeArray<T>;
    function getSynthesizedClone<T extends Node>(node: T): T;
    function createLiteral(value: string | StringLiteral | NoSubstitutionTemplateLiteral | NumericLiteral | Identifier, isSingleQuote: boolean): StringLiteral;
    function createLiteral(value: string | number, isSingleQuote: boolean): StringLiteral | NumericLiteral;
    function createLiteral(value: string | StringLiteral | NoSubstitutionTemplateLiteral | NumericLiteral | Identifier): StringLiteral;
    function createLiteral(value: number | PseudoBigInt): NumericLiteral;
    function createLiteral(value: boolean): BooleanLiteral;
    function createLiteral(value: string | number | PseudoBigInt | boolean): PrimaryExpression;
    function createNumericLiteral(value: string, numericLiteralFlags?: TokenFlags): NumericLiteral;
    function createBigIntLiteral(value: string): BigIntLiteral;
    function createStringLiteral(text: string): StringLiteral;
    function createRegularExpressionLiteral(text: string): RegularExpressionLiteral;
    function createIdentifier(text: string): Identifier;
    function createIdentifier(text: string, typeArguments: readonly (TypeNode | TypeParameterDeclaration)[] | undefined): Identifier;
    function updateIdentifier(node: Identifier): Identifier;
    function updateIdentifier(node: Identifier, typeArguments: NodeArray<TypeNode | TypeParameterDeclaration> | undefined): Identifier;
    function createTempVariable(recordTempVariable: ((node: Identifier) => void) | undefined): Identifier;
    function createTempVariable(recordTempVariable: ((node: Identifier) => void) | undefined, reservedInNestedScopes: boolean): GeneratedIdentifier;
    function createLoopVariable(): Identifier;
    function createUniqueName(text: string): Identifier;
    function createOptimisticUniqueName(text: string): GeneratedIdentifier;
    function createOptimisticUniqueName(text: string): Identifier;
    function createFileLevelUniqueName(text: string): Identifier;
    function getGeneratedNameForNode(node: Node | undefined): Identifier;
    function getGeneratedNameForNode(node: Node | undefined, flags: GeneratedIdentifierFlags): Identifier;
    function createPrivateIdentifier(text: string): PrivateIdentifier;
    function createToken<TKind extends SyntaxKind>(token: TKind): Token<TKind>;
    function createSuper(): SuperExpression;
    function createThis(): ThisExpression & Token<SyntaxKind.ThisKeyword>;
    function createNull(): NullLiteral & Token<SyntaxKind.NullKeyword>;
    function createTrue(): BooleanLiteral & Token<SyntaxKind.TrueKeyword>;
    function createFalse(): BooleanLiteral & Token<SyntaxKind.FalseKeyword>;
    function createModifier<T extends Modifier["kind"]>(kind: T): Token<T>;
    function createModifiersFromModifierFlags(flags: ModifierFlags): Modifier[];
    function createQualifiedName(left: EntityName, right: string | Identifier): QualifiedName;
    function updateQualifiedName(node: QualifiedName, left: EntityName, right: Identifier): QualifiedName;
    function createComputedPropertyName(expression: Expression): ComputedPropertyName;
    function updateComputedPropertyName(node: ComputedPropertyName, expression: Expression): ComputedPropertyName;
    function createTypeParameterDeclaration(name: string | Identifier, constraint?: TypeNode, defaultType?: TypeNode): TypeParameterDeclaration;
    function updateTypeParameterDeclaration(node: TypeParameterDeclaration, name: Identifier, constraint: TypeNode | undefined, defaultType: TypeNode | undefined): TypeParameterDeclaration;
    function createParameter(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, dotDotDotToken: DotDotDotToken | undefined, name: string | BindingName, questionToken?: QuestionToken, type?: TypeNode, initializer?: Expression): ParameterDeclaration;
    function updateParameter(node: ParameterDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, dotDotDotToken: DotDotDotToken | undefined, name: string | BindingName, questionToken: QuestionToken | undefined, type: TypeNode | undefined, initializer: Expression | undefined): ParameterDeclaration;
    function createDecorator(expression: Expression): Decorator;
    function updateDecorator(node: Decorator, expression: Expression): Decorator;
    function createPropertySignature(modifiers: readonly Modifier[] | undefined, name: PropertyName | string, questionToken: QuestionToken | undefined, type: TypeNode | undefined, initializer: Expression | undefined): PropertySignature;
    function updatePropertySignature(node: PropertySignature, modifiers: readonly Modifier[] | undefined, name: PropertyName, questionToken: QuestionToken | undefined, type: TypeNode | undefined, initializer: Expression | undefined): PropertySignature;
    function createProperty(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: string | PropertyName, questionOrExclamationToken: QuestionToken | ExclamationToken | undefined, type: TypeNode | undefined, initializer: Expression | undefined): PropertyDeclaration;
    function updateProperty(node: PropertyDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: string | PropertyName, questionOrExclamationToken: QuestionToken | ExclamationToken | undefined, type: TypeNode | undefined, initializer: Expression | undefined): PropertyDeclaration;
    function createMethodSignature(typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, name: string | PropertyName, questionToken: QuestionToken | undefined): MethodSignature;
    function updateMethodSignature(node: MethodSignature, typeParameters: NodeArray<TypeParameterDeclaration> | undefined, parameters: NodeArray<ParameterDeclaration>, type: TypeNode | undefined, name: PropertyName, questionToken: QuestionToken | undefined): MethodSignature;
    function createMethod(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, asteriskToken: AsteriskToken | undefined, name: string | PropertyName, questionToken: QuestionToken | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, body: Block | undefined): MethodDeclaration;
    function createObjectDefinePropertyCall(target: Expression, propertyName: string | Expression, attributes: Expression): CallExpression;
    function createPropertyDescriptor(attributes: PropertyDescriptorAttributes, singleLine?: boolean): ObjectLiteralExpression;
    function updateMethod(node: MethodDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, asteriskToken: AsteriskToken | undefined, name: PropertyName, questionToken: QuestionToken | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, body: Block | undefined): MethodDeclaration;
    function createConstructor(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, parameters: readonly ParameterDeclaration[], body: Block | undefined): ConstructorDeclaration;
    function updateConstructor(node: ConstructorDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, parameters: readonly ParameterDeclaration[], body: Block | undefined): ConstructorDeclaration;
    function createGetAccessor(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: string | PropertyName, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, body: Block | undefined): GetAccessorDeclaration;
    function updateGetAccessor(node: GetAccessorDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: PropertyName, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, body: Block | undefined): GetAccessorDeclaration;
    function createSetAccessor(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: string | PropertyName, parameters: readonly ParameterDeclaration[], body: Block | undefined): SetAccessorDeclaration;
    function updateSetAccessor(node: SetAccessorDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: PropertyName, parameters: readonly ParameterDeclaration[], body: Block | undefined): SetAccessorDeclaration;
    function createCallSignature(typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined): CallSignatureDeclaration;
    function updateCallSignature(node: CallSignatureDeclaration, typeParameters: NodeArray<TypeParameterDeclaration> | undefined, parameters: NodeArray<ParameterDeclaration>, type: TypeNode | undefined): CallSignatureDeclaration;
    function createConstructSignature(typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined): ConstructSignatureDeclaration;
    function updateConstructSignature(node: ConstructSignatureDeclaration, typeParameters: NodeArray<TypeParameterDeclaration> | undefined, parameters: NodeArray<ParameterDeclaration>, type: TypeNode | undefined): ConstructSignatureDeclaration;
    function createIndexSignature(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode): IndexSignatureDeclaration;
    function updateIndexSignature(node: IndexSignatureDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode): IndexSignatureDeclaration;
    function createSignatureDeclaration(kind: SyntaxKind, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, typeArguments?: readonly TypeNode[] | undefined): SignatureDeclaration;
    function createKeywordTypeNode(kind: KeywordTypeNode["kind"]): KeywordTypeNode;
    function createTypePredicateNode(parameterName: Identifier | ThisTypeNode | string, type: TypeNode): TypePredicateNode;
    function createTypePredicateNodeWithModifier(assertsModifier: AssertsToken | undefined, parameterName: Identifier | ThisTypeNode | string, type: TypeNode | undefined): TypePredicateNode;
    function updateTypePredicateNode(node: TypePredicateNode, parameterName: Identifier | ThisTypeNode, type: TypeNode): TypePredicateNode;
    function updateTypePredicateNodeWithModifier(node: TypePredicateNode, assertsModifier: AssertsToken | undefined, parameterName: Identifier | ThisTypeNode, type: TypeNode | undefined): TypePredicateNode;
    function createTypeReferenceNode(typeName: string | EntityName, typeArguments: readonly TypeNode[] | undefined): TypeReferenceNode;
    function updateTypeReferenceNode(node: TypeReferenceNode, typeName: EntityName, typeArguments: NodeArray<TypeNode> | undefined): TypeReferenceNode;
    function createFunctionTypeNode(typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined): FunctionTypeNode;
    function updateFunctionTypeNode(node: FunctionTypeNode, typeParameters: NodeArray<TypeParameterDeclaration> | undefined, parameters: NodeArray<ParameterDeclaration>, type: TypeNode | undefined): FunctionTypeNode;
    function createConstructorTypeNode(typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined): ConstructorTypeNode;
    function updateConstructorTypeNode(node: ConstructorTypeNode, typeParameters: NodeArray<TypeParameterDeclaration> | undefined, parameters: NodeArray<ParameterDeclaration>, type: TypeNode | undefined): ConstructorTypeNode;
    function createTypeQueryNode(exprName: EntityName): TypeQueryNode;
    function updateTypeQueryNode(node: TypeQueryNode, exprName: EntityName): TypeQueryNode;
    function createTypeLiteralNode(members: readonly TypeElement[] | undefined): TypeLiteralNode;
    function updateTypeLiteralNode(node: TypeLiteralNode, members: NodeArray<TypeElement>): TypeLiteralNode;
    function createArrayTypeNode(elementType: TypeNode): ArrayTypeNode;
    function updateArrayTypeNode(node: ArrayTypeNode, elementType: TypeNode): ArrayTypeNode;
    function createTupleTypeNode(elementTypes: readonly TypeNode[]): TupleTypeNode;
    function updateTupleTypeNode(node: TupleTypeNode, elementTypes: readonly TypeNode[]): TupleTypeNode;
    function createOptionalTypeNode(type: TypeNode): OptionalTypeNode;
    function updateOptionalTypeNode(node: OptionalTypeNode, type: TypeNode): OptionalTypeNode;
    function createRestTypeNode(type: TypeNode): RestTypeNode;
    function updateRestTypeNode(node: RestTypeNode, type: TypeNode): RestTypeNode;
    function createUnionTypeNode(types: readonly TypeNode[]): UnionTypeNode;
    function updateUnionTypeNode(node: UnionTypeNode, types: NodeArray<TypeNode>): UnionTypeNode;
    function createIntersectionTypeNode(types: readonly TypeNode[]): IntersectionTypeNode;
    function updateIntersectionTypeNode(node: IntersectionTypeNode, types: NodeArray<TypeNode>): IntersectionTypeNode;
    function createUnionOrIntersectionTypeNode(kind: SyntaxKind.UnionType | SyntaxKind.IntersectionType, types: readonly TypeNode[]): UnionOrIntersectionTypeNode;
    function createConditionalTypeNode(checkType: TypeNode, extendsType: TypeNode, trueType: TypeNode, falseType: TypeNode): ConditionalTypeNode;
    function updateConditionalTypeNode(node: ConditionalTypeNode, checkType: TypeNode, extendsType: TypeNode, trueType: TypeNode, falseType: TypeNode): ConditionalTypeNode;
    function createInferTypeNode(typeParameter: TypeParameterDeclaration): InferTypeNode;
    function updateInferTypeNode(node: InferTypeNode, typeParameter: TypeParameterDeclaration): InferTypeNode;
    function createImportTypeNode(argument: TypeNode, qualifier?: EntityName, typeArguments?: readonly TypeNode[], isTypeOf?: boolean): ImportTypeNode;
    function updateImportTypeNode(node: ImportTypeNode, argument: TypeNode, qualifier?: EntityName, typeArguments?: readonly TypeNode[], isTypeOf?: boolean): ImportTypeNode;
    function createParenthesizedType(type: TypeNode): ParenthesizedTypeNode;
    function updateParenthesizedType(node: ParenthesizedTypeNode, type: TypeNode): ParenthesizedTypeNode;
    function createThisTypeNode(): ThisTypeNode;
    function createTypeOperatorNode(type: TypeNode): TypeOperatorNode;
    function createTypeOperatorNode(operator: SyntaxKind.KeyOfKeyword | SyntaxKind.UniqueKeyword | SyntaxKind.ReadonlyKeyword, type: TypeNode): TypeOperatorNode;
    function updateTypeOperatorNode(node: TypeOperatorNode, type: TypeNode): TypeOperatorNode;
    function createIndexedAccessTypeNode(objectType: TypeNode, indexType: TypeNode): IndexedAccessTypeNode;
    function updateIndexedAccessTypeNode(node: IndexedAccessTypeNode, objectType: TypeNode, indexType: TypeNode): IndexedAccessTypeNode;
    function createMappedTypeNode(readonlyToken: ReadonlyToken | PlusToken | MinusToken | undefined, typeParameter: TypeParameterDeclaration, questionToken: QuestionToken | PlusToken | MinusToken | undefined, type: TypeNode | undefined): MappedTypeNode;
    function updateMappedTypeNode(node: MappedTypeNode, readonlyToken: ReadonlyToken | PlusToken | MinusToken | undefined, typeParameter: TypeParameterDeclaration, questionToken: QuestionToken | PlusToken | MinusToken | undefined, type: TypeNode | undefined): MappedTypeNode;
    function createLiteralTypeNode(literal: LiteralTypeNode["literal"]): LiteralTypeNode;
    function updateLiteralTypeNode(node: LiteralTypeNode, literal: LiteralTypeNode["literal"]): LiteralTypeNode;
    function createObjectBindingPattern(elements: readonly BindingElement[]): ObjectBindingPattern;
    function updateObjectBindingPattern(node: ObjectBindingPattern, elements: readonly BindingElement[]): ObjectBindingPattern;
    function createArrayBindingPattern(elements: readonly ArrayBindingElement[]): ArrayBindingPattern;
    function updateArrayBindingPattern(node: ArrayBindingPattern, elements: readonly ArrayBindingElement[]): ArrayBindingPattern;
    function createBindingElement(dotDotDotToken: DotDotDotToken | undefined, propertyName: string | PropertyName | undefined, name: string | BindingName, initializer?: Expression): BindingElement;
    function updateBindingElement(node: BindingElement, dotDotDotToken: DotDotDotToken | undefined, propertyName: PropertyName | undefined, name: BindingName, initializer: Expression | undefined): BindingElement;
    function createArrayLiteral(elements?: readonly Expression[], multiLine?: boolean): ArrayLiteralExpression;
    function updateArrayLiteral(node: ArrayLiteralExpression, elements: readonly Expression[]): ArrayLiteralExpression;
    function createObjectLiteral(properties?: readonly ObjectLiteralElementLike[], multiLine?: boolean): ObjectLiteralExpression;
    function updateObjectLiteral(node: ObjectLiteralExpression, properties: readonly ObjectLiteralElementLike[]): ObjectLiteralExpression;
    function createPropertyAccess(expression: Expression, name: string | Identifier | PrivateIdentifier): PropertyAccessExpression;
    function updatePropertyAccess(node: PropertyAccessExpression, expression: Expression, name: Identifier | PrivateIdentifier): PropertyAccessExpression;
    function createPropertyAccessChain(expression: Expression, questionDotToken: QuestionDotToken | undefined, name: string | Identifier): PropertyAccessChain;
    function updatePropertyAccessChain(node: PropertyAccessChain, expression: Expression, questionDotToken: QuestionDotToken | undefined, name: Identifier): PropertyAccessChain;
    function createElementAccess(expression: Expression, index: number | Expression): ElementAccessExpression;
    function updateElementAccess(node: ElementAccessExpression, expression: Expression, argumentExpression: Expression): ElementAccessExpression;
    function createElementAccessChain(expression: Expression, questionDotToken: QuestionDotToken | undefined, index: number | Expression): ElementAccessChain;
    function updateElementAccessChain(node: ElementAccessChain, expression: Expression, questionDotToken: QuestionDotToken | undefined, argumentExpression: Expression): ElementAccessChain;
    function createCall(expression: Expression, typeArguments: readonly TypeNode[] | undefined, argumentsArray: readonly Expression[] | undefined): CallExpression;
    function updateCall(node: CallExpression, expression: Expression, typeArguments: readonly TypeNode[] | undefined, argumentsArray: readonly Expression[]): CallExpression;
    function createCallChain(expression: Expression, questionDotToken: QuestionDotToken | undefined, typeArguments: readonly TypeNode[] | undefined, argumentsArray: readonly Expression[] | undefined): CallChain;
    function updateCallChain(node: CallChain, expression: Expression, questionDotToken: QuestionDotToken | undefined, typeArguments: readonly TypeNode[] | undefined, argumentsArray: readonly Expression[]): CallChain;
    function createNew(expression: Expression, typeArguments: readonly TypeNode[] | undefined, argumentsArray: readonly Expression[] | undefined): NewExpression;
    function updateNew(node: NewExpression, expression: Expression, typeArguments: readonly TypeNode[] | undefined, argumentsArray: readonly Expression[] | undefined): NewExpression;
    function createTaggedTemplate(tag: Expression, template: TemplateLiteral): TaggedTemplateExpression;
    function createTaggedTemplate(tag: Expression, typeArguments: readonly TypeNode[] | undefined, template: TemplateLiteral): TaggedTemplateExpression;
    function createTaggedTemplate(tag: Expression, typeArgumentsOrTemplate: readonly TypeNode[] | TemplateLiteral | undefined, template?: TemplateLiteral): TaggedTemplateExpression;
    function updateTaggedTemplate(node: TaggedTemplateExpression, tag: Expression, template: TemplateLiteral): TaggedTemplateExpression;
    function updateTaggedTemplate(node: TaggedTemplateExpression, tag: Expression, typeArguments: readonly TypeNode[] | undefined, template: TemplateLiteral): TaggedTemplateExpression;
    function createTypeAssertion(type: TypeNode, expression: Expression): TypeAssertion;
    function updateTypeAssertion(node: TypeAssertion, type: TypeNode, expression: Expression): TypeAssertion;
    function createParen(expression: Expression): ParenthesizedExpression;
    function updateParen(node: ParenthesizedExpression, expression: Expression): ParenthesizedExpression;
    function createFunctionExpression(modifiers: readonly Modifier[] | undefined, asteriskToken: AsteriskToken | undefined, name: string | Identifier | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[] | undefined, type: TypeNode | undefined, body: Block): FunctionExpression;
    function updateFunctionExpression(node: FunctionExpression, modifiers: readonly Modifier[] | undefined, asteriskToken: AsteriskToken | undefined, name: Identifier | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, body: Block): FunctionExpression;
    function createArrowFunction(modifiers: readonly Modifier[] | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, equalsGreaterThanToken: EqualsGreaterThanToken | undefined, body: ConciseBody): ArrowFunction;
    function updateArrowFunction(node: ArrowFunction, modifiers: readonly Modifier[] | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, equalsGreaterThanToken: Token<SyntaxKind.EqualsGreaterThanToken>, body: ConciseBody): ArrowFunction;
    function createDelete(expression: Expression): DeleteExpression;
    function updateDelete(node: DeleteExpression, expression: Expression): DeleteExpression;
    function createTypeOf(expression: Expression): TypeOfExpression;
    function updateTypeOf(node: TypeOfExpression, expression: Expression): TypeOfExpression;
    function createVoid(expression: Expression): VoidExpression;
    function updateVoid(node: VoidExpression, expression: Expression): VoidExpression;
    function createAwait(expression: Expression): AwaitExpression;
    function updateAwait(node: AwaitExpression, expression: Expression): AwaitExpression;
    function createPrefix(operator: PrefixUnaryOperator, operand: Expression): PrefixUnaryExpression;
    function updatePrefix(node: PrefixUnaryExpression, operand: Expression): PrefixUnaryExpression;
    function createPostfix(operand: Expression, operator: PostfixUnaryOperator): PostfixUnaryExpression;
    function updatePostfix(node: PostfixUnaryExpression, operand: Expression): PostfixUnaryExpression;
    function createBinary(left: Expression, operator: BinaryOperator | BinaryOperatorToken, right: Expression): BinaryExpression;
    function updateBinary(node: BinaryExpression, left: Expression, right: Expression, operator?: BinaryOperator | BinaryOperatorToken): BinaryExpression;
    function createConditional(condition: Expression, whenTrue: Expression, whenFalse: Expression): ConditionalExpression;
    function createConditional(condition: Expression, questionToken: QuestionToken, whenTrue: Expression, colonToken: ColonToken, whenFalse: Expression): ConditionalExpression;
    function updateConditional(node: ConditionalExpression, condition: Expression, questionToken: Token<SyntaxKind.QuestionToken>, whenTrue: Expression, colonToken: Token<SyntaxKind.ColonToken>, whenFalse: Expression): ConditionalExpression;
    function createTemplateExpression(head: TemplateHead, templateSpans: readonly TemplateSpan[]): TemplateExpression;
    function updateTemplateExpression(node: TemplateExpression, head: TemplateHead, templateSpans: readonly TemplateSpan[]): TemplateExpression;
    function createTemplateHead(text: string, rawText?: string): TemplateHead;
    function createTemplateMiddle(text: string, rawText?: string): TemplateMiddle;
    function createTemplateTail(text: string, rawText?: string): TemplateTail;
    function createNoSubstitutionTemplateLiteral(text: string, rawText?: string): NoSubstitutionTemplateLiteral;
    function createYield(expression?: Expression): YieldExpression;
    function createYield(asteriskToken: AsteriskToken | undefined, expression: Expression): YieldExpression;
    function updateYield(node: YieldExpression, asteriskToken: AsteriskToken | undefined, expression: Expression): YieldExpression;
    function createSpread(expression: Expression): SpreadElement;
    function updateSpread(node: SpreadElement, expression: Expression): SpreadElement;
    function createClassExpression(modifiers: readonly Modifier[] | undefined, name: string | Identifier | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, heritageClauses: readonly HeritageClause[] | undefined, members: readonly ClassElement[]): ClassExpression;
    function updateClassExpression(node: ClassExpression, modifiers: readonly Modifier[] | undefined, name: Identifier | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, heritageClauses: readonly HeritageClause[] | undefined, members: readonly ClassElement[]): ClassExpression;
    function createOmittedExpression(): OmittedExpression;
    function createExpressionWithTypeArguments(typeArguments: readonly TypeNode[] | undefined, expression: Expression): ExpressionWithTypeArguments;
    function updateExpressionWithTypeArguments(node: ExpressionWithTypeArguments, typeArguments: readonly TypeNode[] | undefined, expression: Expression): ExpressionWithTypeArguments;
    function createAsExpression(expression: Expression, type: TypeNode): AsExpression;
    function updateAsExpression(node: AsExpression, expression: Expression, type: TypeNode): AsExpression;
    function createNonNullExpression(expression: Expression): NonNullExpression;
    function updateNonNullExpression(node: NonNullExpression, expression: Expression): NonNullExpression;
    function createMetaProperty(keywordToken: MetaProperty["keywordToken"], name: Identifier): MetaProperty;
    function updateMetaProperty(node: MetaProperty, name: Identifier): MetaProperty;
    function createTemplateSpan(expression: Expression, literal: TemplateMiddle | TemplateTail): TemplateSpan;
    function updateTemplateSpan(node: TemplateSpan, expression: Expression, literal: TemplateMiddle | TemplateTail): TemplateSpan;
    function createSemicolonClassElement(): SemicolonClassElement;
    function createBlock(statements: readonly Statement[], multiLine?: boolean): Block;
    function updateBlock(node: Block, statements: readonly Statement[]): Block;
    function createVariableStatement(modifiers: readonly Modifier[] | undefined, declarationList: VariableDeclarationList | readonly VariableDeclaration[]): VariableStatement;
    function updateVariableStatement(node: VariableStatement, modifiers: readonly Modifier[] | undefined, declarationList: VariableDeclarationList): VariableStatement;
    function createEmptyStatement(): EmptyStatement;
    function createExpressionStatement(expression: Expression): ExpressionStatement;
    function updateExpressionStatement(node: ExpressionStatement, expression: Expression): ExpressionStatement;
    const createStatement: typeof createExpressionStatement;
    const updateStatement: typeof updateExpressionStatement;
    function createIf(expression: Expression, thenStatement: Statement, elseStatement?: Statement): IfStatement;
    function updateIf(node: IfStatement, expression: Expression, thenStatement: Statement, elseStatement: Statement | undefined): IfStatement;
    function createDo(statement: Statement, expression: Expression): DoStatement;
    function updateDo(node: DoStatement, statement: Statement, expression: Expression): DoStatement;
    function createWhile(expression: Expression, statement: Statement): WhileStatement;
    function updateWhile(node: WhileStatement, expression: Expression, statement: Statement): WhileStatement;
    function createFor(initializer: ForInitializer | undefined, condition: Expression | undefined, incrementor: Expression | undefined, statement: Statement): ForStatement;
    function updateFor(node: ForStatement, initializer: ForInitializer | undefined, condition: Expression | undefined, incrementor: Expression | undefined, statement: Statement): ForStatement;
    function createForIn(initializer: ForInitializer, expression: Expression, statement: Statement): ForInStatement;
    function updateForIn(node: ForInStatement, initializer: ForInitializer, expression: Expression, statement: Statement): ForInStatement;
    function createForOf(awaitModifier: AwaitKeywordToken | undefined, initializer: ForInitializer, expression: Expression, statement: Statement): ForOfStatement;
    function updateForOf(node: ForOfStatement, awaitModifier: AwaitKeywordToken | undefined, initializer: ForInitializer, expression: Expression, statement: Statement): ForOfStatement;
    function createContinue(label?: string | Identifier): ContinueStatement;
    function updateContinue(node: ContinueStatement, label: Identifier | undefined): ContinueStatement;
    function createBreak(label?: string | Identifier): BreakStatement;
    function updateBreak(node: BreakStatement, label: Identifier | undefined): BreakStatement;
    function createReturn(expression?: Expression): ReturnStatement;
    function updateReturn(node: ReturnStatement, expression: Expression | undefined): ReturnStatement;
    function createWith(expression: Expression, statement: Statement): WithStatement;
    function updateWith(node: WithStatement, expression: Expression, statement: Statement): WithStatement;
    function createSwitch(expression: Expression, caseBlock: CaseBlock): SwitchStatement;
    function updateSwitch(node: SwitchStatement, expression: Expression, caseBlock: CaseBlock): SwitchStatement;
    function createLabel(label: string | Identifier, statement: Statement): LabeledStatement;
    function updateLabel(node: LabeledStatement, label: Identifier, statement: Statement): LabeledStatement;
    function createThrow(expression: Expression): ThrowStatement;
    function updateThrow(node: ThrowStatement, expression: Expression): ThrowStatement;
    function createTry(tryBlock: Block, catchClause: CatchClause | undefined, finallyBlock: Block | undefined): TryStatement;
    function updateTry(node: TryStatement, tryBlock: Block, catchClause: CatchClause | undefined, finallyBlock: Block | undefined): TryStatement;
    function createDebuggerStatement(): DebuggerStatement;
    function createVariableDeclaration(name: string | BindingName, type?: TypeNode, initializer?: Expression): VariableDeclaration;
    function updateVariableDeclaration(node: VariableDeclaration, name: BindingName, type: TypeNode | undefined, initializer: Expression | undefined): VariableDeclaration;
    function createTypeScriptVariableDeclaration(name: string | BindingName, exclaimationToken?: Token<SyntaxKind.ExclamationToken>, type?: TypeNode, initializer?: Expression): VariableDeclaration;
    function updateTypeScriptVariableDeclaration(node: VariableDeclaration, name: BindingName, exclaimationToken: Token<SyntaxKind.ExclamationToken> | undefined, type: TypeNode | undefined, initializer: Expression | undefined): VariableDeclaration;
    function createVariableDeclarationList(declarations: readonly VariableDeclaration[], flags?: NodeFlags): VariableDeclarationList;
    function updateVariableDeclarationList(node: VariableDeclarationList, declarations: readonly VariableDeclaration[]): VariableDeclarationList;
    function createFunctionDeclaration(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, asteriskToken: AsteriskToken | undefined, name: string | Identifier | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, body: Block | undefined): FunctionDeclaration;
    function updateFunctionDeclaration(node: FunctionDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, asteriskToken: AsteriskToken | undefined, name: Identifier | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, body: Block | undefined): FunctionDeclaration;
    function createClassDeclaration(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: string | Identifier | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, heritageClauses: readonly HeritageClause[] | undefined, members: readonly ClassElement[]): ClassDeclaration;
    function updateClassDeclaration(node: ClassDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: Identifier | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, heritageClauses: readonly HeritageClause[] | undefined, members: readonly ClassElement[]): ClassDeclaration;
    function createInterfaceDeclaration(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: string | Identifier, typeParameters: readonly TypeParameterDeclaration[] | undefined, heritageClauses: readonly HeritageClause[] | undefined, members: readonly TypeElement[]): InterfaceDeclaration;
    function updateInterfaceDeclaration(node: InterfaceDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: Identifier, typeParameters: readonly TypeParameterDeclaration[] | undefined, heritageClauses: readonly HeritageClause[] | undefined, members: readonly TypeElement[]): InterfaceDeclaration;
    function createTypeAliasDeclaration(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: string | Identifier, typeParameters: readonly TypeParameterDeclaration[] | undefined, type: TypeNode): TypeAliasDeclaration;
    function updateTypeAliasDeclaration(node: TypeAliasDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: Identifier, typeParameters: readonly TypeParameterDeclaration[] | undefined, type: TypeNode): TypeAliasDeclaration;
    function createEnumDeclaration(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: string | Identifier, members: readonly EnumMember[]): EnumDeclaration;
    function updateEnumDeclaration(node: EnumDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: Identifier, members: readonly EnumMember[]): EnumDeclaration;
    function createModuleDeclaration(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: ModuleName, body: ModuleBody | undefined, flags?: NodeFlags): ModuleDeclaration;
    function updateModuleDeclaration(node: ModuleDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: ModuleName, body: ModuleBody | undefined): ModuleDeclaration;
    function createModuleBlock(statements: readonly Statement[]): ModuleBlock;
    function updateModuleBlock(node: ModuleBlock, statements: readonly Statement[]): ModuleBlock;
    function createCaseBlock(clauses: readonly CaseOrDefaultClause[]): CaseBlock;
    function updateCaseBlock(node: CaseBlock, clauses: readonly CaseOrDefaultClause[]): CaseBlock;
    function createNamespaceExportDeclaration(name: string | Identifier): NamespaceExportDeclaration;
    function updateNamespaceExportDeclaration(node: NamespaceExportDeclaration, name: Identifier): NamespaceExportDeclaration;
    function createImportEqualsDeclaration(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: string | Identifier, moduleReference: ModuleReference): ImportEqualsDeclaration;
    function updateImportEqualsDeclaration(node: ImportEqualsDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: Identifier, moduleReference: ModuleReference): ImportEqualsDeclaration;
    function createImportDeclaration(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, importClause: ImportClause | undefined, moduleSpecifier: Expression): ImportDeclaration;
    function updateImportDeclaration(node: ImportDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, importClause: ImportClause | undefined, moduleSpecifier: Expression): ImportDeclaration;
    function createImportClause(name: Identifier | undefined, namedBindings: NamedImportBindings | undefined, isTypeOnly?: boolean): ImportClause;
    function updateImportClause(node: ImportClause, name: Identifier | undefined, namedBindings: NamedImportBindings | undefined, isTypeOnly: boolean): ImportClause;
    function createNamespaceImport(name: Identifier): NamespaceImport;
    function createNamespaceExport(name: Identifier): NamespaceExport;
    function updateNamespaceImport(node: NamespaceImport, name: Identifier): NamespaceImport;
    function updateNamespaceExport(node: NamespaceExport, name: Identifier): NamespaceExport;
    function createNamedImports(elements: readonly ImportSpecifier[]): NamedImports;
    function updateNamedImports(node: NamedImports, elements: readonly ImportSpecifier[]): NamedImports;
    function createImportSpecifier(propertyName: Identifier | undefined, name: Identifier): ImportSpecifier;
    function updateImportSpecifier(node: ImportSpecifier, propertyName: Identifier | undefined, name: Identifier): ImportSpecifier;
    function createExportAssignment(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, isExportEquals: boolean | undefined, expression: Expression): ExportAssignment;
    function updateExportAssignment(node: ExportAssignment, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, expression: Expression): ExportAssignment;
    function createExportDeclaration(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, exportClause: NamedExportBindings | undefined, moduleSpecifier?: Expression, isTypeOnly?: boolean): ExportDeclaration;
    function updateExportDeclaration(node: ExportDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, exportClause: NamedExportBindings | undefined, moduleSpecifier: Expression | undefined, isTypeOnly: boolean): ExportDeclaration;
    function createEmptyExports(): ExportDeclaration;
    function createNamedExports(elements: readonly ExportSpecifier[]): NamedExports;
    function updateNamedExports(node: NamedExports, elements: readonly ExportSpecifier[]): NamedExports;
    function createExportSpecifier(propertyName: string | Identifier | undefined, name: string | Identifier): ExportSpecifier;
    function updateExportSpecifier(node: ExportSpecifier, propertyName: Identifier | undefined, name: Identifier): ExportSpecifier;
    function createExternalModuleReference(expression: Expression): ExternalModuleReference;
    function updateExternalModuleReference(node: ExternalModuleReference, expression: Expression): ExternalModuleReference;
    function createJSDocTypeExpression(type: TypeNode): JSDocTypeExpression;
    function createJSDocTypeTag(typeExpression: JSDocTypeExpression, comment?: string): JSDocTypeTag;
    function createJSDocReturnTag(typeExpression?: JSDocTypeExpression, comment?: string): JSDocReturnTag;
    function createJSDocThisTag(typeExpression?: JSDocTypeExpression): JSDocThisTag;
    function createJSDocParamTag(name: EntityName, isBracketed: boolean, typeExpression?: JSDocTypeExpression, comment?: string): JSDocParameterTag;
    function createJSDocComment(comment?: string | undefined, tags?: NodeArray<JSDocTag> | undefined): JSDoc;
    function createJsxElement(openingElement: JsxOpeningElement, children: readonly JsxChild[], closingElement: JsxClosingElement): JsxElement;
    function updateJsxElement(node: JsxElement, openingElement: JsxOpeningElement, children: readonly JsxChild[], closingElement: JsxClosingElement): JsxElement;
    function createJsxSelfClosingElement(tagName: JsxTagNameExpression, typeArguments: readonly TypeNode[] | undefined, attributes: JsxAttributes): JsxSelfClosingElement;
    function updateJsxSelfClosingElement(node: JsxSelfClosingElement, tagName: JsxTagNameExpression, typeArguments: readonly TypeNode[] | undefined, attributes: JsxAttributes): JsxSelfClosingElement;
    function createJsxOpeningElement(tagName: JsxTagNameExpression, typeArguments: readonly TypeNode[] | undefined, attributes: JsxAttributes): JsxOpeningElement;
    function updateJsxOpeningElement(node: JsxOpeningElement, tagName: JsxTagNameExpression, typeArguments: readonly TypeNode[] | undefined, attributes: JsxAttributes): JsxOpeningElement;
    function createJsxClosingElement(tagName: JsxTagNameExpression): JsxClosingElement;
    function updateJsxClosingElement(node: JsxClosingElement, tagName: JsxTagNameExpression): JsxClosingElement;
    function createJsxFragment(openingFragment: JsxOpeningFragment, children: readonly JsxChild[], closingFragment: JsxClosingFragment): JsxFragment;
    function createJsxText(text: string, containsOnlyTriviaWhiteSpaces?: boolean): JsxText;
    function updateJsxText(node: JsxText, text: string, containsOnlyTriviaWhiteSpaces?: boolean): JsxText;
    function createJsxOpeningFragment(): JsxOpeningFragment;
    function createJsxJsxClosingFragment(): JsxClosingFragment;
    function updateJsxFragment(node: JsxFragment, openingFragment: JsxOpeningFragment, children: readonly JsxChild[], closingFragment: JsxClosingFragment): JsxFragment;
    function createJsxAttribute(name: Identifier, initializer: StringLiteral | JsxExpression): JsxAttribute;
    function updateJsxAttribute(node: JsxAttribute, name: Identifier, initializer: StringLiteral | JsxExpression): JsxAttribute;
    function createJsxAttributes(properties: readonly JsxAttributeLike[]): JsxAttributes;
    function updateJsxAttributes(node: JsxAttributes, properties: readonly JsxAttributeLike[]): JsxAttributes;
    function createJsxSpreadAttribute(expression: Expression): JsxSpreadAttribute;
    function updateJsxSpreadAttribute(node: JsxSpreadAttribute, expression: Expression): JsxSpreadAttribute;
    function createJsxExpression(dotDotDotToken: DotDotDotToken | undefined, expression: Expression | undefined): JsxExpression;
    function updateJsxExpression(node: JsxExpression, expression: Expression | undefined): JsxExpression;
    function createCaseClause(expression: Expression, statements: readonly Statement[]): CaseClause;
    function updateCaseClause(node: CaseClause, expression: Expression, statements: readonly Statement[]): CaseClause;
    function createDefaultClause(statements: readonly Statement[]): DefaultClause;
    function updateDefaultClause(node: DefaultClause, statements: readonly Statement[]): DefaultClause;
    function createHeritageClause(token: HeritageClause["token"], types: readonly ExpressionWithTypeArguments[]): HeritageClause;
    function updateHeritageClause(node: HeritageClause, types: readonly ExpressionWithTypeArguments[]): HeritageClause;
    function createCatchClause(variableDeclaration: string | VariableDeclaration | undefined, block: Block): CatchClause;
    function updateCatchClause(node: CatchClause, variableDeclaration: VariableDeclaration | undefined, block: Block): CatchClause;
    function createPropertyAssignment(name: string | PropertyName, initializer: Expression): PropertyAssignment;
    function updatePropertyAssignment(node: PropertyAssignment, name: PropertyName, initializer: Expression): PropertyAssignment;
    function createShorthandPropertyAssignment(name: string | Identifier, objectAssignmentInitializer?: Expression): ShorthandPropertyAssignment;
    function updateShorthandPropertyAssignment(node: ShorthandPropertyAssignment, name: Identifier, objectAssignmentInitializer: Expression | undefined): ShorthandPropertyAssignment;
    function createSpreadAssignment(expression: Expression): SpreadAssignment;
    function updateSpreadAssignment(node: SpreadAssignment, expression: Expression): SpreadAssignment;
    function createEnumMember(name: string | PropertyName, initializer?: Expression): EnumMember;
    function updateEnumMember(node: EnumMember, name: PropertyName, initializer: Expression | undefined): EnumMember;
    function updateSourceFileNode(node: SourceFile, statements: readonly Statement[], isDeclarationFile?: boolean, referencedFiles?: SourceFile["referencedFiles"], typeReferences?: SourceFile["typeReferenceDirectives"], hasNoDefaultLib?: boolean, libReferences?: SourceFile["libReferenceDirectives"]): SourceFile;
    function getMutableClone<T extends Node>(node: T): T;
    function createNotEmittedStatement(original: Node): NotEmittedStatement;
    function createEndOfDeclarationMarker(original: Node): EndOfDeclarationMarker;
    function createMergeDeclarationMarker(original: Node): MergeDeclarationMarker;
    function createPartiallyEmittedExpression(expression: Expression, original?: Node): PartiallyEmittedExpression;
    function updatePartiallyEmittedExpression(node: PartiallyEmittedExpression, expression: Expression): PartiallyEmittedExpression;
    function createCommaList(elements: readonly Expression[]): CommaListExpression;
    function updateCommaList(node: CommaListExpression, elements: readonly Expression[]): CommaListExpression;
    function createSyntheticReferenceExpression(expression: Expression, thisArg: Expression): SyntheticReferenceExpression;
    function updateSyntheticReferenceExpression(node: SyntheticReferenceExpression, expression: Expression, thisArg: Expression): SyntheticReferenceExpression;
    function createBundle(sourceFiles: readonly SourceFile[], prepends?: readonly (UnparsedSource | InputFiles)[]): Bundle;
    function createUnparsedSourceFile(text: string): UnparsedSource;
    function createUnparsedSourceFile(inputFile: InputFiles, type: "js" | "dts", stripInternal?: boolean): UnparsedSource;
    function createUnparsedSourceFile(text: string, mapPath: string | undefined, map: string | undefined): UnparsedSource;
    function createInputFiles(javascriptText: string, declarationText: string): InputFiles;
    function createInputFiles(readFileText: (path: string) => string | undefined, javascriptPath: string, javascriptMapPath: string | undefined, declarationPath: string, declarationMapPath: string | undefined, buildInfoPath: string | undefined): InputFiles;
    function createInputFiles(javascriptText: string, declarationText: string, javascriptMapPath: string | undefined, javascriptMapText: string | undefined, declarationMapPath: string | undefined, declarationMapText: string | undefined): InputFiles;
    function createInputFiles(javascriptText: string, declarationText: string, javascriptMapPath: string | undefined, javascriptMapText: string | undefined, declarationMapPath: string | undefined, declarationMapText: string | undefined, javascriptPath: string | undefined, declarationPath: string | undefined, buildInfoPath?: string | undefined, buildInfo?: BuildInfo, oldFileOfCurrentEmit?: boolean): InputFiles;
    function updateBundle(node: Bundle, sourceFiles: readonly SourceFile[], prepends?: readonly (UnparsedSource | InputFiles)[]): Bundle;
    function createImmediatelyInvokedFunctionExpression(statements: readonly Statement[]): CallExpression;
    function createImmediatelyInvokedFunctionExpression(statements: readonly Statement[], param: ParameterDeclaration, paramValue: Expression): CallExpression;
    function createImmediatelyInvokedArrowFunction(statements: readonly Statement[]): CallExpression;
    function createImmediatelyInvokedArrowFunction(statements: readonly Statement[], param: ParameterDeclaration, paramValue: Expression): CallExpression;
    function createComma(left: Expression, right: Expression): Expression;
    function createLessThan(left: Expression, right: Expression): Expression;
    function createAssignment(left: ObjectLiteralExpression | ArrayLiteralExpression, right: Expression): DestructuringAssignment;
    function createAssignment(left: Expression, right: Expression): BinaryExpression;
    function createStrictEquality(left: Expression, right: Expression): BinaryExpression;
    function createStrictInequality(left: Expression, right: Expression): BinaryExpression;
    function createAdd(left: Expression, right: Expression): BinaryExpression;
    function createSubtract(left: Expression, right: Expression): BinaryExpression;
    function createPostfixIncrement(operand: Expression): PostfixUnaryExpression;
    function createLogicalAnd(left: Expression, right: Expression): BinaryExpression;
    function createLogicalOr(left: Expression, right: Expression): BinaryExpression;
    function createNullishCoalesce(left: Expression, right: Expression): BinaryExpression;
    function createLogicalNot(operand: Expression): PrefixUnaryExpression;
    function createVoidZero(): VoidExpression;
    function createExportDefault(expression: Expression): ExportAssignment;
    function createExternalModuleExport(exportName: Identifier): ExportDeclaration;
    function disposeEmitNodes(sourceFile: SourceFile): void;
    function getOrCreateEmitNode(node: Node): EmitNode;
    function removeAllComments<T extends Node>(node: T): T;
    function setTextRange<T extends TextRange>(range: T, location: TextRange | undefined): T;
    function setEmitFlags<T extends Node>(node: T, emitFlags: EmitFlags): T;
    function addEmitFlags<T extends Node>(node: T, emitFlags: EmitFlags): T;
    function getSourceMapRange(node: Node): SourceMapRange;
    function setSourceMapRange<T extends Node>(node: T, range: SourceMapRange | undefined): T;
    function createSourceMapSource(fileName: string, text: string, skipTrivia?: (pos: number) => number): SourceMapSource;
    function getTokenSourceMapRange(node: Node, token: SyntaxKind): SourceMapRange | undefined;
    function setTokenSourceMapRange<T extends Node>(node: T, token: SyntaxKind, range: SourceMapRange | undefined): T;
    function getStartsOnNewLine(node: Node): boolean | undefined;
    function setStartsOnNewLine<T extends Node>(node: T, newLine: boolean): T;
    function getCommentRange(node: Node): TextRange;
    function setCommentRange<T extends Node>(node: T, range: TextRange): T;
    function getSyntheticLeadingComments(node: Node): SynthesizedComment[] | undefined;
    function setSyntheticLeadingComments<T extends Node>(node: T, comments: SynthesizedComment[] | undefined): T;
    function addSyntheticLeadingComment<T extends Node>(node: T, kind: SyntaxKind.SingleLineCommentTrivia | SyntaxKind.MultiLineCommentTrivia, text: string, hasTrailingNewLine?: boolean): T;
    function getSyntheticTrailingComments(node: Node): SynthesizedComment[] | undefined;
    function setSyntheticTrailingComments<T extends Node>(node: T, comments: SynthesizedComment[] | undefined): T;
    function addSyntheticTrailingComment<T extends Node>(node: T, kind: SyntaxKind.SingleLineCommentTrivia | SyntaxKind.MultiLineCommentTrivia, text: string, hasTrailingNewLine?: boolean): T;
    function moveSyntheticComments<T extends Node>(node: T, original: Node): T;
    function getConstantValue(node: PropertyAccessExpression | ElementAccessExpression): string | number | undefined;
    function setConstantValue(node: PropertyAccessExpression | ElementAccessExpression, value: string | number): PropertyAccessExpression | ElementAccessExpression;
    function addEmitHelper<T extends Node>(node: T, helper: EmitHelper): T;
    function addEmitHelpers<T extends Node>(node: T, helpers: EmitHelper[] | undefined): T;
    function removeEmitHelper(node: Node, helper: EmitHelper): boolean;
    function getEmitHelpers(node: Node): EmitHelper[] | undefined;
    function moveEmitHelpers(source: Node, target: Node, predicate: (helper: EmitHelper) => boolean): void;
    function compareEmitHelpers(x: EmitHelper, y: EmitHelper): Comparison.LessThan | Comparison.LessThan | Comparison | Comparison.GreaterThan;
    function setOriginalNode<T extends Node>(node: T, original: Node | undefined): T;
}
declare namespace ts {
    const nullTransformationContext: TransformationContext;
    type TypeOfTag = "undefined" | "number" | "boolean" | "string" | "symbol" | "object" | "function";
    function createTypeCheck(value: Expression, tag: TypeOfTag): BinaryExpression;
    function createMemberAccessForPropertyName(target: Expression, memberName: PropertyName, location?: TextRange): MemberExpression;
    function createFunctionCall(func: Expression, thisArg: Expression, argumentsList: readonly Expression[], location?: TextRange): CallExpression;
    function createFunctionApply(func: Expression, thisArg: Expression, argumentsExpression: Expression, location?: TextRange): CallExpression;
    function createArraySlice(array: Expression, start?: number | Expression): CallExpression;
    function createArrayConcat(array: Expression, values: readonly Expression[]): CallExpression;
    function createMathPow(left: Expression, right: Expression, location?: TextRange): CallExpression;
    function createExpressionForJsxElement(jsxFactoryEntity: EntityName | undefined, reactNamespace: string, tagName: Expression, props: Expression, children: readonly Expression[], parentElement: JsxOpeningLikeElement, location: TextRange): LeftHandSideExpression;
    function createExpressionForJsxFragment(jsxFactoryEntity: EntityName | undefined, reactNamespace: string, children: readonly Expression[], parentElement: JsxOpeningFragment, location: TextRange): LeftHandSideExpression;
    function getUnscopedHelperName(name: string): Identifier;
    const valuesHelper: UnscopedEmitHelper;
    function createValuesHelper(context: TransformationContext, expression: Expression, location?: TextRange): CallExpression;
    const readHelper: UnscopedEmitHelper;
    function createReadHelper(context: TransformationContext, iteratorRecord: Expression, count: number | undefined, location?: TextRange): CallExpression;
    const spreadHelper: UnscopedEmitHelper;
    function createSpreadHelper(context: TransformationContext, argumentList: readonly Expression[], location?: TextRange): CallExpression;
    const spreadArraysHelper: UnscopedEmitHelper;
    function createSpreadArraysHelper(context: TransformationContext, argumentList: readonly Expression[], location?: TextRange): CallExpression;
    function createForOfBindingStatement(node: ForInitializer, boundValue: Expression): Statement;
    function insertLeadingStatement(dest: Statement, source: Statement): Block;
    function restoreEnclosingLabel(node: Statement, outermostLabeledStatement: LabeledStatement | undefined, afterRestoreLabelCallback?: (node: LabeledStatement) => void): Statement;
    interface CallBinding {
        target: LeftHandSideExpression;
        thisArg: Expression;
    }
    function createCallBinding(expression: Expression, recordTempVariable: (temp: Identifier) => void, languageVersion?: ScriptTarget, cacheIdentifiers?: boolean): CallBinding;
    function inlineExpressions(expressions: readonly Expression[]): Expression;
    function createExpressionFromEntityName(node: EntityName | Expression): Expression;
    function createExpressionForPropertyName(memberName: Exclude<PropertyName, PrivateIdentifier>): Expression;
    function createExpressionForObjectLiteralElementLike(node: ObjectLiteralExpression, property: ObjectLiteralElementLike, receiver: Expression): Expression | undefined;
    function getInternalName(node: Declaration, allowComments?: boolean, allowSourceMaps?: boolean): Identifier;
    function isInternalName(node: Identifier): boolean;
    function getLocalName(node: Declaration, allowComments?: boolean, allowSourceMaps?: boolean): Identifier;
    function isLocalName(node: Identifier): boolean;
    function getExportName(node: Declaration, allowComments?: boolean, allowSourceMaps?: boolean): Identifier;
    function isExportName(node: Identifier): boolean;
    function getDeclarationName(node: Declaration, allowComments?: boolean, allowSourceMaps?: boolean): Identifier;
    function getExternalModuleOrNamespaceExportName(ns: Identifier | undefined, node: Declaration, allowComments?: boolean, allowSourceMaps?: boolean): Identifier | PropertyAccessExpression;
    function getNamespaceMemberName(ns: Identifier, name: Identifier, allowComments?: boolean, allowSourceMaps?: boolean): PropertyAccessExpression;
    function convertToFunctionBody(node: ConciseBody, multiLine?: boolean): Block;
    function convertFunctionDeclarationToExpression(node: FunctionDeclaration): FunctionExpression;
    function addPrologue(target: Statement[], source: readonly Statement[], ensureUseStrict?: boolean, visitor?: (node: Node) => VisitResult<Node>): number;
    function addStandardPrologue(target: Statement[], source: readonly Statement[], ensureUseStrict?: boolean): number;
    function addCustomPrologue(target: Statement[], source: readonly Statement[], statementOffset: number, visitor?: (node: Node) => VisitResult<Node>): number;
    function addCustomPrologue(target: Statement[], source: readonly Statement[], statementOffset: number | undefined, visitor?: (node: Node) => VisitResult<Node>): number | undefined;
    function findUseStrictPrologue(statements: readonly Statement[]): Statement | undefined;
    function startsWithUseStrict(statements: readonly Statement[]): boolean;
    function ensureUseStrict(statements: NodeArray<Statement>): NodeArray<Statement>;
    function parenthesizeBinaryOperand(binaryOperator: SyntaxKind, operand: Expression, isLeftSideOfBinary: boolean, leftOperand?: Expression): Expression;
    function parenthesizeForConditionalHead(condition: Expression): Expression;
    function parenthesizeSubexpressionOfConditionalExpression(e: Expression): Expression;
    function parenthesizeDefaultExpression(e: Expression): Expression;
    function parenthesizeForNew(expression: Expression): LeftHandSideExpression;
    function parenthesizeForAccess(expression: Expression): LeftHandSideExpression;
    function parenthesizePostfixOperand(operand: Expression): LeftHandSideExpression;
    function parenthesizePrefixOperand(operand: Expression): UnaryExpression;
    function parenthesizeListElements(elements: NodeArray<Expression>): NodeArray<Expression>;
    function parenthesizeExpressionForList(expression: Expression): Expression;
    function parenthesizeExpressionForExpressionStatement(expression: Expression): Expression;
    function parenthesizeConditionalTypeMember(member: TypeNode): TypeNode;
    function parenthesizeElementTypeMember(member: TypeNode): TypeNode;
    function parenthesizeArrayTypeMember(member: TypeNode): TypeNode;
    function parenthesizeElementTypeMembers(members: readonly TypeNode[]): NodeArray<TypeNode>;
    function parenthesizeTypeParameters(typeParameters: readonly TypeNode[] | undefined): MutableNodeArray<TypeNode> | undefined;
    function getLeftmostExpression(node: Expression, stopAtCallExpressions: boolean): Expression;
    function parenthesizeConciseBody(body: ConciseBody): ConciseBody;
    function isCommaSequence(node: Expression): node is (BinaryExpression & {
        operatorToken: Token<SyntaxKind.CommaToken>;
    }) | CommaListExpression;
    const enum OuterExpressionKinds {
        Parentheses = 1,
        Assertions = 2,
        PartiallyEmittedExpressions = 4,
        All = 7
    }
    type OuterExpression = ParenthesizedExpression | TypeAssertion | AsExpression | NonNullExpression | PartiallyEmittedExpression;
    function isOuterExpression(node: Node, kinds?: OuterExpressionKinds): node is OuterExpression;
    function skipOuterExpressions(node: Expression, kinds?: OuterExpressionKinds): Expression;
    function skipOuterExpressions(node: Node, kinds?: OuterExpressionKinds): Node;
    function skipAssertions(node: Expression): Expression;
    function skipAssertions(node: Node): Node;
    function recreateOuterExpressions(outerExpression: Expression | undefined, innerExpression: Expression, kinds?: OuterExpressionKinds): Expression;
    function startOnNewLine<T extends Node>(node: T): T;
    function getExternalHelpersModuleName(node: SourceFile): Identifier | undefined;
    function hasRecordedExternalHelpers(sourceFile: SourceFile): boolean;
    function createExternalHelpersImportDeclarationIfNeeded(sourceFile: SourceFile, compilerOptions: CompilerOptions, hasExportStarsToExportValues?: boolean, hasImportStar?: boolean, hasImportDefault?: boolean): ImportDeclaration | undefined;
    function getOrCreateExternalHelpersModuleNameIfNeeded(node: SourceFile, compilerOptions: CompilerOptions, hasExportStarsToExportValues?: boolean, hasImportStarOrImportDefault?: boolean): Identifier | undefined;
    function getLocalNameForExternalImport(node: ImportDeclaration | ExportDeclaration | ImportEqualsDeclaration, sourceFile: SourceFile): Identifier | undefined;
    function getExternalModuleNameLiteral(importNode: ImportDeclaration | ExportDeclaration | ImportEqualsDeclaration, sourceFile: SourceFile, host: EmitHost, resolver: EmitResolver, compilerOptions: CompilerOptions): StringLiteral | undefined;
    function tryGetModuleNameFromFile(file: SourceFile | undefined, host: EmitHost, options: CompilerOptions): StringLiteral | undefined;
    function getInitializerOfBindingOrAssignmentElement(bindingElement: BindingOrAssignmentElement): Expression | undefined;
    function getTargetOfBindingOrAssignmentElement(bindingElement: BindingOrAssignmentElement): BindingOrAssignmentElementTarget | undefined;
    function getRestIndicatorOfBindingOrAssignmentElement(bindingElement: BindingOrAssignmentElement): BindingOrAssignmentElementRestIndicator | undefined;
    function getPropertyNameOfBindingOrAssignmentElement(bindingElement: BindingOrAssignmentElement): Exclude<PropertyName, PrivateIdentifier> | undefined;
    function tryGetPropertyNameOfBindingOrAssignmentElement(bindingElement: BindingOrAssignmentElement): Exclude<PropertyName, PrivateIdentifier> | undefined;
    function getElementsOfBindingOrAssignmentPattern(name: BindingOrAssignmentPattern): readonly BindingOrAssignmentElement[];
    function convertToArrayAssignmentElement(element: BindingOrAssignmentElement): Expression;
    function convertToObjectAssignmentElement(element: BindingOrAssignmentElement): ObjectLiteralElementLike;
    function convertToAssignmentPattern(node: BindingOrAssignmentPattern): AssignmentPattern;
    function convertToObjectAssignmentPattern(node: ObjectBindingOrAssignmentPattern): ObjectLiteralExpression;
    function convertToArrayAssignmentPattern(node: ArrayBindingOrAssignmentPattern): ArrayLiteralExpression;
    function convertToAssignmentElementTarget(node: BindingOrAssignmentElementTarget): Expression;
}
declare namespace ts {
    function visitNode<T extends Node>(node: T | undefined, visitor: Visitor | undefined, test?: (node: Node) => boolean, lift?: (node: NodeArray<Node>) => T): T;
    function visitNode<T extends Node>(node: T | undefined, visitor: Visitor | undefined, test?: (node: Node) => boolean, lift?: (node: NodeArray<Node>) => T): T | undefined;
    function visitNodes<T extends Node>(nodes: NodeArray<T> | undefined, visitor: Visitor, test?: (node: Node) => boolean, start?: number, count?: number): NodeArray<T>;
    function visitNodes<T extends Node>(nodes: NodeArray<T> | undefined, visitor: Visitor, test?: (node: Node) => boolean, start?: number, count?: number): NodeArray<T> | undefined;
    function visitLexicalEnvironment(statements: NodeArray<Statement>, visitor: Visitor, context: TransformationContext, start?: number, ensureUseStrict?: boolean): NodeArray<Statement>;
    function visitParameterList(nodes: NodeArray<ParameterDeclaration> | undefined, visitor: Visitor, context: TransformationContext, nodesVisitor?: typeof visitNodes): NodeArray<ParameterDeclaration>;
    function visitFunctionBody(node: FunctionBody, visitor: Visitor, context: TransformationContext): FunctionBody;
    function visitFunctionBody(node: FunctionBody | undefined, visitor: Visitor, context: TransformationContext): FunctionBody | undefined;
    function visitFunctionBody(node: ConciseBody, visitor: Visitor, context: TransformationContext): ConciseBody;
    function visitEachChild<T extends Node>(node: T, visitor: Visitor, context: TransformationContext): T;
    function visitEachChild<T extends Node>(node: T | undefined, visitor: Visitor, context: TransformationContext, nodesVisitor?: typeof visitNodes, tokenVisitor?: Visitor): T | undefined;
}
declare namespace ts {
    function reduceEachChild<T>(node: Node | undefined, initial: T, cbNode: (memo: T, node: Node) => T, cbNodeArray?: (memo: T, nodes: NodeArray<Node>) => T): T;
    function mergeLexicalEnvironment(statements: NodeArray<Statement>, declarations: readonly Statement[] | undefined): NodeArray<Statement>;
    function mergeLexicalEnvironment(statements: Statement[], declarations: readonly Statement[] | undefined): Statement[];
    function liftToBlock(nodes: readonly Node[]): Statement;
    function aggregateTransformFlags<T extends Node>(node: T): T;
}
declare namespace ts {
    interface SourceMapGeneratorOptions {
        extendedDiagnostics?: boolean;
    }
    function createSourceMapGenerator(host: EmitHost, file: string, sourceRoot: string, sourcesDirectoryPath: string, generatorOptions: SourceMapGeneratorOptions): SourceMapGenerator;
    interface LineInfo {
        getLineCount(): number;
        getLineText(line: number): string;
    }
    function getLineInfo(text: string, lineStarts: readonly number[]): LineInfo;
    function tryGetSourceMappingURL(lineInfo: LineInfo): string | undefined;
    function isRawSourceMap(x: any): x is RawSourceMap;
    function tryParseRawSourceMap(text: string): RawSourceMap | undefined;
    interface MappingsDecoder extends Iterator<Mapping> {
        readonly pos: number;
        readonly error: string | undefined;
        readonly state: Required<Mapping>;
    }
    interface Mapping {
        generatedLine: number;
        generatedCharacter: number;
        sourceIndex?: number;
        sourceLine?: number;
        sourceCharacter?: number;
        nameIndex?: number;
    }
    interface SourceMapping extends Mapping {
        sourceIndex: number;
        sourceLine: number;
        sourceCharacter: number;
    }
    function decodeMappings(mappings: string): MappingsDecoder;
    function sameMapping<T extends Mapping>(left: T, right: T): boolean;
    function isSourceMapping(mapping: Mapping): mapping is SourceMapping;
    function createDocumentPositionMapper(host: DocumentPositionMapperHost, map: RawSourceMap, mapPath: string): DocumentPositionMapper;
    const identitySourceMapConsumer: DocumentPositionMapper;
}
declare namespace ts {
    function getOriginalNodeId(node: Node): number;
    interface ExternalModuleInfo {
        externalImports: (ImportDeclaration | ImportEqualsDeclaration | ExportDeclaration)[];
        externalHelpersImportDeclaration: ImportDeclaration | undefined;
        exportSpecifiers: Map<ExportSpecifier[]>;
        exportedBindings: Identifier[][];
        exportedNames: Identifier[] | undefined;
        exportEquals: ExportAssignment | undefined;
        hasExportStarsToExportValues: boolean;
    }
    function chainBundle(transformSourceFile: (x: SourceFile) => SourceFile): (x: SourceFile | Bundle) => SourceFile | Bundle;
    function getExportNeedsImportStarHelper(node: ExportDeclaration): boolean;
    function getImportNeedsImportStarHelper(node: ImportDeclaration): boolean;
    function getImportNeedsImportDefaultHelper(node: ImportDeclaration): boolean;
    function collectExternalModuleInfo(sourceFile: SourceFile, resolver: EmitResolver, compilerOptions: CompilerOptions): ExternalModuleInfo;
    function isSimpleCopiableExpression(expression: Expression): boolean;
    function isSimpleInlineableExpression(expression: Expression): boolean;
    function isCompoundAssignment(kind: BinaryOperator): kind is CompoundAssignmentOperator;
    function getNonAssignmentOperatorForCompoundAssignment(kind: CompoundAssignmentOperator): BitwiseOperatorOrHigher;
    function addPrologueDirectivesAndInitialSuperCall(ctor: ConstructorDeclaration, result: Statement[], visitor: Visitor): number;
    function helperString(input: TemplateStringsArray, ...args: string[]): (uniqueName: EmitHelperUniqueNameCallback) => string;
    function getProperties(node: ClassExpression | ClassDeclaration, requireInitializer: boolean, isStatic: boolean): readonly PropertyDeclaration[];
    function isInitializedProperty(member: ClassElement): member is PropertyDeclaration & {
        initializer: Expression;
    };
}
declare namespace ts {
    const enum FlattenLevel {
        All = 0,
        ObjectRest = 1
    }
    function flattenDestructuringAssignment(node: VariableDeclaration | DestructuringAssignment, visitor: ((node: Node) => VisitResult<Node>) | undefined, context: TransformationContext, level: FlattenLevel, needsValue?: boolean, createAssignmentCallback?: (name: Identifier, value: Expression, location?: TextRange) => Expression): Expression;
    function flattenDestructuringBinding(node: VariableDeclaration | ParameterDeclaration, visitor: (node: Node) => VisitResult<Node>, context: TransformationContext, level: FlattenLevel, rval?: Expression, hoistTempVariables?: boolean, skipInitializer?: boolean): VariableDeclaration[];
    const restHelper: UnscopedEmitHelper;
}
declare namespace ts {
    enum ProcessLevel {
        LiftRestriction = 0,
        All = 1
    }
    function processTaggedTemplateExpression(context: TransformationContext, node: TaggedTemplateExpression, visitor: ((node: Node) => VisitResult<Node>) | undefined, currentSourceFile: SourceFile, recordTaggedTemplateString: (temp: Identifier) => void, level: ProcessLevel): CallExpression | TaggedTemplateExpression;
    const templateObjectHelper: UnscopedEmitHelper;
}
declare namespace ts {
    function transformTypeScript(context: TransformationContext): (node: SourceFile | Bundle) => SourceFile | Bundle;
    const decorateHelper: UnscopedEmitHelper;
    const metadataHelper: UnscopedEmitHelper;
    const paramHelper: UnscopedEmitHelper;
}
declare namespace ts {
    function transformClassFields(context: TransformationContext): (x: SourceFile | Bundle) => SourceFile | Bundle;
    const classPrivateFieldGetHelper: UnscopedEmitHelper;
    const classPrivateFieldSetHelper: UnscopedEmitHelper;
}
declare namespace ts {
    function transformES2017(context: TransformationContext): (x: SourceFile | Bundle) => SourceFile | Bundle;
    function createSuperAccessVariableStatement(resolver: EmitResolver, node: FunctionLikeDeclaration, names: UnderscoreEscapedMap<true>): VariableStatement;
    const awaiterHelper: UnscopedEmitHelper;
    const asyncSuperHelper: EmitHelper;
    const advancedAsyncSuperHelper: EmitHelper;
}
declare namespace ts {
    function transformES2018(context: TransformationContext): (x: SourceFile | Bundle) => SourceFile | Bundle;
    const assignHelper: UnscopedEmitHelper;
    function createAssignHelper(context: TransformationContext, attributesSegments: Expression[]): CallExpression;
    const awaitHelper: UnscopedEmitHelper;
    const asyncGeneratorHelper: UnscopedEmitHelper;
    const asyncDelegator: UnscopedEmitHelper;
    const asyncValues: UnscopedEmitHelper;
}
declare namespace ts {
    function transformES2019(context: TransformationContext): (x: SourceFile | Bundle) => SourceFile | Bundle;
}
declare namespace ts {
    function transformES2020(context: TransformationContext): (x: SourceFile | Bundle) => SourceFile | Bundle;
}
declare namespace ts {
    function transformESNext(context: TransformationContext): (x: SourceFile | Bundle) => SourceFile | Bundle;
}
declare namespace ts {
    function transformJsx(context: TransformationContext): (x: SourceFile | Bundle) => SourceFile | Bundle;
}
declare namespace ts {
    function transformES2016(context: TransformationContext): (x: SourceFile | Bundle) => SourceFile | Bundle;
}
declare namespace ts {
    function transformES2015(context: TransformationContext): (x: SourceFile | Bundle) => SourceFile | Bundle;
    const extendsHelper: UnscopedEmitHelper;
}
declare namespace ts {
    function transformES5(context: TransformationContext): (x: SourceFile | Bundle) => SourceFile | Bundle;
}
declare namespace ts {
    function transformGenerators(context: TransformationContext): (x: SourceFile | Bundle) => SourceFile | Bundle;
    const generatorHelper: UnscopedEmitHelper;
}
declare namespace ts {
    function transformModule(context: TransformationContext): (x: SourceFile | Bundle) => SourceFile | Bundle;
    const createBindingHelper: UnscopedEmitHelper;
    const setModuleDefaultHelper: UnscopedEmitHelper;
    const importStarHelper: UnscopedEmitHelper;
    const importDefaultHelper: UnscopedEmitHelper;
}
declare namespace ts {
    function transformSystemModule(context: TransformationContext): (x: SourceFile | Bundle) => SourceFile | Bundle;
}
declare namespace ts {
    function transformECMAScriptModule(context: TransformationContext): (x: SourceFile | Bundle) => SourceFile | Bundle;
}
declare namespace ts {
    type GetSymbolAccessibilityDiagnostic = (symbolAccessibilityResult: SymbolAccessibilityResult) => (SymbolAccessibilityDiagnostic | undefined);
    interface SymbolAccessibilityDiagnostic {
        errorNode: Node;
        diagnosticMessage: DiagnosticMessage;
        typeName?: DeclarationName | QualifiedName;
    }
    type DeclarationDiagnosticProducing = VariableDeclaration | PropertyDeclaration | PropertySignature | BindingElement | SetAccessorDeclaration | GetAccessorDeclaration | ConstructSignatureDeclaration | CallSignatureDeclaration | MethodDeclaration | MethodSignature | FunctionDeclaration | ParameterDeclaration | TypeParameterDeclaration | ExpressionWithTypeArguments | ImportEqualsDeclaration | TypeAliasDeclaration | ConstructorDeclaration | IndexSignatureDeclaration | PropertyAccessExpression;
    function canProduceDiagnostics(node: Node): node is DeclarationDiagnosticProducing;
    function createGetSymbolAccessibilityDiagnosticForNodeName(node: DeclarationDiagnosticProducing): (symbolAccessibilityResult: SymbolAccessibilityResult) => SymbolAccessibilityDiagnostic | undefined;
    function createGetSymbolAccessibilityDiagnosticForNode(node: DeclarationDiagnosticProducing): (symbolAccessibilityResult: SymbolAccessibilityResult) => SymbolAccessibilityDiagnostic | undefined;
}
declare namespace ts {
    function getDeclarationDiagnostics(host: EmitHost, resolver: EmitResolver, file: SourceFile | undefined): DiagnosticWithLocation[] | undefined;
    function isInternalDeclaration(node: Node, currentSourceFile: SourceFile): boolean | 0 | undefined;
    function transformDeclarations(context: TransformationContext): {
        (node: Bundle): Bundle;
        (node: SourceFile): SourceFile;
        (node: SourceFile | Bundle): SourceFile | Bundle;
    };
}
declare namespace ts {
    const noTransformers: EmitTransformers;
    function getTransformers(compilerOptions: CompilerOptions, customTransformers?: CustomTransformers, emitOnlyDtsFiles?: boolean): EmitTransformers;
    function noEmitSubstitution(_hint: EmitHint, node: Node): Node;
    function noEmitNotification(hint: EmitHint, node: Node, callback: (hint: EmitHint, node: Node) => void): void;
    function transformNodes<T extends Node>(resolver: EmitResolver | undefined, host: EmitHost | undefined, options: CompilerOptions, nodes: readonly T[], transformers: readonly TransformerFactory<T>[], allowDtsFiles: boolean): TransformationResult<T>;
}
declare namespace ts {
    function isBuildInfoFile(file: string): boolean;
    function forEachEmittedFile<T>(host: EmitHost, action: (emitFileNames: EmitFileNames, sourceFileOrBundle: SourceFile | Bundle | undefined) => T, sourceFilesOrTargetSourceFile?: readonly SourceFile[] | SourceFile, forceDtsEmit?: boolean, onlyBuildInfo?: boolean, includeBuildInfo?: boolean): T | undefined;
    function getTsBuildInfoEmitOutputFilePath(options: CompilerOptions): string | undefined;
    function getOutputPathsForBundle(options: CompilerOptions, forceDtsPaths: boolean): EmitFileNames;
    function getOutputPathsFor(sourceFile: SourceFile | Bundle, host: EmitHost, forceDtsPaths: boolean): EmitFileNames;
    function getOutputExtension(sourceFile: SourceFile, options: CompilerOptions): Extension;
    function getOutputDeclarationFileName(inputFileName: string, configFile: ParsedCommandLine, ignoreCase: boolean): string;
    function getAllProjectOutputs(configFile: ParsedCommandLine, ignoreCase: boolean): readonly string[];
    function getOutputFileNames(commandLine: ParsedCommandLine, inputFileName: string, ignoreCase: boolean): readonly string[];
    function getFirstProjectOutput(configFile: ParsedCommandLine, ignoreCase: boolean): string;
    function emitFiles(resolver: EmitResolver, host: EmitHost, targetSourceFile: SourceFile | undefined, { scriptTransformers, declarationTransformers }: EmitTransformers, emitOnlyDtsFiles?: boolean, onlyBuildInfo?: boolean, forceDtsEmit?: boolean): EmitResult;
    function getBuildInfoText(buildInfo: BuildInfo): string;
    function getBuildInfo(buildInfoText: string): BuildInfo;
    const notImplementedResolver: EmitResolver;
    type EmitUsingBuildInfoResult = string | readonly OutputFile[];
    interface EmitUsingBuildInfoHost extends ModuleResolutionHost {
        getCurrentDirectory(): string;
        getCanonicalFileName(fileName: string): string;
        useCaseSensitiveFileNames(): boolean;
        getNewLine(): string;
    }
    function emitUsingBuildInfo(config: ParsedCommandLine, host: EmitUsingBuildInfoHost, getCommandLine: (ref: ProjectReference) => ParsedCommandLine | undefined, customTransformers?: CustomTransformers): EmitUsingBuildInfoResult;
    function createPrinter(printerOptions?: PrinterOptions, handlers?: PrintHandlers): Printer;
}
declare namespace ts {
    export interface DirectoryStructureHost {
        fileExists(path: string): boolean;
        readFile(path: string, encoding?: string): string | undefined;
        directoryExists?(path: string): boolean;
        getDirectories?(path: string): string[];
        readDirectory?(path: string, extensions?: readonly string[], exclude?: readonly string[], include?: readonly string[], depth?: number): string[];
        realpath?(path: string): string;
        createDirectory?(path: string): void;
        writeFile?(path: string, data: string, writeByteOrderMark?: boolean): void;
    }
    interface FileAndDirectoryExistence {
        fileExists: boolean;
        directoryExists: boolean;
    }
    export interface CachedDirectoryStructureHost extends DirectoryStructureHost {
        useCaseSensitiveFileNames: boolean;
        getDirectories(path: string): string[];
        readDirectory(path: string, extensions?: readonly string[], exclude?: readonly string[], include?: readonly string[], depth?: number): string[];
        addOrDeleteFileOrDirectory(fileOrDirectory: string, fileOrDirectoryPath: Path): FileAndDirectoryExistence | undefined;
        addOrDeleteFile(fileName: string, filePath: Path, eventKind: FileWatcherEventKind): void;
        clearCache(): void;
    }
    export function createCachedDirectoryStructureHost(host: DirectoryStructureHost, currentDirectory: string, useCaseSensitiveFileNames: boolean): CachedDirectoryStructureHost | undefined;
    export enum ConfigFileProgramReloadLevel {
        None = 0,
        Partial = 1,
        Full = 2
    }
    export function updateMissingFilePathsWatch(program: Program, missingFileWatches: Map<FileWatcher>, createMissingFileWatch: (missingFilePath: Path) => FileWatcher): void;
    export interface WildcardDirectoryWatcher {
        watcher: FileWatcher;
        flags: WatchDirectoryFlags;
    }
    export function updateWatchingWildcardDirectories(existingWatchedForWildcards: Map<WildcardDirectoryWatcher>, wildcardDirectories: Map<WatchDirectoryFlags>, watchDirectory: (directory: string, flags: WatchDirectoryFlags) => FileWatcher): void;
    export function isEmittedFileOfProgram(program: Program | undefined, file: string): boolean;
    export enum WatchLogLevel {
        None = 0,
        TriggerOnly = 1,
        Verbose = 2
    }
    export interface WatchFileHost {
        watchFile(path: string, callback: FileWatcherCallback, pollingInterval?: number, options?: WatchOptions): FileWatcher;
    }
    export interface WatchDirectoryHost {
        watchDirectory(path: string, callback: DirectoryWatcherCallback, recursive?: boolean, options?: WatchOptions): FileWatcher;
    }
    export type WatchFile<X, Y> = (host: WatchFileHost, file: string, callback: FileWatcherCallback, pollingInterval: PollingInterval, options: WatchOptions | undefined, detailInfo1: X, detailInfo2?: Y) => FileWatcher;
    export type FilePathWatcherCallback = (fileName: string, eventKind: FileWatcherEventKind, filePath: Path) => void;
    export type WatchFilePath<X, Y> = (host: WatchFileHost, file: string, callback: FilePathWatcherCallback, pollingInterval: PollingInterval, options: WatchOptions | undefined, path: Path, detailInfo1: X, detailInfo2?: Y) => FileWatcher;
    export type WatchDirectory<X, Y> = (host: WatchDirectoryHost, directory: string, callback: DirectoryWatcherCallback, flags: WatchDirectoryFlags, options: WatchOptions | undefined, detailInfo1: X, detailInfo2?: Y) => FileWatcher;
    export interface WatchFactory<X, Y> {
        watchFile: WatchFile<X, Y>;
        watchFilePath: WatchFilePath<X, Y>;
        watchDirectory: WatchDirectory<X, Y>;
    }
    export function getWatchFactory<X, Y = undefined>(watchLogLevel: WatchLogLevel, log: (s: string) => void, getDetailWatchInfo?: GetDetailWatchInfo<X, Y>): WatchFactory<X, Y>;
    export type GetDetailWatchInfo<X, Y> = (detailInfo1: X, detailInfo2: Y | undefined) => string;
    export function getFallbackOptions(options: WatchOptions | undefined): WatchOptions;
    export function closeFileWatcherOf<T extends {
        watcher: FileWatcher;
    }>(objWithWatcher: T): void;
    export {};
}
declare namespace ts {
    export function findConfigFile(searchPath: string, fileExists: (fileName: string) => boolean, configName?: string): string | undefined;
    export function resolveTripleslashReference(moduleName: string, containingFile: string): string;
    export function computeCommonSourceDirectoryOfFilenames(fileNames: string[], currentDirectory: string, getCanonicalFileName: GetCanonicalFileName): string;
    export function createCompilerHost(options: CompilerOptions, setParentNodes?: boolean): CompilerHost;
    export function createCompilerHostWorker(options: CompilerOptions, setParentNodes?: boolean, system?: System): CompilerHost;
    interface CompilerHostLikeForCache {
        fileExists(fileName: string): boolean;
        readFile(fileName: string, encoding?: string): string | undefined;
        directoryExists?(directory: string): boolean;
        createDirectory?(directory: string): void;
        writeFile?: WriteFileCallback;
    }
    export function changeCompilerHostLikeToUseCache(host: CompilerHostLikeForCache, toPath: (fileName: string) => Path, getSourceFile?: CompilerHost["getSourceFile"]): {
        originalReadFile: (fileName: string, encoding?: string | undefined) => string | undefined;
        originalFileExists: (fileName: string) => boolean;
        originalDirectoryExists: ((directory: string) => boolean) | undefined;
        originalCreateDirectory: ((directory: string) => void) | undefined;
        originalWriteFile: WriteFileCallback | undefined;
        getSourceFileWithCache: ((fileName: string, languageVersion: ScriptTarget, onError?: ((message: string) => void) | undefined, shouldCreateNewSourceFile?: boolean | undefined) => SourceFile | undefined) | undefined;
        readFileWithCache: (fileName: string) => string | undefined;
    };
    export function getPreEmitDiagnostics(program: Program, sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly Diagnostic[];
    export function getPreEmitDiagnostics(program: BuilderProgram, sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly Diagnostic[];
    export interface FormatDiagnosticsHost {
        getCurrentDirectory(): string;
        getCanonicalFileName(fileName: string): string;
        getNewLine(): string;
    }
    export function formatDiagnostics(diagnostics: readonly Diagnostic[], host: FormatDiagnosticsHost): string;
    export function formatDiagnostic(diagnostic: Diagnostic, host: FormatDiagnosticsHost): string;
    export enum ForegroundColorEscapeSequences {
        Grey = "\u001B[90m",
        Red = "\u001B[91m",
        Yellow = "\u001B[93m",
        Blue = "\u001B[94m",
        Cyan = "\u001B[96m"
    }
    export function formatColorAndReset(text: string, formatStyle: string): string;
    export function formatLocation(file: SourceFile, start: number, host: FormatDiagnosticsHost, color?: typeof formatColorAndReset): string;
    export function formatDiagnosticsWithColorAndContext(diagnostics: readonly Diagnostic[], host: FormatDiagnosticsHost): string;
    export function flattenDiagnosticMessageText(diag: string | DiagnosticMessageChain | undefined, newLine: string, indent?: number): string;
    export function loadWithLocalCache<T>(names: string[], containingFile: string, redirectedReference: ResolvedProjectReference | undefined, loader: (name: string, containingFile: string, redirectedReference: ResolvedProjectReference | undefined) => T): T[];
    export const inferredTypesContainingFile = "__inferred type names__.ts";
    export function isProgramUptoDate(program: Program | undefined, rootFileNames: string[], newOptions: CompilerOptions, getSourceVersion: (path: Path, fileName: string) => string | undefined, fileExists: (fileName: string) => boolean, hasInvalidatedResolution: HasInvalidatedResolution, hasChangedAutomaticTypeDirectiveNames: boolean, projectReferences: readonly ProjectReference[] | undefined): boolean;
    export function getConfigFileParsingDiagnostics(configFileParseResult: ParsedCommandLine): readonly Diagnostic[];
    export function createProgram(createProgramOptions: CreateProgramOptions): Program;
    export function createProgram(rootNames: readonly string[], options: CompilerOptions, host?: CompilerHost, oldProgram?: Program, configFileParsingDiagnostics?: readonly Diagnostic[]): Program;
    export function handleNoEmitOptions(program: ProgramToEmitFilesAndReportErrors, sourceFile: SourceFile | undefined, cancellationToken: CancellationToken | undefined): EmitResult | undefined;
    interface CompilerHostLike {
        useCaseSensitiveFileNames(): boolean;
        getCurrentDirectory(): string;
        fileExists(fileName: string): boolean;
        readFile(fileName: string): string | undefined;
        readDirectory?(rootDir: string, extensions: readonly string[], excludes: readonly string[] | undefined, includes: readonly string[], depth?: number): string[];
        trace?(s: string): void;
        onUnRecoverableConfigFileDiagnostic?: DiagnosticReporter;
    }
    export function parseConfigHostFromCompilerHostLike(host: CompilerHostLike, directoryStructureHost?: DirectoryStructureHost): ParseConfigFileHost;
    export interface ResolveProjectReferencePathHost {
        fileExists(fileName: string): boolean;
    }
    export function createPrependNodes(projectReferences: readonly ProjectReference[] | undefined, getCommandLine: (ref: ProjectReference, index: number) => ParsedCommandLine | undefined, readFile: (path: string) => string | undefined): InputFiles[];
    export function resolveProjectReferencePath(ref: ProjectReference): ResolvedConfigFileName;
    export function resolveProjectReferencePath(host: ResolveProjectReferencePathHost, ref: ProjectReference): ResolvedConfigFileName;
    export function getResolutionDiagnostic(options: CompilerOptions, { extension }: ResolvedModuleFull): DiagnosticMessage | undefined;
    export {};
}
declare namespace ts {
    interface EmitOutput {
        outputFiles: OutputFile[];
        emitSkipped: boolean;
        exportedModulesFromDeclarationEmit?: ExportedModulesFromDeclarationEmit;
    }
    interface OutputFile {
        name: string;
        writeByteOrderMark: boolean;
        text: string;
    }
}
declare namespace ts {
    function getFileEmitOutput(program: Program, sourceFile: SourceFile, emitOnlyDtsFiles: boolean, cancellationToken?: CancellationToken, customTransformers?: CustomTransformers, forceDtsEmit?: boolean): EmitOutput;
    interface ReusableBuilderState {
        fileInfos: ReadonlyMap<BuilderState.FileInfo>;
        readonly referencedMap?: ReadonlyMap<BuilderState.ReferencedSet> | undefined;
        readonly exportedModulesMap?: ReadonlyMap<BuilderState.ReferencedSet> | undefined;
    }
    interface BuilderState {
        fileInfos: Map<BuilderState.FileInfo>;
        readonly referencedMap: ReadonlyMap<BuilderState.ReferencedSet> | undefined;
        readonly exportedModulesMap: Map<BuilderState.ReferencedSet> | undefined;
        hasCalledUpdateShapeSignature: Map<true>;
        allFilesExcludingDefaultLibraryFile?: readonly SourceFile[];
        allFileNames?: readonly string[];
    }
    namespace BuilderState {
        interface FileInfo {
            readonly version: string;
            signature: string | undefined;
        }
        type ReferencedSet = ReadonlyMap<true>;
        type ComputeHash = (data: string) => string;
        type ComputingExportedModulesMap = Map<ReferencedSet | false>;
        function canReuseOldState(newReferencedMap: ReadonlyMap<ReferencedSet> | undefined, oldState: Readonly<ReusableBuilderState> | undefined): boolean | undefined;
        function create(newProgram: Program, getCanonicalFileName: GetCanonicalFileName, oldState?: Readonly<ReusableBuilderState>): BuilderState;
        function releaseCache(state: BuilderState): void;
        function clone(state: Readonly<BuilderState>): BuilderState;
        function getFilesAffectedBy(state: BuilderState, programOfThisState: Program, path: Path, cancellationToken: CancellationToken | undefined, computeHash: ComputeHash, cacheToUpdateSignature?: Map<string>, exportedModulesMapCache?: ComputingExportedModulesMap): readonly SourceFile[];
        function updateSignaturesFromCache(state: BuilderState, signatureCache: Map<string>): void;
        function updateShapeSignature(state: Readonly<BuilderState>, programOfThisState: Program, sourceFile: SourceFile, cacheToUpdateSignature: Map<string>, cancellationToken: CancellationToken | undefined, computeHash: ComputeHash, exportedModulesMapCache?: ComputingExportedModulesMap): boolean;
        function updateExportedFilesMapFromCache(state: BuilderState, exportedModulesMapCache: ComputingExportedModulesMap | undefined): void;
        function getAllDependencies(state: BuilderState, programOfThisState: Program, sourceFile: SourceFile): readonly string[];
        function getReferencedByPaths(state: Readonly<BuilderState>, referencedFilePath: Path): Path[];
    }
    function cloneMapOrUndefined<T>(map: ReadonlyMap<T> | undefined): Map<T> | undefined;
}
declare namespace ts {
    interface ReusableDiagnostic extends ReusableDiagnosticRelatedInformation {
        reportsUnnecessary?: {};
        source?: string;
        relatedInformation?: ReusableDiagnosticRelatedInformation[];
    }
    interface ReusableDiagnosticRelatedInformation {
        category: DiagnosticCategory;
        code: number;
        file: string | undefined;
        start: number | undefined;
        length: number | undefined;
        messageText: string | ReusableDiagnosticMessageChain;
    }
    type ReusableDiagnosticMessageChain = DiagnosticMessageChain;
    interface ReusableBuilderProgramState extends ReusableBuilderState {
        semanticDiagnosticsPerFile?: ReadonlyMap<readonly ReusableDiagnostic[] | readonly Diagnostic[]> | undefined;
        changedFilesSet?: ReadonlyMap<true>;
        affectedFiles?: readonly SourceFile[] | undefined;
        currentChangedFilePath?: Path | undefined;
        currentAffectedFilesSignatures?: ReadonlyMap<string> | undefined;
        currentAffectedFilesExportedModulesMap?: Readonly<BuilderState.ComputingExportedModulesMap> | undefined;
        semanticDiagnosticsFromOldState?: Map<true>;
        program?: Program | undefined;
        compilerOptions: CompilerOptions;
        affectedFilesPendingEmit?: readonly Path[] | undefined;
        affectedFilesPendingEmitKind?: ReadonlyMap<BuilderFileEmit> | undefined;
        affectedFilesPendingEmitIndex?: number | undefined;
        hasReusableDiagnostic?: true;
    }
    const enum BuilderFileEmit {
        DtsOnly = 0,
        Full = 1
    }
    interface BuilderProgramState extends BuilderState {
        semanticDiagnosticsPerFile: Map<readonly Diagnostic[]> | undefined;
        changedFilesSet: Map<true>;
        affectedFiles: readonly SourceFile[] | undefined;
        affectedFilesIndex: number | undefined;
        currentChangedFilePath: Path | undefined;
        currentAffectedFilesSignatures: Map<string> | undefined;
        currentAffectedFilesExportedModulesMap: BuilderState.ComputingExportedModulesMap | undefined;
        seenAffectedFiles: Map<true> | undefined;
        cleanedDiagnosticsOfLibFiles?: boolean;
        semanticDiagnosticsFromOldState?: Map<true>;
        program: Program | undefined;
        compilerOptions: CompilerOptions;
        affectedFilesPendingEmit: Path[] | undefined;
        affectedFilesPendingEmitKind: Map<BuilderFileEmit> | undefined;
        affectedFilesPendingEmitIndex: number | undefined;
        emittedBuildInfo?: boolean;
        seenEmittedFiles: Map<BuilderFileEmit> | undefined;
        programEmitComplete?: true;
    }
    type ProgramBuildInfoDiagnostic = string | [string, readonly ReusableDiagnostic[]];
    interface ProgramBuildInfo {
        fileInfos: MapLike<BuilderState.FileInfo>;
        options: CompilerOptions;
        referencedMap?: MapLike<string[]>;
        exportedModulesMap?: MapLike<string[]>;
        semanticDiagnosticsPerFile?: ProgramBuildInfoDiagnostic[];
    }
    enum BuilderProgramKind {
        SemanticDiagnosticsBuilderProgram = 0,
        EmitAndSemanticDiagnosticsBuilderProgram = 1
    }
    interface BuilderCreationParameters {
        newProgram: Program;
        host: BuilderProgramHost;
        oldProgram: BuilderProgram | undefined;
        configFileParsingDiagnostics: readonly Diagnostic[];
    }
    function getBuilderCreationParameters(newProgramOrRootNames: Program | readonly string[] | undefined, hostOrOptions: BuilderProgramHost | CompilerOptions | undefined, oldProgramOrHost?: BuilderProgram | CompilerHost, configFileParsingDiagnosticsOrOldProgram?: readonly Diagnostic[] | BuilderProgram, configFileParsingDiagnostics?: readonly Diagnostic[], projectReferences?: readonly ProjectReference[]): BuilderCreationParameters;
    function createBuilderProgram(kind: BuilderProgramKind.SemanticDiagnosticsBuilderProgram, builderCreationParameters: BuilderCreationParameters): SemanticDiagnosticsBuilderProgram;
    function createBuilderProgram(kind: BuilderProgramKind.EmitAndSemanticDiagnosticsBuilderProgram, builderCreationParameters: BuilderCreationParameters): EmitAndSemanticDiagnosticsBuilderProgram;
    function createBuildProgramUsingProgramBuildInfo(program: ProgramBuildInfo, buildInfoPath: string, host: ReadBuildProgramHost): EmitAndSemanticDiagnosticsBuilderProgram;
    function createRedirectedBuilderProgram(state: {
        program: Program | undefined;
        compilerOptions: CompilerOptions;
    }, configFileParsingDiagnostics: readonly Diagnostic[]): BuilderProgram;
}
declare namespace ts {
    type AffectedFileResult<T> = {
        result: T;
        affected: SourceFile | Program;
    } | undefined;
    interface BuilderProgramHost {
        useCaseSensitiveFileNames(): boolean;
        createHash?: (data: string) => string;
        writeFile?: WriteFileCallback;
    }
    interface BuilderProgram {
        getState(): ReusableBuilderProgramState;
        backupState(): void;
        restoreState(): void;
        getProgram(): Program;
        getProgramOrUndefined(): Program | undefined;
        releaseProgram(): void;
        getCompilerOptions(): CompilerOptions;
        getSourceFile(fileName: string): SourceFile | undefined;
        getSourceFiles(): readonly SourceFile[];
        getOptionsDiagnostics(cancellationToken?: CancellationToken): readonly Diagnostic[];
        getGlobalDiagnostics(cancellationToken?: CancellationToken): readonly Diagnostic[];
        getConfigFileParsingDiagnostics(): readonly Diagnostic[];
        getSyntacticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly Diagnostic[];
        getDeclarationDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly DiagnosticWithLocation[];
        getAllDependencies(sourceFile: SourceFile): readonly string[];
        getSemanticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly Diagnostic[];
        emit(targetSourceFile?: SourceFile, writeFile?: WriteFileCallback, cancellationToken?: CancellationToken, emitOnlyDtsFiles?: boolean, customTransformers?: CustomTransformers): EmitResult;
        getCurrentDirectory(): string;
        close(): void;
    }
    interface SemanticDiagnosticsBuilderProgram extends BuilderProgram {
        getSemanticDiagnosticsOfNextAffectedFile(cancellationToken?: CancellationToken, ignoreSourceFile?: (sourceFile: SourceFile) => boolean): AffectedFileResult<readonly Diagnostic[]>;
    }
    interface EmitAndSemanticDiagnosticsBuilderProgram extends SemanticDiagnosticsBuilderProgram {
        emitNextAffectedFile(writeFile?: WriteFileCallback, cancellationToken?: CancellationToken, emitOnlyDtsFiles?: boolean, customTransformers?: CustomTransformers): AffectedFileResult<EmitResult>;
    }
    function createSemanticDiagnosticsBuilderProgram(newProgram: Program, host: BuilderProgramHost, oldProgram?: SemanticDiagnosticsBuilderProgram, configFileParsingDiagnostics?: readonly Diagnostic[]): SemanticDiagnosticsBuilderProgram;
    function createSemanticDiagnosticsBuilderProgram(rootNames: readonly string[] | undefined, options: CompilerOptions | undefined, host?: CompilerHost, oldProgram?: SemanticDiagnosticsBuilderProgram, configFileParsingDiagnostics?: readonly Diagnostic[], projectReferences?: readonly ProjectReference[]): SemanticDiagnosticsBuilderProgram;
    function createEmitAndSemanticDiagnosticsBuilderProgram(newProgram: Program, host: BuilderProgramHost, oldProgram?: EmitAndSemanticDiagnosticsBuilderProgram, configFileParsingDiagnostics?: readonly Diagnostic[]): EmitAndSemanticDiagnosticsBuilderProgram;
    function createEmitAndSemanticDiagnosticsBuilderProgram(rootNames: readonly string[] | undefined, options: CompilerOptions | undefined, host?: CompilerHost, oldProgram?: EmitAndSemanticDiagnosticsBuilderProgram, configFileParsingDiagnostics?: readonly Diagnostic[], projectReferences?: readonly ProjectReference[]): EmitAndSemanticDiagnosticsBuilderProgram;
    function createAbstractBuilder(newProgram: Program, host: BuilderProgramHost, oldProgram?: BuilderProgram, configFileParsingDiagnostics?: readonly Diagnostic[]): BuilderProgram;
    function createAbstractBuilder(rootNames: readonly string[] | undefined, options: CompilerOptions | undefined, host?: CompilerHost, oldProgram?: BuilderProgram, configFileParsingDiagnostics?: readonly Diagnostic[], projectReferences?: readonly ProjectReference[]): BuilderProgram;
}
declare namespace ts {
    export interface ResolutionCache {
        startRecordingFilesWithChangedResolutions(): void;
        finishRecordingFilesWithChangedResolutions(): Path[] | undefined;
        resolveModuleNames(moduleNames: string[], containingFile: string, reusedNames: string[] | undefined, redirectedReference?: ResolvedProjectReference): (ResolvedModuleFull | undefined)[];
        getResolvedModuleWithFailedLookupLocationsFromCache(moduleName: string, containingFile: string): CachedResolvedModuleWithFailedLookupLocations | undefined;
        resolveTypeReferenceDirectives(typeDirectiveNames: string[], containingFile: string, redirectedReference?: ResolvedProjectReference): (ResolvedTypeReferenceDirective | undefined)[];
        invalidateResolutionOfFile(filePath: Path): void;
        removeResolutionsOfFile(filePath: Path): void;
        removeResolutionsFromProjectReferenceRedirects(filePath: Path): void;
        setFilesWithInvalidatedNonRelativeUnresolvedImports(filesWithUnresolvedImports: Map<readonly string[]>): void;
        createHasInvalidatedResolution(forceAllFilesAsInvalidated?: boolean): HasInvalidatedResolution;
        startCachingPerDirectoryResolution(): void;
        finishCachingPerDirectoryResolution(): void;
        updateTypeRootsWatch(): void;
        closeTypeRootsWatch(): void;
        clear(): void;
    }
    interface ResolutionWithFailedLookupLocations {
        readonly failedLookupLocations: readonly string[];
        isInvalidated?: boolean;
        refCount?: number;
    }
    interface CachedResolvedModuleWithFailedLookupLocations extends ResolvedModuleWithFailedLookupLocations, ResolutionWithFailedLookupLocations {
    }
    export interface ResolutionCacheHost extends ModuleResolutionHost {
        toPath(fileName: string): Path;
        getCanonicalFileName: GetCanonicalFileName;
        getCompilationSettings(): CompilerOptions;
        watchDirectoryOfFailedLookupLocation(directory: string, cb: DirectoryWatcherCallback, flags: WatchDirectoryFlags): FileWatcher;
        onInvalidatedResolution(): void;
        watchTypeRootsDirectory(directory: string, cb: DirectoryWatcherCallback, flags: WatchDirectoryFlags): FileWatcher;
        onChangedAutomaticTypeDirectiveNames(): void;
        getCachedDirectoryStructureHost(): CachedDirectoryStructureHost | undefined;
        projectName?: string;
        getGlobalCache?(): string | undefined;
        globalCacheResolutionModuleName?(externalModuleName: string): string;
        writeLog(s: string): void;
        maxNumberOfFilesToIterateForInvalidation?: number;
        getCurrentProgram(): Program | undefined;
        fileIsOpen(filePath: Path): boolean;
    }
    export function removeIgnoredPath(path: Path): Path | undefined;
    export function canWatchDirectory(dirPath: Path): boolean;
    export const maxNumberOfFilesToIterateForInvalidation = 256;
    export function createResolutionCache(resolutionHost: ResolutionCacheHost, rootDirForResolution: string | undefined, logChangesWhenResolvingModule: boolean): ResolutionCache;
    export {};
}
declare namespace ts.moduleSpecifiers {
    function updateModuleSpecifier(compilerOptions: CompilerOptions, importingSourceFileName: Path, toFileName: string, host: ModuleSpecifierResolutionHost, files: readonly SourceFile[], redirectTargetsMap: RedirectTargetsMap, oldImportSpecifier: string): string | undefined;
    function getModuleSpecifier(compilerOptions: CompilerOptions, importingSourceFile: SourceFile, importingSourceFileName: Path, toFileName: string, host: ModuleSpecifierResolutionHost, files: readonly SourceFile[], preferences: UserPreferences | undefined, redirectTargetsMap: RedirectTargetsMap): string;
    function getNodeModulesPackageName(compilerOptions: CompilerOptions, importingSourceFileName: Path, nodeModulesFileName: string, host: ModuleSpecifierResolutionHost, files: readonly SourceFile[], redirectTargetsMap: RedirectTargetsMap): string | undefined;
    function getModuleSpecifiers(moduleSymbol: Symbol, compilerOptions: CompilerOptions, importingSourceFile: SourceFile, host: ModuleSpecifierResolutionHost, files: readonly SourceFile[], userPreferences: UserPreferences, redirectTargetsMap: RedirectTargetsMap): readonly string[];
    function countPathComponents(path: string): number;
}
declare namespace ts {
    export function createDiagnosticReporter(system: System, pretty?: boolean): DiagnosticReporter;
    export const screenStartingMessageCodes: number[];
    export function getLocaleTimeString(system: System): string;
    export function createWatchStatusReporter(system: System, pretty?: boolean): WatchStatusReporter;
    export function parseConfigFileWithSystem(configFileName: string, optionsToExtend: CompilerOptions, watchOptionsToExtend: WatchOptions | undefined, system: System, reportDiagnostic: DiagnosticReporter): ParsedCommandLine | undefined;
    export function getErrorCountForSummary(diagnostics: readonly Diagnostic[]): number;
    export function getWatchErrorSummaryDiagnosticMessage(errorCount: number): DiagnosticMessage;
    export function getErrorSummaryText(errorCount: number, newLine: string): string;
    export interface ProgramToEmitFilesAndReportErrors {
        getCurrentDirectory(): string;
        getCompilerOptions(): CompilerOptions;
        getSourceFiles(): readonly SourceFile[];
        getSyntacticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly Diagnostic[];
        getOptionsDiagnostics(cancellationToken?: CancellationToken): readonly Diagnostic[];
        getGlobalDiagnostics(cancellationToken?: CancellationToken): readonly Diagnostic[];
        getSemanticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly Diagnostic[];
        getDeclarationDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly DiagnosticWithLocation[];
        getConfigFileParsingDiagnostics(): readonly Diagnostic[];
        emit(targetSourceFile?: SourceFile, writeFile?: WriteFileCallback, cancellationToken?: CancellationToken, emitOnlyDtsFiles?: boolean, customTransformers?: CustomTransformers): EmitResult;
    }
    export function listFiles(program: ProgramToEmitFilesAndReportErrors, writeFileName: (s: string) => void): void;
    export function emitFilesAndReportErrors(program: ProgramToEmitFilesAndReportErrors, reportDiagnostic: DiagnosticReporter, writeFileName?: (s: string) => void, reportSummary?: ReportEmitErrorSummary, writeFile?: WriteFileCallback, cancellationToken?: CancellationToken, emitOnlyDtsFiles?: boolean, customTransformers?: CustomTransformers): {
        emitResult: EmitResult;
        diagnostics: SortedReadonlyArray<Diagnostic>;
    };
    export function emitFilesAndReportErrorsAndGetExitStatus(program: ProgramToEmitFilesAndReportErrors, reportDiagnostic: DiagnosticReporter, writeFileName?: (s: string) => void, reportSummary?: ReportEmitErrorSummary, writeFile?: WriteFileCallback, cancellationToken?: CancellationToken, emitOnlyDtsFiles?: boolean, customTransformers?: CustomTransformers): ExitStatus.Success | ExitStatus.DiagnosticsPresent_OutputsSkipped | ExitStatus.DiagnosticsPresent_OutputsGenerated;
    export const noopFileWatcher: FileWatcher;
    export function createWatchHost(system?: System, reportWatchStatus?: WatchStatusReporter): WatchHost;
    export type WatchType = WatchTypeRegistry[keyof WatchTypeRegistry];
    export const WatchType: WatchTypeRegistry;
    export interface WatchTypeRegistry {
        ConfigFile: "Config file";
        SourceFile: "Source file";
        MissingFile: "Missing file";
        WildcardDirectory: "Wild card directory";
        FailedLookupLocations: "Failed Lookup Locations";
        TypeRoots: "Type roots";
    }
    interface WatchFactory<X, Y = undefined> extends ts.WatchFactory<X, Y> {
        writeLog: (s: string) => void;
    }
    export function createWatchFactory<Y = undefined>(host: {
        trace?(s: string): void;
    }, options: {
        extendedDiagnostics?: boolean;
        diagnostics?: boolean;
    }): WatchFactory<"Config file" | "Source file" | "Missing file" | "Wild card directory" | "Failed Lookup Locations" | "Type roots", Y>;
    export function createCompilerHostFromProgramHost(host: ProgramHost<any>, getCompilerOptions: () => CompilerOptions, directoryStructureHost?: DirectoryStructureHost): CompilerHost;
    export function setGetSourceFileAsHashVersioned(compilerHost: CompilerHost, host: {
        createHash?(data: string): string;
    }): void;
    export function createProgramHost<T extends BuilderProgram = EmitAndSemanticDiagnosticsBuilderProgram>(system: System, createProgram: CreateProgram<T> | undefined): ProgramHost<T>;
    export function createWatchCompilerHostOfConfigFile<T extends BuilderProgram = EmitAndSemanticDiagnosticsBuilderProgram>(configFileName: string, optionsToExtend: CompilerOptions | undefined, watchOptionsToExtend: WatchOptions | undefined, system: System, createProgram?: CreateProgram<T>, reportDiagnostic?: DiagnosticReporter, reportWatchStatus?: WatchStatusReporter): WatchCompilerHostOfConfigFile<T>;
    export function createWatchCompilerHostOfFilesAndCompilerOptions<T extends BuilderProgram = EmitAndSemanticDiagnosticsBuilderProgram>(rootFiles: string[], options: CompilerOptions, watchOptions: WatchOptions | undefined, system: System, createProgram?: CreateProgram<T>, reportDiagnostic?: DiagnosticReporter, reportWatchStatus?: WatchStatusReporter, projectReferences?: readonly ProjectReference[]): WatchCompilerHostOfFilesAndCompilerOptions<T>;
    export interface IncrementalCompilationOptions {
        rootNames: readonly string[];
        options: CompilerOptions;
        configFileParsingDiagnostics?: readonly Diagnostic[];
        projectReferences?: readonly ProjectReference[];
        host?: CompilerHost;
        reportDiagnostic?: DiagnosticReporter;
        reportErrorSummary?: ReportEmitErrorSummary;
        afterProgramEmitAndDiagnostics?(program: EmitAndSemanticDiagnosticsBuilderProgram): void;
        system?: System;
    }
    export function performIncrementalCompilation(input: IncrementalCompilationOptions): ExitStatus.Success | ExitStatus.DiagnosticsPresent_OutputsSkipped | ExitStatus.DiagnosticsPresent_OutputsGenerated;
    export {};
}
declare namespace ts {
    interface ReadBuildProgramHost {
        useCaseSensitiveFileNames(): boolean;
        getCurrentDirectory(): string;
        readFile(fileName: string): string | undefined;
    }
    function readBuilderProgram(compilerOptions: CompilerOptions, host: ReadBuildProgramHost): EmitAndSemanticDiagnosticsBuilderProgram | undefined;
    function createIncrementalCompilerHost(options: CompilerOptions, system?: System): CompilerHost;
    interface IncrementalProgramOptions<T extends BuilderProgram> {
        rootNames: readonly string[];
        options: CompilerOptions;
        configFileParsingDiagnostics?: readonly Diagnostic[];
        projectReferences?: readonly ProjectReference[];
        host?: CompilerHost;
        createProgram?: CreateProgram<T>;
    }
    function createIncrementalProgram<T extends BuilderProgram = EmitAndSemanticDiagnosticsBuilderProgram>({ rootNames, options, configFileParsingDiagnostics, projectReferences, host, createProgram }: IncrementalProgramOptions<T>): T;
    type WatchStatusReporter = (diagnostic: Diagnostic, newLine: string, options: CompilerOptions, errorCount?: number) => void;
    type CreateProgram<T extends BuilderProgram> = (rootNames: readonly string[] | undefined, options: CompilerOptions | undefined, host?: CompilerHost, oldProgram?: T, configFileParsingDiagnostics?: readonly Diagnostic[], projectReferences?: readonly ProjectReference[] | undefined) => T;
    interface WatchHost {
        onWatchStatusChange?(diagnostic: Diagnostic, newLine: string, options: CompilerOptions, errorCount?: number): void;
        watchFile(path: string, callback: FileWatcherCallback, pollingInterval?: number, options?: CompilerOptions): FileWatcher;
        watchDirectory(path: string, callback: DirectoryWatcherCallback, recursive?: boolean, options?: CompilerOptions): FileWatcher;
        setTimeout?(callback: (...args: any[]) => void, ms: number, ...args: any[]): any;
        clearTimeout?(timeoutId: any): void;
    }
    interface ProgramHost<T extends BuilderProgram> {
        createProgram: CreateProgram<T>;
        useCaseSensitiveFileNames(): boolean;
        getNewLine(): string;
        getCurrentDirectory(): string;
        getDefaultLibFileName(options: CompilerOptions): string;
        getDefaultLibLocation?(): string;
        createHash?(data: string): string;
        fileExists(path: string): boolean;
        readFile(path: string, encoding?: string): string | undefined;
        directoryExists?(path: string): boolean;
        getDirectories?(path: string): string[];
        readDirectory?(path: string, extensions?: readonly string[], exclude?: readonly string[], include?: readonly string[], depth?: number): string[];
        realpath?(path: string): string;
        trace?(s: string): void;
        getEnvironmentVariable?(name: string): string | undefined;
        resolveModuleNames?(moduleNames: string[], containingFile: string, reusedNames: string[] | undefined, redirectedReference: ResolvedProjectReference | undefined, options: CompilerOptions): (ResolvedModule | undefined)[];
        resolveTypeReferenceDirectives?(typeReferenceDirectiveNames: string[], containingFile: string, redirectedReference: ResolvedProjectReference | undefined, options: CompilerOptions): (ResolvedTypeReferenceDirective | undefined)[];
    }
    interface ProgramHost<T extends BuilderProgram> {
        createDirectory?(path: string): void;
        writeFile?(path: string, data: string, writeByteOrderMark?: boolean): void;
        onCachedDirectoryStructureHostCreate?(host: CachedDirectoryStructureHost): void;
    }
    interface WatchCompilerHost<T extends BuilderProgram> extends ProgramHost<T>, WatchHost {
        afterProgramCreate?(program: T): void;
        maxNumberOfFilesToIterateForInvalidation?: number;
    }
    interface WatchCompilerHostOfFilesAndCompilerOptions<T extends BuilderProgram> extends WatchCompilerHost<T> {
        rootFiles: string[];
        options: CompilerOptions;
        watchOptions?: WatchOptions;
        projectReferences?: readonly ProjectReference[];
    }
    interface WatchCompilerHostOfConfigFile<T extends BuilderProgram> extends WatchCompilerHost<T>, ConfigFileDiagnosticsReporter {
        configFileName: string;
        optionsToExtend?: CompilerOptions;
        watchOptionsToExtend?: WatchOptions;
        readDirectory(path: string, extensions?: readonly string[], exclude?: readonly string[], include?: readonly string[], depth?: number): string[];
    }
    interface WatchCompilerHostOfConfigFile<T extends BuilderProgram> extends WatchCompilerHost<T> {
        configFileParsingResult?: ParsedCommandLine;
    }
    interface Watch<T> {
        getProgram(): T;
        getCurrentProgram(): T;
        close(): void;
    }
    interface WatchOfConfigFile<T> extends Watch<T> {
    }
    interface WatchOfFilesAndCompilerOptions<T> extends Watch<T> {
        updateRootFileNames(fileNames: string[]): void;
    }
    function createWatchCompilerHost<T extends BuilderProgram>(configFileName: string, optionsToExtend: CompilerOptions | undefined, system: System, createProgram?: CreateProgram<T>, reportDiagnostic?: DiagnosticReporter, reportWatchStatus?: WatchStatusReporter, watchOptionsToExtend?: WatchOptions): WatchCompilerHostOfConfigFile<T>;
    function createWatchCompilerHost<T extends BuilderProgram>(rootFiles: string[], options: CompilerOptions, system: System, createProgram?: CreateProgram<T>, reportDiagnostic?: DiagnosticReporter, reportWatchStatus?: WatchStatusReporter, projectReferences?: readonly ProjectReference[], watchOptions?: WatchOptions): WatchCompilerHostOfFilesAndCompilerOptions<T>;
    function createWatchProgram<T extends BuilderProgram>(host: WatchCompilerHostOfFilesAndCompilerOptions<T>): WatchOfFilesAndCompilerOptions<T>;
    function createWatchProgram<T extends BuilderProgram>(host: WatchCompilerHostOfConfigFile<T>): WatchOfConfigFile<T>;
}
declare namespace ts {
    enum UpToDateStatusType {
        Unbuildable = 0,
        UpToDate = 1,
        UpToDateWithUpstreamTypes = 2,
        OutOfDateWithPrepend = 3,
        OutputMissing = 4,
        OutOfDateWithSelf = 5,
        OutOfDateWithUpstream = 6,
        UpstreamOutOfDate = 7,
        UpstreamBlocked = 8,
        ComputingUpstream = 9,
        TsVersionOutputOfDate = 10,
        ContainerOnly = 11
    }
    type UpToDateStatus = Status.Unbuildable | Status.UpToDate | Status.OutOfDateWithPrepend | Status.OutputMissing | Status.OutOfDateWithSelf | Status.OutOfDateWithUpstream | Status.UpstreamOutOfDate | Status.UpstreamBlocked | Status.ComputingUpstream | Status.TsVersionOutOfDate | Status.ContainerOnly;
    namespace Status {
        interface Unbuildable {
            type: UpToDateStatusType.Unbuildable;
            reason: string;
        }
        interface ContainerOnly {
            type: UpToDateStatusType.ContainerOnly;
        }
        interface UpToDate {
            type: UpToDateStatusType.UpToDate | UpToDateStatusType.UpToDateWithUpstreamTypes;
            newestInputFileTime?: Date;
            newestInputFileName?: string;
            newestDeclarationFileContentChangedTime?: Date;
            newestOutputFileTime?: Date;
            newestOutputFileName?: string;
            oldestOutputFileName: string;
        }
        interface OutOfDateWithPrepend {
            type: UpToDateStatusType.OutOfDateWithPrepend;
            outOfDateOutputFileName: string;
            newerProjectName: string;
        }
        interface OutputMissing {
            type: UpToDateStatusType.OutputMissing;
            missingOutputFileName: string;
        }
        interface OutOfDateWithSelf {
            type: UpToDateStatusType.OutOfDateWithSelf;
            outOfDateOutputFileName: string;
            newerInputFileName: string;
        }
        interface UpstreamOutOfDate {
            type: UpToDateStatusType.UpstreamOutOfDate;
            upstreamProjectName: string;
        }
        interface UpstreamBlocked {
            type: UpToDateStatusType.UpstreamBlocked;
            upstreamProjectName: string;
            upstreamProjectBlocked: boolean;
        }
        interface ComputingUpstream {
            type: UpToDateStatusType.ComputingUpstream;
        }
        interface TsVersionOutOfDate {
            type: UpToDateStatusType.TsVersionOutputOfDate;
            version: string;
        }
        interface OutOfDateWithUpstream {
            type: UpToDateStatusType.OutOfDateWithUpstream;
            outOfDateOutputFileName: string;
            newerProjectName: string;
        }
    }
    function resolveConfigFileProjectName(project: string): ResolvedConfigFileName;
}
declare namespace ts {
    interface BuildOptions {
        dry?: boolean;
        force?: boolean;
        verbose?: boolean;
        clean?: boolean;
        watch?: boolean;
        help?: boolean;
        preserveWatchOutput?: boolean;
        listEmittedFiles?: boolean;
        listFiles?: boolean;
        pretty?: boolean;
        incremental?: boolean;
        assumeChangesOnlyAffectDirectDependencies?: boolean;
        traceResolution?: boolean;
        diagnostics?: boolean;
        extendedDiagnostics?: boolean;
        locale?: string;
        generateCpuProfile?: string;
        [option: string]: CompilerOptionsValue | undefined;
    }
    type ResolvedConfigFilePath = ResolvedConfigFileName & Path;
    type ReportEmitErrorSummary = (errorCount: number) => void;
    interface SolutionBuilderHostBase<T extends BuilderProgram> extends ProgramHost<T> {
        createDirectory?(path: string): void;
        writeFile?(path: string, data: string, writeByteOrderMark?: boolean): void;
        getModifiedTime(fileName: string): Date | undefined;
        setModifiedTime(fileName: string, date: Date): void;
        deleteFile(fileName: string): void;
        getParsedCommandLine?(fileName: string): ParsedCommandLine | undefined;
        reportDiagnostic: DiagnosticReporter;
        reportSolutionBuilderStatus: DiagnosticReporter;
        afterProgramEmitAndDiagnostics?(program: T): void;
        afterEmitBundle?(config: ParsedCommandLine): void;
        now?(): Date;
    }
    interface SolutionBuilderHost<T extends BuilderProgram> extends SolutionBuilderHostBase<T> {
        reportErrorSummary?: ReportEmitErrorSummary;
    }
    interface SolutionBuilderWithWatchHost<T extends BuilderProgram> extends SolutionBuilderHostBase<T>, WatchHost {
    }
    type BuildOrder = readonly ResolvedConfigFileName[];
    interface CircularBuildOrder {
        buildOrder: BuildOrder;
        circularDiagnostics: readonly Diagnostic[];
    }
    type AnyBuildOrder = BuildOrder | CircularBuildOrder;
    function isCircularBuildOrder(buildOrder: AnyBuildOrder): buildOrder is CircularBuildOrder;
    function getBuildOrderFromAnyBuildOrder(anyBuildOrder: AnyBuildOrder): BuildOrder;
    interface SolutionBuilder<T extends BuilderProgram> {
        build(project?: string, cancellationToken?: CancellationToken): ExitStatus;
        clean(project?: string): ExitStatus;
        buildReferences(project: string, cancellationToken?: CancellationToken): ExitStatus;
        cleanReferences(project?: string): ExitStatus;
        getNextInvalidatedProject(cancellationToken?: CancellationToken): InvalidatedProject<T> | undefined;
        getBuildOrder(): AnyBuildOrder;
        getUpToDateStatusOfProject(project: string): UpToDateStatus;
        invalidateProject(configFilePath: ResolvedConfigFilePath, reloadLevel?: ConfigFileProgramReloadLevel): void;
        buildNextInvalidatedProject(): void;
        getAllParsedConfigs(): readonly ParsedCommandLine[];
        close(): void;
    }
    function createBuilderStatusReporter(system: System, pretty?: boolean): DiagnosticReporter;
    function createSolutionBuilderHost<T extends BuilderProgram = EmitAndSemanticDiagnosticsBuilderProgram>(system?: System, createProgram?: CreateProgram<T>, reportDiagnostic?: DiagnosticReporter, reportSolutionBuilderStatus?: DiagnosticReporter, reportErrorSummary?: ReportEmitErrorSummary): SolutionBuilderHost<T>;
    function createSolutionBuilderWithWatchHost<T extends BuilderProgram = EmitAndSemanticDiagnosticsBuilderProgram>(system?: System, createProgram?: CreateProgram<T>, reportDiagnostic?: DiagnosticReporter, reportSolutionBuilderStatus?: DiagnosticReporter, reportWatchStatus?: WatchStatusReporter): SolutionBuilderWithWatchHost<T>;
    function createSolutionBuilder<T extends BuilderProgram>(host: SolutionBuilderHost<T>, rootNames: readonly string[], defaultOptions: BuildOptions): SolutionBuilder<T>;
    function createSolutionBuilderWithWatch<T extends BuilderProgram>(host: SolutionBuilderWithWatchHost<T>, rootNames: readonly string[], defaultOptions: BuildOptions, baseWatchOptions?: WatchOptions): SolutionBuilder<T>;
    enum InvalidatedProjectKind {
        Build = 0,
        UpdateBundle = 1,
        UpdateOutputFileStamps = 2
    }
    interface InvalidatedProjectBase {
        readonly kind: InvalidatedProjectKind;
        readonly project: ResolvedConfigFileName;
        readonly projectPath: ResolvedConfigFilePath;
        readonly buildOrder: readonly ResolvedConfigFileName[];
        done(cancellationToken?: CancellationToken, writeFile?: WriteFileCallback, customTransformers?: CustomTransformers): ExitStatus;
        getCompilerOptions(): CompilerOptions;
        getCurrentDirectory(): string;
    }
    interface UpdateOutputFileStampsProject extends InvalidatedProjectBase {
        readonly kind: InvalidatedProjectKind.UpdateOutputFileStamps;
        updateOutputFileStatmps(): void;
    }
    interface BuildInvalidedProject<T extends BuilderProgram> extends InvalidatedProjectBase {
        readonly kind: InvalidatedProjectKind.Build;
        getBuilderProgram(): T | undefined;
        getProgram(): Program | undefined;
        getSourceFile(fileName: string): SourceFile | undefined;
        getSourceFiles(): readonly SourceFile[];
        getOptionsDiagnostics(cancellationToken?: CancellationToken): readonly Diagnostic[];
        getGlobalDiagnostics(cancellationToken?: CancellationToken): readonly Diagnostic[];
        getConfigFileParsingDiagnostics(): readonly Diagnostic[];
        getSyntacticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly Diagnostic[];
        getAllDependencies(sourceFile: SourceFile): readonly string[];
        getSemanticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly Diagnostic[];
        getSemanticDiagnosticsOfNextAffectedFile(cancellationToken?: CancellationToken, ignoreSourceFile?: (sourceFile: SourceFile) => boolean): AffectedFileResult<readonly Diagnostic[]>;
        emit(targetSourceFile?: SourceFile, writeFile?: WriteFileCallback, cancellationToken?: CancellationToken, emitOnlyDtsFiles?: boolean, customTransformers?: CustomTransformers): EmitResult | undefined;
    }
    interface UpdateBundleProject<T extends BuilderProgram> extends InvalidatedProjectBase {
        readonly kind: InvalidatedProjectKind.UpdateBundle;
        emit(writeFile?: WriteFileCallback, customTransformers?: CustomTransformers): EmitResult | BuildInvalidedProject<T> | undefined;
    }
    type InvalidatedProject<T extends BuilderProgram> = UpdateOutputFileStampsProject | BuildInvalidedProject<T> | UpdateBundleProject<T>;
}
//# sourceMappingURL=compiler.release.d.ts.map