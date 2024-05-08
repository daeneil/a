// Copyright (C) 2019-2022 Intel Corporation
//
// SPDX-License-Identifier: MIT

const BASE_STROKE_WIDTH = 1.25;
const BASE_GRID_WIDTH = 2;
const BASE_POINT_SIZE = 4;
const TEXT_MARGIN = 10;
const AREA_THRESHOLD = 9;
const SIZE_THRESHOLD = 3;
const POINTS_STROKE_WIDTH = 1;
const POINTS_SELECTED_STROKE_WIDTH = 4;
const MIN_EDGE_LENGTH = 3;
const CUBOID_ACTIVE_EDGE_STROKE_WIDTH = 2.5;
const CUBOID_UNACTIVE_EDGE_STROKE_WIDTH = 1.75;
const UNDEFINED_ATTRIBUTE_VALUE = '__undefined__';
const ARROW_PATH = 'M13.162 6.284L.682.524a.483.483 0 0 0-.574.134.477.477 0 ' +
    '0 0-.012.59L4.2 6.72.096 12.192a.479.479 0 0 0 .585.724l12.48-5.76a.48.48 0 0 0 0-.872z';
const BASE_PATTERN_SIZE = 5;
const SNAP_TO_ANGLE_RESIZE_DEFAULT = 0.1;
const SNAP_TO_ANGLE_RESIZE_SHIFT = 15;
const MINIMUM_TEXT_FONT_SIZE = 8;
const SKELETON_RECT_MARGIN = 20;

const DEFAULT_SHAPE_TEXT_SIZE = 12;
const DEFAULT_SHAPE_TEXT_CONTENT = 'id,label,attributes,source,descriptions';
const DEFAULT_SHAPE_TEXT_POSITION: 'auto' | 'center' = 'auto';
const DEFAULT_UNDEFINED_ATTR_VALUE = '__undefined__';

const CONFLICT_COLOR = '#ff4800';
const WARNING_COLOR = '#ff7301';
const SHADED_COLOR = '#808080';

export default {
    BASE_STROKE_WIDTH,
    BASE_GRID_WIDTH,
    BASE_POINT_SIZE,
    TEXT_MARGIN,
    AREA_THRESHOLD,
    SIZE_THRESHOLD,
    POINTS_STROKE_WIDTH,
    POINTS_SELECTED_STROKE_WIDTH,
    MIN_EDGE_LENGTH,
    CUBOID_ACTIVE_EDGE_STROKE_WIDTH,
    CUBOID_UNACTIVE_EDGE_STROKE_WIDTH,
    UNDEFINED_ATTRIBUTE_VALUE,
    ARROW_PATH,
    BASE_PATTERN_SIZE,
    SNAP_TO_ANGLE_RESIZE_DEFAULT,
    SNAP_TO_ANGLE_RESIZE_SHIFT,
    DEFAULT_SHAPE_TEXT_SIZE,
    DEFAULT_SHAPE_TEXT_CONTENT,
    DEFAULT_SHAPE_TEXT_POSITION,
    DEFAULT_UNDEFINED_ATTR_VALUE,
    MINIMUM_TEXT_FONT_SIZE,
    SKELETON_RECT_MARGIN,
    CONFLICT_COLOR,
    WARNING_COLOR,
    SHADED_COLOR,
};
