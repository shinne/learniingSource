'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addTodo = addTodo;
exports.completeTodo = completeTodo;
exports.setVisibilityFilter = setVisibilityFilter;
/**
 * action 类型
 */

var ADD_TODO = exports.ADD_TODO = 'ADD_TODO';
var COMPLETE_TODO = exports.COMPLETE_TODO = 'COMPLETE_TODO';
var SET_VISIBILITY_FILTER = exports.SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * 其他的常量
 */

var VisibilityFilters = exports.VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLTED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 *  action 创建函数
 */

function addTodo(text) {
    return {
        type: ADD_TODO,
        text: text
    };
}

function completeTodo(index) {
    return {
        type: COMPLETE_TODO,
        index: index
    };
}

function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter: filter
    };
}
//# sourceMappingURL=actions.js.map