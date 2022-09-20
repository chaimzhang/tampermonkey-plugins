// ==UserScript==
// @name         bing必应搜索宽屏美化
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       chaimzhang
// @match        https://cn.bing.com/*
// @icon         data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAgNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxOC4xMzUzIiB4Mj0iMzUuMzA1OCIgeTE9IjE3LjM3MTciIHkyPSIyNy4yODUxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzN2JkZmYiLz48c3RvcCBvZmZzZXQ9Ii4xODMyIiBzdG9wLWNvbG9yPSIjMzNiZmZkIi8+PHN0b3Agb2Zmc2V0PSIuMzU3NiIgc3RvcC1jb2xvcj0iIzI4YzVmNSIvPjxzdG9wIG9mZnNldD0iLjUyOCIgc3RvcC1jb2xvcj0iIzE1ZDBlOSIvPjxzdG9wIG9mZnNldD0iLjU0NjgiIHN0b3AtY29sb3I9IiMxMmQxZTciLz48c3RvcCBvZmZzZXQ9Ii41OTAzIiBzdG9wLWNvbG9yPSIjMWNkMmU1Ii8+PHN0b3Agb2Zmc2V0PSIuNzY3OSIgc3RvcC1jb2xvcj0iIzQyZDhkYyIvPjxzdG9wIG9mZnNldD0iLjkxMDciIHN0b3AtY29sb3I9IiM1OWRiZDYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2MmRjZDQiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI4LjA3MjgiIHgyPSIzMy4wNjIxIiB5MT0iMzIuMjQzNSIgeTI9IjMyLjI0MzUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzM5ZDJmZiIvPjxzdG9wIG9mZnNldD0iLjE1MDEiIHN0b3AtY29sb3I9IiMzOGNlZmUiLz48c3RvcCBvZmZzZXQ9Ii4yOTMxIiBzdG9wLWNvbG9yPSIjMzVjM2ZhIi8+PHN0b3Agb2Zmc2V0PSIuNDMyNyIgc3RvcC1jb2xvcj0iIzJmYjBmMyIvPjxzdG9wIG9mZnNldD0iLjU0NjgiIHN0b3AtY29sb3I9IiMyOTlhZWIiLz48c3RvcCBvZmZzZXQ9Ii41ODI3IiBzdG9wLWNvbG9yPSIjMjY5MmVjIi8+PHN0b3Agb2Zmc2V0PSIuNzYzNSIgc3RvcC1jb2xvcj0iIzFhNmNmMSIvPjxzdG9wIG9mZnNldD0iLjkwOSIgc3RvcC1jb2xvcj0iIzEzNTVmNCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzEwNGNmNSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJjIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjEyLjY4NTgiIHgyPSIxMi42ODU4IiB5MT0iMzQuNDQwMSIgeTI9IjEuMDI1NCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMWI0OGVmIi8+PHN0b3Agb2Zmc2V0PSIuMTIyMSIgc3RvcC1jb2xvcj0iIzFjNTFmMCIvPjxzdG9wIG9mZnNldD0iLjMyMTIiIHN0b3AtY29sb3I9IiMxZTY5ZjUiLz48c3RvcCBvZmZzZXQ9Ii41Njc2IiBzdG9wLWNvbG9yPSIjMjE5MGZiIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjZiOGY0Ii8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJtMCAwaDQwdjQwaC00MHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJtMzQuNjY3IDI1LjU1N2MwIC4zODktLjAyMS43NzUtLjA2MyAxLjE1NS0uMjUxIDIuMzIxLTEuMjU2IDQuNDItMi43NjggNi4wNDMuMTktLjIxMS4zNjItLjQzOS41MTMtLjY4Mi4xMTYtLjE4NS4yMTktLjM3OC4zMDctLjU3OS4wMzItLjA2Ni4wNjEtLjEzNS4wODUtLjIwNC4wMjktLjA2Ni4wNTMtLjEzNS4wNzQtLjIwNC4wMjQtLjA2My4wNDUtLjEzLjA2My0uMTk2LjAxOC0uMDY5LjAzNy0uMTM3LjA1My0uMjA2LjAwMy0uMDA4LjAwNS0uMDE2LjAwOC0uMDI0LjAxNi0uMDY5LjAyOS0uMTM3LjA0Mi0uMjA2LjAxMy0uMDcxLjAyNi0uMTQzLjAzNy0uMjE0IDAtLjAwMyAwLS4wMDMgMC0uMDA1LjAxMS0uMDY2LjAxOC0uMTMyLjAyNC0uMjAxLjAxNi0uMTU2LjAyNC0uMzEyLjAyNC0uNDcxIDAtLjg5NC0uMjQ2LTEuNzMyLS42NzctMi40NDUtLjA5OC0uMTY3LS4yMDYtLjMyNS0uMzI1LS40NzYtLjE0LS4xOC0uMjkxLS4zNDktLjQ1NS0uNTA1LS40MDctLjM5NC0uODgzLS43MTYtMS40MDktLjk0NC0uMjI3LS4xLS40NjUtLjE4Mi0uNzA4LS4yNDMtLjAwMyAwLS4wMDgtLjAwMy0uMDExLS4wMDNsLS4wODUtLjAyOS0xLjIzMi0uNDIzdi0uMDAzbC0zLjIyMi0xLjEwOGMtLjAxMS0uMDAzLS4wMjQtLjAwMy0uMDMyLS4wMDVsLS4yMDEtLjA3NGMtLjY0OC0uMjU0LTEuMTg0LS43My0xLjUyLTEuMzM1bC0xLjE3Ni0zLTEuMzQ4LTMuNDM3LS4yNTktLjY2NC0uMDY2LS4xMzVjLS4wNzQtLjE4LS4xMTQtLjM3NS0uMTE0LS41NzkgMC0uMDUzIDAtLjEwNi4wMDUtLjE1My4wNzctLjc1Ni43MTktMS4zNDggMS40OTYtMS4zNDguMjA2IDAgLjQwNC4wNDIuNTg0LjExOWw2LjAwNiAzLjA4IDEuMTg0LjYwNWMuNjI2LjM3MyAxLjIxMS44MTIgMS43NDUgMS4zMDYgMS45MzUgMS43NzYgMy4yMDQgNC4yNjcgMy4zOTQgNy4wNS4wMTYuMjQ4LjAyNy40OTQuMDI3Ljc0M3oiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJtMzMuMDYyIDI5LjU2NGMwIC4zMDctLjAyOS42MDMtLjA4Mi44OTEtLjAxNi4wNzctLjAzMi4xNTMtLjA1LjIzLS4wMzQuMTM3LS4wNzEuMjctLjExNi40MDItLjAyNC4wNjktLjA0OC4xMzctLjA3NC4yMDQtLjAyNi4wNjktLjA1Ni4xMzUtLjA4NS4yMDQtLjA4Ny4yMDEtLjE5LjM5NC0uMzA3LjU3OS0uMTUxLjI0My0uMzIzLjQ3MS0uNTEzLjY4Mi0uODc1Ljk2OC0zLjg0NyAyLjY5My00Ljk0MiAzLjM5NGwtMi40MzEgMS40ODZjLTEuNzgxIDEuMDk4LTMuNDY2IDEuODc0LTUuNTg4IDEuOTI3LS4xLjAwMy0uMTk4LjAwNS0uMjk2LjAwNS0uMTM3IDAtLjI3Mi0uMDAzLS40MDctLjAwOC0zLjU5NS0uMTM3LTYuNzMtMi4wNjctOC41MzktNC45Mi0uODI3LTEuMzAzLTEuMzc1LTIuNzk5LTEuNTYtNC40MDcuMzg5IDIuMTk3IDIuMzAzIDMuODYyIDQuNjEgMy44NjIuODA5IDAgMS41NjgtLjIwNCAyLjIzMS0uNTYzLjAwNS0uMDAzLjAxMS0uMDA1LjAxNi0uMDA4bC4yMzgtLjE0My45NjgtLjU3MSAxLjIzMi0uNzN2LS4wMzRsLjE1OS0uMDk1IDExLjAyMS02LjUzLjg0OS0uNTAyLjA4NS4wMjljLjAwMyAwIC4wMDguMDAzLjAxMS4wMDMuMjQzLjA2MS40ODEuMTQzLjcwOC4yNDMuNTI2LjIyNyAxLjAwMi41NSAxLjQwOS45NDQuMTY0LjE1Ni4zMTUuMzI1LjQ1NS41MDUuMTE5LjE1MS4yMjcuMzA5LjMyNS40NzYuNDI3LjcxNC42NzMgMS41NTIuNjczIDIuNDQ1eiIgZmlsbD0idXJsKCNiKSIvPjxwYXRoIGQ9Im0xNy4zNzIgNy43NzQtLjAwNCAyNC4zMDYtMS4yMzIuNzMtLjk2OC41NzEtLjIzOC4xNDVjLS4wMDQgMC0uMDExLjAwNC0uMDE0LjAwNy0uNjY1LjM1OC0xLjQyMy41NjQtMi4yMzMuNTY0LTIuMzA5IDAtNC4yMi0xLjY2Ni00LjYxLTMuODYyLS4wMTgtLjEwMS0uMDMyLS4yMDYtLjA0My0uMzA3LS4wMTYtLjE5Mi0uMDI2LS4zOC0uMDMtLjU3MnYtMjcuMzU1YzAtLjg2My43MDEtMS41NjggMS41NjgtMS41NjguMzI1IDAgLjYyOS4xMDEuODc4LjI2N2w0Ljc5NCAzLjEzMmMuMDI1LjAyMi4wNTQuMDQuMDgzLjA1OCAxLjIzOS44NDUgMi4wNDkgMi4yNjkgMi4wNDkgMy44ODR6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+
// @grant        none
// @require      https://cdn.staticfile.org/jquery/3.6.0/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    $("#b_results").width("calc(100% - var(--lgutter))")
    $("#b_context").css("display","none")
})();