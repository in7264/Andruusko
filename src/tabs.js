function showTab(tabNumber) {
    // Скрыть все вкладки
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.style.display = 'none';
    });

    // Показать выбранную вкладку
    var selectedTab = document.getElementById('tab' + tabNumber);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
}

// По умолчанию показать первую вкладку
showTab(1);