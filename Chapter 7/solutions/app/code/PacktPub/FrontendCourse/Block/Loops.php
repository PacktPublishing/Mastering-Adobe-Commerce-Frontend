<?php

declare(strict_types=1);

namespace PacktPub\FrontendCourse\Block;

use Magento\Framework\View\Element\Template;

class Loops extends Template
{

    /**
     * @return string[]
     */
    public function getSimpleArray(): array
    {
        return [
            'Jakub', 'Thomas', 'Albert', 'Vincent', 'Gregory', 'Henry', 'Lucas', 'Bartosz'
        ];
    }
}
