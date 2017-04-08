/*
 * Copyright (C) 2014-2017 Andrey Antukh <niwi@niwi.nz>
 * Copyright (C) 2014-2017 Jesús Espino Garcia <jespinog@gmail.com>
 * Copyright (C) 2014-2017 David Barragán Merino <bameda@dbarragan.com>
 * Copyright (C) 2014-2017 Alejandro Alonso <alejandro.alonso@kaleidos.net>
 * Copyright (C) 2014-2017 Juan Francisco Alcántara <juanfran.alcantara@kaleidos.net>
 * Copyright (C) 2014-2017 Xavi Julian <xavier.julian@kaleidos.net>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 * File: modules/base/bind.coffee
 */

import {bindOnce} from "../../utils"
import * as angular from "angular"

// Escape Html bind once directive
let BindOnceBindDirective = function() {
    let link = ($scope, $el, $attrs) =>
        bindOnce($scope, $attrs.tgBoBind, val => $el.text(val))
    ;

    return {link};
};

// Html bind once directive
let BindOnceHtmlDirective = function() {
    let link = ($scope, $el, $attrs) =>
        bindOnce($scope, $attrs.tgBoHtml, val => $el.html(val))
    ;

    return {link};
};

// Object reference bind once helper.
let BindOnceRefDirective = function() {
    let link = ($scope, $el, $attrs) =>
        bindOnce($scope, $attrs.tgBoRef, val => $el.html(`#${val} `))
    ;
    return {link};
};

// Object src bind once helper.
let BindOnceSrcDirective = function() {
    let link = ($scope, $el, $attrs) =>
        bindOnce($scope, $attrs.tgBoSrc, val => $el.attr("src", val))
    ;
    return {link};
};

// Object href bind once helper.
let BindOnceHrefDirective = function() {
    let link = ($scope, $el, $attrs) =>
        bindOnce($scope, $attrs.tgBoHref, val => $el.attr("href", val))
    ;
    return {link};
};

// Object alt bind once helper.
let BindOnceAltDirective = function() {
    let link = ($scope, $el, $attrs) =>
        bindOnce($scope, $attrs.tgBoAlt, val => $el.attr("alt", val))
    ;
    return {link};
};

// Object title bind once helper.
let BindOnceTitleDirective = function() {
    let link = ($scope, $el, $attrs) =>
        bindOnce($scope, $attrs.tgBoTitle, val => $el.attr("title", val))
    ;
    return {link};
};

let BindTitleDirective = function() {
    let link = ($scope, $el, $attrs) =>
        $scope.$watch($attrs.tgTitleHtml, function(val) {
            if (val != null) { return $el.attr("title", val); }
        })
    ;

    return {link};
};

let BindHtmlDirective = function() {
    let link = ($scope, $el, $attrs) =>
        $scope.$watch($attrs.tgBindHtml, function(val) {
            if (val != null) { return $el.html(val); }
        })
    ;

    return {link};
};

let module = angular.module("taigaBase");
module.directive("tgBoBind", BindOnceBindDirective);
module.directive("tgBoHtml", BindOnceHtmlDirective);
module.directive("tgBoRef", BindOnceRefDirective);
module.directive("tgBoSrc", BindOnceSrcDirective);
module.directive("tgBoHref", BindOnceHrefDirective);
module.directive("tgBoAlt", BindOnceAltDirective);
module.directive("tgBoTitle", BindOnceTitleDirective);
module.directive("tgBindTitle", BindTitleDirective);
module.directive("tgBindHtml", BindHtmlDirective);