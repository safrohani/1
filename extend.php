<?php

namespace odoorbell\htmleditor;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js'),
    (new Extend\Formatter)
        ->configure(function ($configurator) {
            // 允许 HTML 内容通过 TextFormatter 渲染
            $configurator->BBCodes->addCustom('<html>{TEXT}</html>', '{TEXT}');
        })
];
