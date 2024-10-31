const tree = 
    {
        node: 1,
        children: [
        {
            node: 2,
            children: [
            {
                node: 3,
                children: [
                {
                    node: 4,
                    children: [
                    {
                        node: 5,
                        children: [],
                    },
                    {
                        node: 6,
                        children: [],
                    },
                    {
                        node: 7,
                        children: [],
                    },
                    {
                        node: 8,
                        children: [],
                    },
                    ],
                },
                {
                    node: 9,
                    children: [],
                },
                ],
            },
            ],
        },
        {
            node: 10,
            children: [
            {
                node: 11,
                children: [
                {
                    node: 12,
                    children: [],
                },
                ],
            },
            {
                node: 13,
                children: [],
            },
            {
                node: 14,
                children: [],
            },
            ],
        },
        ],
    };


function findNode(tree, target) {
    
    if (!tree) {
        return -1;
    }

    if (tree.node === target) {
        return tree.node
    }

    // FIXME for/of
    for (let i = 0; i < tree.children.length; i++) {
        const result = findNode(tree.children[i], target);
        /*
        * FIXME между логическими блоками оставляй пустую строку.
        *  Это улучшает читаемость кода
        *  */
        if (result != -1) {
            return result;
        }
    }
// FIXME снова форматирование поехало
return -1;
}

// FIXME Функция должна вернуть узел, а возвращает значения узла
console.log(findNode(tree, 14));
