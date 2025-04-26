
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model equipment_item
 * 
 */
export type equipment_item = $Result.DefaultSelection<Prisma.$equipment_itemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const equipment_item_obtain_type: {
  monster: 'monster',
  player: 'player',
  npc: 'npc',
  event: 'event'
};

export type equipment_item_obtain_type = (typeof equipment_item_obtain_type)[keyof typeof equipment_item_obtain_type]

}

export type equipment_item_obtain_type = $Enums.equipment_item_obtain_type

export const equipment_item_obtain_type: typeof $Enums.equipment_item_obtain_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Equipment_items
 * const equipment_items = await prisma.equipment_item.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Equipment_items
   * const equipment_items = await prisma.equipment_item.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.equipment_item`: Exposes CRUD operations for the **equipment_item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipment_items
    * const equipment_items = await prisma.equipment_item.findMany()
    * ```
    */
  get equipment_item(): Prisma.equipment_itemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    equipment_item: 'equipment_item'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "equipment_item"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      equipment_item: {
        payload: Prisma.$equipment_itemPayload<ExtArgs>
        fields: Prisma.equipment_itemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.equipment_itemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipment_itemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.equipment_itemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipment_itemPayload>
          }
          findFirst: {
            args: Prisma.equipment_itemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipment_itemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.equipment_itemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipment_itemPayload>
          }
          findMany: {
            args: Prisma.equipment_itemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipment_itemPayload>[]
          }
          create: {
            args: Prisma.equipment_itemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipment_itemPayload>
          }
          createMany: {
            args: Prisma.equipment_itemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.equipment_itemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipment_itemPayload>
          }
          update: {
            args: Prisma.equipment_itemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipment_itemPayload>
          }
          deleteMany: {
            args: Prisma.equipment_itemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.equipment_itemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.equipment_itemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipment_itemPayload>
          }
          aggregate: {
            args: Prisma.Equipment_itemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipment_item>
          }
          groupBy: {
            args: Prisma.equipment_itemGroupByArgs<ExtArgs>
            result: $Utils.Optional<Equipment_itemGroupByOutputType>[]
          }
          count: {
            args: Prisma.equipment_itemCountArgs<ExtArgs>
            result: $Utils.Optional<Equipment_itemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    equipment_item?: equipment_itemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model equipment_item
   */

  export type AggregateEquipment_item = {
    _count: Equipment_itemCountAggregateOutputType | null
    _avg: Equipment_itemAvgAggregateOutputType | null
    _sum: Equipment_itemSumAggregateOutputType | null
    _min: Equipment_itemMinAggregateOutputType | null
    _max: Equipment_itemMaxAggregateOutputType | null
  }

  export type Equipment_itemAvgAggregateOutputType = {
    id: number | null
    watk: number | null
    stability: number | null
    def: number | null
    potential: number | null
  }

  export type Equipment_itemSumAggregateOutputType = {
    id: number | null
    watk: number | null
    stability: number | null
    def: number | null
    potential: number | null
  }

  export type Equipment_itemMinAggregateOutputType = {
    id: number | null
    name: string | null
    watk: number | null
    stability: number | null
    def: number | null
    potential: number | null
    status: string | null
    obtain_type: $Enums.equipment_item_obtain_type | null
    obtain_description: string | null
    image: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Equipment_itemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    watk: number | null
    stability: number | null
    def: number | null
    potential: number | null
    status: string | null
    obtain_type: $Enums.equipment_item_obtain_type | null
    obtain_description: string | null
    image: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Equipment_itemCountAggregateOutputType = {
    id: number
    name: number
    watk: number
    stability: number
    def: number
    potential: number
    status: number
    obtain_type: number
    obtain_description: number
    image: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Equipment_itemAvgAggregateInputType = {
    id?: true
    watk?: true
    stability?: true
    def?: true
    potential?: true
  }

  export type Equipment_itemSumAggregateInputType = {
    id?: true
    watk?: true
    stability?: true
    def?: true
    potential?: true
  }

  export type Equipment_itemMinAggregateInputType = {
    id?: true
    name?: true
    watk?: true
    stability?: true
    def?: true
    potential?: true
    status?: true
    obtain_type?: true
    obtain_description?: true
    image?: true
    created_at?: true
    updated_at?: true
  }

  export type Equipment_itemMaxAggregateInputType = {
    id?: true
    name?: true
    watk?: true
    stability?: true
    def?: true
    potential?: true
    status?: true
    obtain_type?: true
    obtain_description?: true
    image?: true
    created_at?: true
    updated_at?: true
  }

  export type Equipment_itemCountAggregateInputType = {
    id?: true
    name?: true
    watk?: true
    stability?: true
    def?: true
    potential?: true
    status?: true
    obtain_type?: true
    obtain_description?: true
    image?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Equipment_itemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which equipment_item to aggregate.
     */
    where?: equipment_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipment_items to fetch.
     */
    orderBy?: equipment_itemOrderByWithRelationInput | equipment_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: equipment_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipment_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipment_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned equipment_items
    **/
    _count?: true | Equipment_itemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Equipment_itemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Equipment_itemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Equipment_itemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Equipment_itemMaxAggregateInputType
  }

  export type GetEquipment_itemAggregateType<T extends Equipment_itemAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipment_item]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipment_item[P]>
      : GetScalarType<T[P], AggregateEquipment_item[P]>
  }




  export type equipment_itemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: equipment_itemWhereInput
    orderBy?: equipment_itemOrderByWithAggregationInput | equipment_itemOrderByWithAggregationInput[]
    by: Equipment_itemScalarFieldEnum[] | Equipment_itemScalarFieldEnum
    having?: equipment_itemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Equipment_itemCountAggregateInputType | true
    _avg?: Equipment_itemAvgAggregateInputType
    _sum?: Equipment_itemSumAggregateInputType
    _min?: Equipment_itemMinAggregateInputType
    _max?: Equipment_itemMaxAggregateInputType
  }

  export type Equipment_itemGroupByOutputType = {
    id: number
    name: string | null
    watk: number | null
    stability: number | null
    def: number | null
    potential: number | null
    status: string | null
    obtain_type: $Enums.equipment_item_obtain_type | null
    obtain_description: string | null
    image: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: Equipment_itemCountAggregateOutputType | null
    _avg: Equipment_itemAvgAggregateOutputType | null
    _sum: Equipment_itemSumAggregateOutputType | null
    _min: Equipment_itemMinAggregateOutputType | null
    _max: Equipment_itemMaxAggregateOutputType | null
  }

  type GetEquipment_itemGroupByPayload<T extends equipment_itemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Equipment_itemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Equipment_itemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Equipment_itemGroupByOutputType[P]>
            : GetScalarType<T[P], Equipment_itemGroupByOutputType[P]>
        }
      >
    >


  export type equipment_itemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    watk?: boolean
    stability?: boolean
    def?: boolean
    potential?: boolean
    status?: boolean
    obtain_type?: boolean
    obtain_description?: boolean
    image?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["equipment_item"]>



  export type equipment_itemSelectScalar = {
    id?: boolean
    name?: boolean
    watk?: boolean
    stability?: boolean
    def?: boolean
    potential?: boolean
    status?: boolean
    obtain_type?: boolean
    obtain_description?: boolean
    image?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type equipment_itemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "watk" | "stability" | "def" | "potential" | "status" | "obtain_type" | "obtain_description" | "image" | "created_at" | "updated_at", ExtArgs["result"]["equipment_item"]>

  export type $equipment_itemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "equipment_item"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      watk: number | null
      stability: number | null
      def: number | null
      potential: number | null
      status: string | null
      obtain_type: $Enums.equipment_item_obtain_type | null
      obtain_description: string | null
      image: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["equipment_item"]>
    composites: {}
  }

  type equipment_itemGetPayload<S extends boolean | null | undefined | equipment_itemDefaultArgs> = $Result.GetResult<Prisma.$equipment_itemPayload, S>

  type equipment_itemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<equipment_itemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Equipment_itemCountAggregateInputType | true
    }

  export interface equipment_itemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['equipment_item'], meta: { name: 'equipment_item' } }
    /**
     * Find zero or one Equipment_item that matches the filter.
     * @param {equipment_itemFindUniqueArgs} args - Arguments to find a Equipment_item
     * @example
     * // Get one Equipment_item
     * const equipment_item = await prisma.equipment_item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends equipment_itemFindUniqueArgs>(args: SelectSubset<T, equipment_itemFindUniqueArgs<ExtArgs>>): Prisma__equipment_itemClient<$Result.GetResult<Prisma.$equipment_itemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipment_item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {equipment_itemFindUniqueOrThrowArgs} args - Arguments to find a Equipment_item
     * @example
     * // Get one Equipment_item
     * const equipment_item = await prisma.equipment_item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends equipment_itemFindUniqueOrThrowArgs>(args: SelectSubset<T, equipment_itemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__equipment_itemClient<$Result.GetResult<Prisma.$equipment_itemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment_item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipment_itemFindFirstArgs} args - Arguments to find a Equipment_item
     * @example
     * // Get one Equipment_item
     * const equipment_item = await prisma.equipment_item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends equipment_itemFindFirstArgs>(args?: SelectSubset<T, equipment_itemFindFirstArgs<ExtArgs>>): Prisma__equipment_itemClient<$Result.GetResult<Prisma.$equipment_itemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment_item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipment_itemFindFirstOrThrowArgs} args - Arguments to find a Equipment_item
     * @example
     * // Get one Equipment_item
     * const equipment_item = await prisma.equipment_item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends equipment_itemFindFirstOrThrowArgs>(args?: SelectSubset<T, equipment_itemFindFirstOrThrowArgs<ExtArgs>>): Prisma__equipment_itemClient<$Result.GetResult<Prisma.$equipment_itemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipment_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipment_itemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipment_items
     * const equipment_items = await prisma.equipment_item.findMany()
     * 
     * // Get first 10 Equipment_items
     * const equipment_items = await prisma.equipment_item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipment_itemWithIdOnly = await prisma.equipment_item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends equipment_itemFindManyArgs>(args?: SelectSubset<T, equipment_itemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$equipment_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipment_item.
     * @param {equipment_itemCreateArgs} args - Arguments to create a Equipment_item.
     * @example
     * // Create one Equipment_item
     * const Equipment_item = await prisma.equipment_item.create({
     *   data: {
     *     // ... data to create a Equipment_item
     *   }
     * })
     * 
     */
    create<T extends equipment_itemCreateArgs>(args: SelectSubset<T, equipment_itemCreateArgs<ExtArgs>>): Prisma__equipment_itemClient<$Result.GetResult<Prisma.$equipment_itemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipment_items.
     * @param {equipment_itemCreateManyArgs} args - Arguments to create many Equipment_items.
     * @example
     * // Create many Equipment_items
     * const equipment_item = await prisma.equipment_item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends equipment_itemCreateManyArgs>(args?: SelectSubset<T, equipment_itemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Equipment_item.
     * @param {equipment_itemDeleteArgs} args - Arguments to delete one Equipment_item.
     * @example
     * // Delete one Equipment_item
     * const Equipment_item = await prisma.equipment_item.delete({
     *   where: {
     *     // ... filter to delete one Equipment_item
     *   }
     * })
     * 
     */
    delete<T extends equipment_itemDeleteArgs>(args: SelectSubset<T, equipment_itemDeleteArgs<ExtArgs>>): Prisma__equipment_itemClient<$Result.GetResult<Prisma.$equipment_itemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipment_item.
     * @param {equipment_itemUpdateArgs} args - Arguments to update one Equipment_item.
     * @example
     * // Update one Equipment_item
     * const equipment_item = await prisma.equipment_item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends equipment_itemUpdateArgs>(args: SelectSubset<T, equipment_itemUpdateArgs<ExtArgs>>): Prisma__equipment_itemClient<$Result.GetResult<Prisma.$equipment_itemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipment_items.
     * @param {equipment_itemDeleteManyArgs} args - Arguments to filter Equipment_items to delete.
     * @example
     * // Delete a few Equipment_items
     * const { count } = await prisma.equipment_item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends equipment_itemDeleteManyArgs>(args?: SelectSubset<T, equipment_itemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipment_itemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipment_items
     * const equipment_item = await prisma.equipment_item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends equipment_itemUpdateManyArgs>(args: SelectSubset<T, equipment_itemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Equipment_item.
     * @param {equipment_itemUpsertArgs} args - Arguments to update or create a Equipment_item.
     * @example
     * // Update or create a Equipment_item
     * const equipment_item = await prisma.equipment_item.upsert({
     *   create: {
     *     // ... data to create a Equipment_item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipment_item we want to update
     *   }
     * })
     */
    upsert<T extends equipment_itemUpsertArgs>(args: SelectSubset<T, equipment_itemUpsertArgs<ExtArgs>>): Prisma__equipment_itemClient<$Result.GetResult<Prisma.$equipment_itemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipment_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipment_itemCountArgs} args - Arguments to filter Equipment_items to count.
     * @example
     * // Count the number of Equipment_items
     * const count = await prisma.equipment_item.count({
     *   where: {
     *     // ... the filter for the Equipment_items we want to count
     *   }
     * })
    **/
    count<T extends equipment_itemCountArgs>(
      args?: Subset<T, equipment_itemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Equipment_itemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipment_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Equipment_itemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Equipment_itemAggregateArgs>(args: Subset<T, Equipment_itemAggregateArgs>): Prisma.PrismaPromise<GetEquipment_itemAggregateType<T>>

    /**
     * Group by Equipment_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipment_itemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends equipment_itemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: equipment_itemGroupByArgs['orderBy'] }
        : { orderBy?: equipment_itemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, equipment_itemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipment_itemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the equipment_item model
   */
  readonly fields: equipment_itemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for equipment_item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__equipment_itemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the equipment_item model
   */
  interface equipment_itemFieldRefs {
    readonly id: FieldRef<"equipment_item", 'Int'>
    readonly name: FieldRef<"equipment_item", 'String'>
    readonly watk: FieldRef<"equipment_item", 'Int'>
    readonly stability: FieldRef<"equipment_item", 'Int'>
    readonly def: FieldRef<"equipment_item", 'Int'>
    readonly potential: FieldRef<"equipment_item", 'Int'>
    readonly status: FieldRef<"equipment_item", 'String'>
    readonly obtain_type: FieldRef<"equipment_item", 'equipment_item_obtain_type'>
    readonly obtain_description: FieldRef<"equipment_item", 'String'>
    readonly image: FieldRef<"equipment_item", 'String'>
    readonly created_at: FieldRef<"equipment_item", 'DateTime'>
    readonly updated_at: FieldRef<"equipment_item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * equipment_item findUnique
   */
  export type equipment_itemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment_item
     */
    select?: equipment_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipment_item
     */
    omit?: equipment_itemOmit<ExtArgs> | null
    /**
     * Filter, which equipment_item to fetch.
     */
    where: equipment_itemWhereUniqueInput
  }

  /**
   * equipment_item findUniqueOrThrow
   */
  export type equipment_itemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment_item
     */
    select?: equipment_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipment_item
     */
    omit?: equipment_itemOmit<ExtArgs> | null
    /**
     * Filter, which equipment_item to fetch.
     */
    where: equipment_itemWhereUniqueInput
  }

  /**
   * equipment_item findFirst
   */
  export type equipment_itemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment_item
     */
    select?: equipment_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipment_item
     */
    omit?: equipment_itemOmit<ExtArgs> | null
    /**
     * Filter, which equipment_item to fetch.
     */
    where?: equipment_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipment_items to fetch.
     */
    orderBy?: equipment_itemOrderByWithRelationInput | equipment_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for equipment_items.
     */
    cursor?: equipment_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipment_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipment_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of equipment_items.
     */
    distinct?: Equipment_itemScalarFieldEnum | Equipment_itemScalarFieldEnum[]
  }

  /**
   * equipment_item findFirstOrThrow
   */
  export type equipment_itemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment_item
     */
    select?: equipment_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipment_item
     */
    omit?: equipment_itemOmit<ExtArgs> | null
    /**
     * Filter, which equipment_item to fetch.
     */
    where?: equipment_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipment_items to fetch.
     */
    orderBy?: equipment_itemOrderByWithRelationInput | equipment_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for equipment_items.
     */
    cursor?: equipment_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipment_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipment_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of equipment_items.
     */
    distinct?: Equipment_itemScalarFieldEnum | Equipment_itemScalarFieldEnum[]
  }

  /**
   * equipment_item findMany
   */
  export type equipment_itemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment_item
     */
    select?: equipment_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipment_item
     */
    omit?: equipment_itemOmit<ExtArgs> | null
    /**
     * Filter, which equipment_items to fetch.
     */
    where?: equipment_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipment_items to fetch.
     */
    orderBy?: equipment_itemOrderByWithRelationInput | equipment_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing equipment_items.
     */
    cursor?: equipment_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipment_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipment_items.
     */
    skip?: number
    distinct?: Equipment_itemScalarFieldEnum | Equipment_itemScalarFieldEnum[]
  }

  /**
   * equipment_item create
   */
  export type equipment_itemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment_item
     */
    select?: equipment_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipment_item
     */
    omit?: equipment_itemOmit<ExtArgs> | null
    /**
     * The data needed to create a equipment_item.
     */
    data?: XOR<equipment_itemCreateInput, equipment_itemUncheckedCreateInput>
  }

  /**
   * equipment_item createMany
   */
  export type equipment_itemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many equipment_items.
     */
    data: equipment_itemCreateManyInput | equipment_itemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * equipment_item update
   */
  export type equipment_itemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment_item
     */
    select?: equipment_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipment_item
     */
    omit?: equipment_itemOmit<ExtArgs> | null
    /**
     * The data needed to update a equipment_item.
     */
    data: XOR<equipment_itemUpdateInput, equipment_itemUncheckedUpdateInput>
    /**
     * Choose, which equipment_item to update.
     */
    where: equipment_itemWhereUniqueInput
  }

  /**
   * equipment_item updateMany
   */
  export type equipment_itemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update equipment_items.
     */
    data: XOR<equipment_itemUpdateManyMutationInput, equipment_itemUncheckedUpdateManyInput>
    /**
     * Filter which equipment_items to update
     */
    where?: equipment_itemWhereInput
    /**
     * Limit how many equipment_items to update.
     */
    limit?: number
  }

  /**
   * equipment_item upsert
   */
  export type equipment_itemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment_item
     */
    select?: equipment_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipment_item
     */
    omit?: equipment_itemOmit<ExtArgs> | null
    /**
     * The filter to search for the equipment_item to update in case it exists.
     */
    where: equipment_itemWhereUniqueInput
    /**
     * In case the equipment_item found by the `where` argument doesn't exist, create a new equipment_item with this data.
     */
    create: XOR<equipment_itemCreateInput, equipment_itemUncheckedCreateInput>
    /**
     * In case the equipment_item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<equipment_itemUpdateInput, equipment_itemUncheckedUpdateInput>
  }

  /**
   * equipment_item delete
   */
  export type equipment_itemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment_item
     */
    select?: equipment_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipment_item
     */
    omit?: equipment_itemOmit<ExtArgs> | null
    /**
     * Filter which equipment_item to delete.
     */
    where: equipment_itemWhereUniqueInput
  }

  /**
   * equipment_item deleteMany
   */
  export type equipment_itemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which equipment_items to delete
     */
    where?: equipment_itemWhereInput
    /**
     * Limit how many equipment_items to delete.
     */
    limit?: number
  }

  /**
   * equipment_item without action
   */
  export type equipment_itemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment_item
     */
    select?: equipment_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipment_item
     */
    omit?: equipment_itemOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Equipment_itemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    watk: 'watk',
    stability: 'stability',
    def: 'def',
    potential: 'potential',
    status: 'status',
    obtain_type: 'obtain_type',
    obtain_description: 'obtain_description',
    image: 'image',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Equipment_itemScalarFieldEnum = (typeof Equipment_itemScalarFieldEnum)[keyof typeof Equipment_itemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const equipment_itemOrderByRelevanceFieldEnum: {
    name: 'name',
    status: 'status',
    obtain_description: 'obtain_description',
    image: 'image'
  };

  export type equipment_itemOrderByRelevanceFieldEnum = (typeof equipment_itemOrderByRelevanceFieldEnum)[keyof typeof equipment_itemOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'equipment_item_obtain_type'
   */
  export type Enumequipment_item_obtain_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'equipment_item_obtain_type'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type equipment_itemWhereInput = {
    AND?: equipment_itemWhereInput | equipment_itemWhereInput[]
    OR?: equipment_itemWhereInput[]
    NOT?: equipment_itemWhereInput | equipment_itemWhereInput[]
    id?: IntFilter<"equipment_item"> | number
    name?: StringNullableFilter<"equipment_item"> | string | null
    watk?: IntNullableFilter<"equipment_item"> | number | null
    stability?: IntNullableFilter<"equipment_item"> | number | null
    def?: IntNullableFilter<"equipment_item"> | number | null
    potential?: IntNullableFilter<"equipment_item"> | number | null
    status?: StringNullableFilter<"equipment_item"> | string | null
    obtain_type?: Enumequipment_item_obtain_typeNullableFilter<"equipment_item"> | $Enums.equipment_item_obtain_type | null
    obtain_description?: StringNullableFilter<"equipment_item"> | string | null
    image?: StringNullableFilter<"equipment_item"> | string | null
    created_at?: DateTimeNullableFilter<"equipment_item"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"equipment_item"> | Date | string | null
  }

  export type equipment_itemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    watk?: SortOrderInput | SortOrder
    stability?: SortOrderInput | SortOrder
    def?: SortOrderInput | SortOrder
    potential?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    obtain_type?: SortOrderInput | SortOrder
    obtain_description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _relevance?: equipment_itemOrderByRelevanceInput
  }

  export type equipment_itemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: equipment_itemWhereInput | equipment_itemWhereInput[]
    OR?: equipment_itemWhereInput[]
    NOT?: equipment_itemWhereInput | equipment_itemWhereInput[]
    name?: StringNullableFilter<"equipment_item"> | string | null
    watk?: IntNullableFilter<"equipment_item"> | number | null
    stability?: IntNullableFilter<"equipment_item"> | number | null
    def?: IntNullableFilter<"equipment_item"> | number | null
    potential?: IntNullableFilter<"equipment_item"> | number | null
    status?: StringNullableFilter<"equipment_item"> | string | null
    obtain_type?: Enumequipment_item_obtain_typeNullableFilter<"equipment_item"> | $Enums.equipment_item_obtain_type | null
    obtain_description?: StringNullableFilter<"equipment_item"> | string | null
    image?: StringNullableFilter<"equipment_item"> | string | null
    created_at?: DateTimeNullableFilter<"equipment_item"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"equipment_item"> | Date | string | null
  }, "id">

  export type equipment_itemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    watk?: SortOrderInput | SortOrder
    stability?: SortOrderInput | SortOrder
    def?: SortOrderInput | SortOrder
    potential?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    obtain_type?: SortOrderInput | SortOrder
    obtain_description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: equipment_itemCountOrderByAggregateInput
    _avg?: equipment_itemAvgOrderByAggregateInput
    _max?: equipment_itemMaxOrderByAggregateInput
    _min?: equipment_itemMinOrderByAggregateInput
    _sum?: equipment_itemSumOrderByAggregateInput
  }

  export type equipment_itemScalarWhereWithAggregatesInput = {
    AND?: equipment_itemScalarWhereWithAggregatesInput | equipment_itemScalarWhereWithAggregatesInput[]
    OR?: equipment_itemScalarWhereWithAggregatesInput[]
    NOT?: equipment_itemScalarWhereWithAggregatesInput | equipment_itemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"equipment_item"> | number
    name?: StringNullableWithAggregatesFilter<"equipment_item"> | string | null
    watk?: IntNullableWithAggregatesFilter<"equipment_item"> | number | null
    stability?: IntNullableWithAggregatesFilter<"equipment_item"> | number | null
    def?: IntNullableWithAggregatesFilter<"equipment_item"> | number | null
    potential?: IntNullableWithAggregatesFilter<"equipment_item"> | number | null
    status?: StringNullableWithAggregatesFilter<"equipment_item"> | string | null
    obtain_type?: Enumequipment_item_obtain_typeNullableWithAggregatesFilter<"equipment_item"> | $Enums.equipment_item_obtain_type | null
    obtain_description?: StringNullableWithAggregatesFilter<"equipment_item"> | string | null
    image?: StringNullableWithAggregatesFilter<"equipment_item"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"equipment_item"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"equipment_item"> | Date | string | null
  }

  export type equipment_itemCreateInput = {
    name?: string | null
    watk?: number | null
    stability?: number | null
    def?: number | null
    potential?: number | null
    status?: string | null
    obtain_type?: $Enums.equipment_item_obtain_type | null
    obtain_description?: string | null
    image?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type equipment_itemUncheckedCreateInput = {
    id?: number
    name?: string | null
    watk?: number | null
    stability?: number | null
    def?: number | null
    potential?: number | null
    status?: string | null
    obtain_type?: $Enums.equipment_item_obtain_type | null
    obtain_description?: string | null
    image?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type equipment_itemUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    watk?: NullableIntFieldUpdateOperationsInput | number | null
    stability?: NullableIntFieldUpdateOperationsInput | number | null
    def?: NullableIntFieldUpdateOperationsInput | number | null
    potential?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    obtain_type?: NullableEnumequipment_item_obtain_typeFieldUpdateOperationsInput | $Enums.equipment_item_obtain_type | null
    obtain_description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type equipment_itemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    watk?: NullableIntFieldUpdateOperationsInput | number | null
    stability?: NullableIntFieldUpdateOperationsInput | number | null
    def?: NullableIntFieldUpdateOperationsInput | number | null
    potential?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    obtain_type?: NullableEnumequipment_item_obtain_typeFieldUpdateOperationsInput | $Enums.equipment_item_obtain_type | null
    obtain_description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type equipment_itemCreateManyInput = {
    id?: number
    name?: string | null
    watk?: number | null
    stability?: number | null
    def?: number | null
    potential?: number | null
    status?: string | null
    obtain_type?: $Enums.equipment_item_obtain_type | null
    obtain_description?: string | null
    image?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type equipment_itemUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    watk?: NullableIntFieldUpdateOperationsInput | number | null
    stability?: NullableIntFieldUpdateOperationsInput | number | null
    def?: NullableIntFieldUpdateOperationsInput | number | null
    potential?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    obtain_type?: NullableEnumequipment_item_obtain_typeFieldUpdateOperationsInput | $Enums.equipment_item_obtain_type | null
    obtain_description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type equipment_itemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    watk?: NullableIntFieldUpdateOperationsInput | number | null
    stability?: NullableIntFieldUpdateOperationsInput | number | null
    def?: NullableIntFieldUpdateOperationsInput | number | null
    potential?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    obtain_type?: NullableEnumequipment_item_obtain_typeFieldUpdateOperationsInput | $Enums.equipment_item_obtain_type | null
    obtain_description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Enumequipment_item_obtain_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.equipment_item_obtain_type | Enumequipment_item_obtain_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.equipment_item_obtain_type[] | null
    notIn?: $Enums.equipment_item_obtain_type[] | null
    not?: NestedEnumequipment_item_obtain_typeNullableFilter<$PrismaModel> | $Enums.equipment_item_obtain_type | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type equipment_itemOrderByRelevanceInput = {
    fields: equipment_itemOrderByRelevanceFieldEnum | equipment_itemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type equipment_itemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    watk?: SortOrder
    stability?: SortOrder
    def?: SortOrder
    potential?: SortOrder
    status?: SortOrder
    obtain_type?: SortOrder
    obtain_description?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type equipment_itemAvgOrderByAggregateInput = {
    id?: SortOrder
    watk?: SortOrder
    stability?: SortOrder
    def?: SortOrder
    potential?: SortOrder
  }

  export type equipment_itemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    watk?: SortOrder
    stability?: SortOrder
    def?: SortOrder
    potential?: SortOrder
    status?: SortOrder
    obtain_type?: SortOrder
    obtain_description?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type equipment_itemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    watk?: SortOrder
    stability?: SortOrder
    def?: SortOrder
    potential?: SortOrder
    status?: SortOrder
    obtain_type?: SortOrder
    obtain_description?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type equipment_itemSumOrderByAggregateInput = {
    id?: SortOrder
    watk?: SortOrder
    stability?: SortOrder
    def?: SortOrder
    potential?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Enumequipment_item_obtain_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.equipment_item_obtain_type | Enumequipment_item_obtain_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.equipment_item_obtain_type[] | null
    notIn?: $Enums.equipment_item_obtain_type[] | null
    not?: NestedEnumequipment_item_obtain_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.equipment_item_obtain_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumequipment_item_obtain_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumequipment_item_obtain_typeNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumequipment_item_obtain_typeFieldUpdateOperationsInput = {
    set?: $Enums.equipment_item_obtain_type | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumequipment_item_obtain_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.equipment_item_obtain_type | Enumequipment_item_obtain_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.equipment_item_obtain_type[] | null
    notIn?: $Enums.equipment_item_obtain_type[] | null
    not?: NestedEnumequipment_item_obtain_typeNullableFilter<$PrismaModel> | $Enums.equipment_item_obtain_type | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumequipment_item_obtain_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.equipment_item_obtain_type | Enumequipment_item_obtain_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.equipment_item_obtain_type[] | null
    notIn?: $Enums.equipment_item_obtain_type[] | null
    not?: NestedEnumequipment_item_obtain_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.equipment_item_obtain_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumequipment_item_obtain_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumequipment_item_obtain_typeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}