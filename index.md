# Class

## `SlidingBlockPuzzle`

### `constructor(width: number, height: number)`

### `width: *`

### `height: *`

### `createRandomInitialState(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `createGoalState(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `print(state: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| state | * | nullable: undefined |

### `isGoalState(state: *, goal: *): boolean`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| state | * | nullable: undefined |
| goal | * | nullable: undefined |

### `getActions(state: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| state | * | nullable: undefined |

### `performAction(state: *, action: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| state | * | nullable: undefined |
| action | * | nullable: undefined |

### `stateSerialise(state: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| state | * | nullable: undefined |

# Function

## `simpleProblemSolvingAgent(parameters: object, parameters.state: State, parameters.updateState: function(state:State, percept:Percept):State, parameters.formulateGoal: function(state:State):Goal, parameters.formulateProblem: function(state:State,goal:Goal):Problem, parameters.search: function(problem:Problem):Sequence): function(percept:Percept):Action`

Simple problem solving agent. Defines problem based on state of the world, searches for a sequence of steps to solve it and execute said sequence of steps. It is a open loop system - ignores precepts during execution phase. I.e, it is only good for static, discrete, observable, deterministic systems.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| parameters | object |  |
| parameters.state | State |  | initial state |
| parameters.updateState | function(state:State, percept:Percept):State | optional: true | function to update parameters |
| parameters.formulateGoal | function(state:State):Goal |  | function to formulate goal from current state |
| parameters.formulateProblem | function(state:State,goal:Goal):Problem | optional: true | function to formulate problem object from state and goal. By default it just puts state and goal into an object. |
| parameters.search | function(problem:Problem):Sequence |  | search for solution to problem |

## `defaultUpdateState(state: *, percept: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| state | * | nullable: undefined |
| percept | * | nullable: undefined |

## `defaultFormulateProblem(state: *, goal: *): {"state": *, "goal": *}`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| state | * | nullable: undefined |
| goal | * | nullable: undefined |

## `queueIsEmpty(queue: *): *`

queue empty test

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| queue | * | nullable: undefined |

## `lifoQueuePop(queue: *): *`

array.pop

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| queue | * | nullable: undefined |

## `fifoQueuePop(queue: *): *`

array.shift

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| queue | * | nullable: undefined |

## `queueInsert(element: *, queue: *): *`

array.push

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| element | * | nullable: undefined |
| queue | * | nullable: undefined |

## `priorityQueueInsert(isAbove: *): *`

array.push + sift-up

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| isAbove | * | nullable: undefined |

## `heapSiftUp(heap: *, index: *, isAbove: *)`

sift-up implementation

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| heap | * | nullable: undefined |
| index | * | nullable: undefined |
| isAbove | * | nullable: undefined |

## `heapSiftDown(heap: *, index: *, isAbove: *)`

sift-down implementation

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| heap | * | nullable: undefined |
| index | * | nullable: undefined |
| isAbove | * | nullable: undefined |

## `priorityQueuePop(isAbove: *): *`

array.shift + array.pop + array.unshift + shft-down

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| isAbove | * | nullable: undefined |

## `priorityQueue(isAbove: function(element:object, aboveElement:object):boolean): {"queueIsEmpty": *, "queuePop": *, "queueInsert": *}`

binary max heap array

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| isAbove | function(element:object, aboveElement:object):boolean |  | order function for priority queue |

## `sequenceIsEmpty(sequence: Sequence): boolean`

Tests if sequence is empty.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| sequence | Sequence |  |

## `sequenceFirst(sequence: Sequence): Action`

Returns first element of non-empty sequence

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| sequence | Sequence |  |

## `sequenceRest(sequence: Sequence): Action`

Returns sequence containing non-first element

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| sequence | Sequence |  |

## `graphSearch(paramaters: object): *`

Basic uninformed graph search.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| paramaters | object |  |

## `defaultGenerateResult(leaf: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| leaf | * | nullable: undefined |

## `defaultStepCost(state: *, action: *): number`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| state | * | nullable: undefined |
| action | * | nullable: undefined |