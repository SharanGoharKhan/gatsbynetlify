import * as React from "react"

function EasyEats(props) {
    return (
        <svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
            <rect width="98" height="98" fill="url(#pattern0)" />
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#image0" transform="scale(0.003367)" />
                </pattern>
                <image id="image0" width="297" height="297" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAAEpCAYAAADPmdSCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LjE2NDc1MywgMjAyMS8wMi8xNS0xMTo1MjoxMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAyQjk3MEEzQzlCODExRUJBQjI2RTVGNTM3N0I4MjBCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAyQjk3MEE0QzlCODExRUJBQjI2RTVGNTM3N0I4MjBCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDJCOTcwQTFDOUI4MTFFQkFCMjZFNUY1Mzc3QjgyMEIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDJCOTcwQTJDOUI4MTFFQkFCMjZFNUY1Mzc3QjgyMEIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4gHu0kAAAJ9UlEQVR42uzdXW7k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" />
            </defs>
        </svg>

    )
}

export default EasyEats


