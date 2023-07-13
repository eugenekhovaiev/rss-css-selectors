export interface Level {
  description: string;
  task: string;
  layout: string;
  helper: string;
}

export interface ProgressSave {
  completed: number[];
  helped: number[];
}

export type ElemType<T> = {
  new (): T;
};

export type SimpleUtilFunc<TIn, TOut> = (elem: TIn) => TOut;

export interface CurrLevelUtils {
  get: SimpleUtilFunc<void, number>;
  set: SimpleUtilFunc<number, number>;
  incr: SimpleUtilFunc<void, number>;
}

type CheckIn = 'completed' | 'helped';
type ProgressMethod<TOut extends boolean | void> = (levelNumber: number, where: CheckIn) => TOut;

export interface ProgressUtils {
  has: ProgressMethod<boolean>;
  add: ProgressMethod<void>;

  completed: {
    has: SimpleUtilFunc<number, boolean>;
    add: SimpleUtilFunc<number, void>;
  };
  helped: {
    has: SimpleUtilFunc<number, boolean>;
    add: SimpleUtilFunc<number, void>;
  };
}
