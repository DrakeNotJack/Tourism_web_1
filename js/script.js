function filterContent(category) {
    const items = document.querySelectorAll('.item');

    if (category === 'all') {
        items.forEach(item => {
            item.classList.add('active'); // 显示所有内容
        });
    } else {
        items.forEach(item => {
            if (item.classList.contains(category)) {
                item.classList.add('active'); // 显示匹配类别的内容
            } else {
                item.classList.remove('active'); // 隐藏其他内容
            }
        });
    }
}

// 默认显示全部内容
filterContent('all');
