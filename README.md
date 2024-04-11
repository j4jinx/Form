# Form
Minimal Form & Input React Components.

Provides Form, Input, Textarea, Radio, Checkbox and Select component

![npm bundle size](https://img.shields.io/bundlephobia/min/@j4jinxx/form)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@j4jinxx/form)
![npm download](https://img.shields.io/npm/dm/@j4jinxx/form.svg)

## Install
    npm i @j4jinxx/form

## Import
    import Form, { Input, Select, Checkbox, Radio } from '@j4jinxx/form';


## Form Props
|   Name   |  Type  |   Default       | Description |
|----------|:-------|:----------------|:------------|
| onDone   | func   | ( ) => { }      | Callback fired when Form gets validated and submitted (returns form current Ref)|
| children | node   |                 | Form children (input, radio, select, checkbox)  |


## Input Props
|   Name    |  Type  |   Default       | Description |
|-----------|:-------|:----------------|:------------|
| name      | string |                 | Input field name |
| type      | string | text            | Input field type  |
| label     | string |                 | Input field label  |
| showLabel | bool   | true            | If false, field label is hidden  |
| withGroup | bool   | true            | If false, field margin is removed  |

## Select Props
|   Name    |  Type  |   Default       | Description |
|-----------|:-------|:----------------|:------------|
| name      | string |                 | Select field name |
| options   | array  | [ ]             | Select field options ( [{ label, value }, { label, value }] )  |
| label     | string |                 | Select field label  |
| showLabel | bool   | true            | If false, field label is hidden  |
| withGroup | bool   | true            | If false, field margin is removed  |

## Checkbox Props
|   Name           |  Type  |   Default       | Description |
|------------------|:-------|:----------------|:------------|
| name             | string |                 | Checkbox field name |
| options          | array  | [ ]             | Checkbox field options ( [{ label, value }, { label, value }] )  |
| label            | string |                 | Checkbox field label  |
| showLabel        | bool   | true            | If false, field label is hidden  |
| withGroup        | bool   | true            | If false, field margin is removed  |
| selectedValues   | array  | [ ]             | Default Checked Options  |
| inline           | bool   | true            | If true, Checkbox options shown inline  |

## Radio Props
|   Name           |  Type  |   Default       | Description |
|------------------|:-------|:----------------|:------------|
| name             | string |                 | Radio field name |
| options          | array  | [ ]             | Radio field options ( [{ label, value }, { label, value }] )  |
| label            | string |                 | Radio field label  |
| showLabel        | bool   | true            | If false, field label is hidden  |
| withGroup        | bool   | true            | If false, field margin is removed  |
| selectedValue    | any    |                 | Default Checked Option  |
| inline           | bool   | true            | If true, Radio options shown inline  |