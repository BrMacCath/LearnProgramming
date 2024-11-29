---
fields:
  - name: taskStatus
    type: Select
    options:
      sourceType: ValuesListNotePath
      valuesList: {}
      valuesListNotePath: Background/Choices/TaskStatusChoices.md
    path: ""
    id: gNXItv
  - name: taskType
    type: Select
    options:
      sourceType: ValuesListNotePath
      valuesList: {}
      valuesListNotePath: Background/Choices/TaskChoices.md
    path: ""
    id: SIGzcD
  - name: weekNum
    type: Number
    options:
      min: 0
    path: ""
    id: qoFB56
  - name: due_date
    type: Date
    options:
      dateShiftInterval: 1 day
      dateFormat: MM-DD-YYYY
      defaultInsertAsLink: false
      linkPath: ""
    path: ""
    id: 4FR47V
  - name: save
    type: Boolean
    options: {}
    path: ""
    id: PL68GU
  - name: script
    type: Input
    options: {}
    path: ""
    id: tbTHJE
version: "2.14"
limit: 20
mapWithTag: false
icon: calendar-check
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - tbTHJE
  - PL68GU
  - 4FR47V
  - qoFB56
  - SIGzcD
  - gNXItv
---
