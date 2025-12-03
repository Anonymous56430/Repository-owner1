// بيانات النظام المالي
const financialData = {
    transactions: [
        { 
            id: 1, 
            code: 'TXN-001',
            date: '2023-10-15', 
            description: 'تحصيل مستحقات من عميل', 
            type: 'إيراد', 
            amount: 5000,
            status: 'مكتمل',
            debitAccount: 'cash',
            creditAccount: 'receivables'
        },
        { 
            id: 2, 
            code: 'TXN-002',
            date: '2023-10-14', 
            description: 'دفع فواتير موردين', 
            type: 'مصروف', 
            amount: 3000,
            status: 'مكتمل',
            debitAccount: 'payables',
            creditAccount: 'cash'
        },
        { 
            id: 3, 
            code: 'TXN-003',
            date: '2023-10-13', 
            description: 'مرتبات الموظفين', 
            type: 'مصروف', 
            amount: 15000,
            status: 'قيد المعالجة',
            debitAccount: 'expenses',
            creditAccount: 'cash'
        },
        { 
            id: 4, 
            code: 'TXN-004',
            date: '2023-10-12', 
            description: 'بيع بضاعة', 
            type: 'إيراد', 
            amount: 8000,
            status: 'مكتمل',
            debitAccount: 'cash',
            creditAccount: 'revenue'
        },
        { 
            id: 5, 
            code: 'TXN-005',
            date: '2023-10-11', 
            description: 'شراء معدات', 
            type: 'مصروف', 
            amount: 12000,
            status: 'مكتمل',
            debitAccount: 'assets',
            creditAccount: 'cash'
        }
    ],
    
    accounts: [
        { 
            id: 1, 
            name: 'النقدية', 
            type: 'أصول', 
            balance: 75000,
            status: 'نشط',
            description: 'الحساب النقدي الرئيسي للشركة'
        },
        { 
            id: 2, 
            name: 'الذمم المدينة', 
            type: 'أصول', 
            balance: 150000,
            status: 'نشط',
            description: 'حساب الذمم المدينة والعملاء'
        },
        { 
            id: 3, 
            name: 'الذمم الدائنة', 
            type: 'خصوم', 
            balance: 95000,
            status: 'نشط',
            description: 'حساب الذمم الدائنة والموردين'
        },
        { 
            id: 4, 
            name: 'الإيرادات', 
            type: 'إيرادات', 
            balance: 350000,
            status: 'نشط',
            description: 'حساب إيرادات المبيعات والخدمات'
        },
        { 
            id: 5, 
            name: 'المصروفات', 
            type: 'مصروفات', 
            balance: 285000,
            status: 'نشط',
            description: 'حساب المصروفات التشغيلية'
        }
    ],
    
    inventory: [
        { 
            id: 1, 
            name: 'الأجهزة الإلكترونية', 
            category: 'إلكترونيات',
            quantity: 250,
            value: 500000,
            status: 'متوفر',
            description: 'مخزون الأجهزة الإلكترونية والكهربائية'
        },
        { 
            id: 2, 
            name: 'مستلزمات مكتبية', 
            category: 'قرطاسية',
            quantity: 1200,
            value: 85000,
            status: 'متوفر',
            description: 'مخزون المستلزمات المكتبية والقرطاسية'
        },
        { 
            id: 3, 
            name: 'مواد بناء', 
            category: 'إنشاءات',
            quantity: 500,
            value: 200000,
            status: 'متوفر',
            description: 'مخزون مواد البناء والتشييد'
        }
    ],
    
    notifications: [
        { id: 1, title: 'مهمة عاجلة', description: 'يجب تسوية الفواتير المستحقة قبل نهاية اليوم', time: '10:30', unread: true, priority: 'high' },
        { id: 2, title: 'تقرير مالي', description: 'التقرير المالي الشهري جاهز للمراجعة', time: '09:15', unread: true, priority: 'medium' },
        { id: 3, title: 'تحديث النظام', description: 'تم تحديث النظام المالي إلى الإصدار 1.0', time: 'أمس', unread: false, priority: 'low' },
        { id: 4, title: 'موعد تسليم', description: 'آخر موعد لتسليم الإقرارات الضريبية', time: 'الاثنين', unread: true, priority: 'high' }
    ],
    
    chatMessages: {
        management: [
            { sender: 'الإدارة المالية', message: 'ما هو وضع التدفقات النقدية لهذا الشهر؟', time: '10:00', type: 'received' }
        ],
        accountingManager: [
            { sender: 'مدير المحاسبة', message: 'أهلاً بك، هل هناك أي استفسارات محاسبية؟', time: '09:30', type: 'received' }
        ],
        accountingTeam: [
            { sender: 'محاسب', message: 'مرحبا بالجميع، القيود اليومية جاهزة للمراجعة', time: '10:30', type: 'received' }
        ],
        auditTeam: [
            { sender: 'مراجع', message: 'التقرير النهائي للمراجعة جاهز', time: '09:15', type: 'received' }
        ],
        treasuryTeam: [
            { sender: 'مسؤول الخزينة', message: 'السيولة النقدية الحالية 75,000 ر.س', time: 'أمس', type: 'received' }
        ]
    },
    
    tasks: {
        current: [
            { 
                id: 1, 
                title: 'تسوية الفواتير المستحقة', 
                dueDate: '2024-12-31', 
                priority: 'high', 
                description: 'تسوية جميع الفواتير المستحقة قبل نهاية الشهر',
                completed: false 
            },
            { 
                id: 2, 
                title: 'مراجعة القيود اليومية', 
                dueDate: '2024-12-28', 
                priority: 'medium', 
                description: 'مراجعة واعتماد القيود اليومية للشهر',
                completed: false 
            },
            { 
                id: 3, 
                title: 'إعداد الميزانية', 
                dueDate: '2024-12-25', 
                priority: 'low', 
                description: 'إعداد مسودة الميزانية للربع القادم',
                completed: false 
            }
        ],
        future: [
            { 
                id: 4, 
                title: 'تسليم الإقرارات الضريبية', 
                dueDate: '2024-01-25', 
                priority: 'high', 
                description: 'تسليم الإقرارات الضريبية للربع الرابع',
                completed: false 
            },
            { 
                id: 5, 
                title: 'مراجعة الحسابات السنوية', 
                dueDate: '2024-02-01', 
                priority: 'medium', 
                description: 'بدء مراجعة الحسابات الختامية للعام',
                completed: false 
            },
            { 
                id: 6, 
                title: 'تقرير الأداء المالي', 
                dueDate: '2024-02-15', 
                priority: 'low', 
                description: 'إعداد تقرير الأداء المالي السنوي',
                completed: false 
            }
        ]
    },
    
    calendarTasks: {
        '2024-12-31': [
            { id: 1, title: 'تسوية الفواتير المستحقة', priority: 'high' }
        ],
        '2024-12-28': [
            { id: 2, title: 'مراجعة القيود اليومية', priority: 'medium' }
        ],
        '2024-12-25': [
            { id: 3, title: 'إعداد الميزانية', priority: 'low' }
        ],
        '2024-01-25': [
            { id: 4, title: 'تسليم الإقرارات الضريبية', priority: 'high' }
        ],
        '2024-02-01': [
            { id: 5, title: 'مراجعة الحسابات السنوية', priority: 'medium' }
        ],
        '2024-02-15': [
            { id: 6, title: 'تقرير الأداء المالي', priority: 'low' }
        ]
    }
};

// متغيرات عامة
let activeChat = null;
let isLeftSidebarExpanded = false;
let currentDate = new Date();
let isCalendarOpen = false;
let sidebarWidth = 300;
let chatMode = 'sidebar'; // 'sidebar' أو 'fullscreen'

// دوال المستخدم المحدثة
function initializeUser() {
    const userData = JSON.parse(localStorage.getItem('currentFinancialUser')) || {
        full_name: 'أحمد محمد',
        username: 'admin',
        role: 'مدير النظام',
        employee_id: 'FIN-001',
        avatar: 'https://via.placeholder.com/50'
    };
    
    document.getElementById('o12').textContent = `مرحبا، ${userData.full_name.split(' ')[0]}`;
    document.getElementById('o94').textContent = userData.full_name;
    document.getElementById('o8').src = userData.avatar;
    
    document.querySelector('.o10').textContent = userData.role;
}

// دالة لتحديث التواريخ في جميع الصفحات
function updateAllDates() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        timeZone: 'Asia/Riyadh'
    };
    
    const arabicDate = now.toLocaleDateString('ar-SA', options);
    
    const dateElements = [
        'o99', 'om20', 'om23', 
        'om25', 'om26', 'om27', 
        'om43'
    ];
    
    dateElements.forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = arabicDate;
        }
    });
}

// دالة تحديث الساعة
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ar-SA', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('o20').textContent = timeString;
}

// دالة تحديث التاريخ الميلادي
function updateDashboardDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        timeZone: 'Asia/Riyadh'
    };
    
    const arabicDate = now.toLocaleDateString('ar-SA', options);
    
    document.getElementById('o99').textContent = arabicDate;
}

// تهيئة التطبيق المحدثة
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('o79').classList.add('open');
    
    initializeDashboard();
    initializeUser();
    loadNotifications();
    initializeCalendar();
    loadTasks();
    initializeResizableSidebar();
    
    updateClock();
    setInterval(updateClock, 1000);
    
    updateDashboardDate();
    
    if (!localStorage.getItem('currentFinancialUser')) {
        const defaultUser = {
            full_name: 'أحمد محمد',
            username: 'admin',
            role: 'مدير النظام',
            employee_id: 'FIN-001',
            avatar: 'https://via.placeholder.com/50'
        };
        localStorage.setItem('currentFinancialUser', JSON.stringify(defaultUser));
    }
});

// دوال الشريط الأيسر
function toggleLeftSidebar() {
    const leftSidebar = document.getElementById('o26');
    leftSidebar.classList.toggle('open');
}

function closeLeftSidebar() {
    const leftSidebar = document.getElementById('o26');
    leftSidebar.classList.remove('open');
    closeActiveChat();
}

function minimizeLeftSidebar() {
    const leftSidebar = document.getElementById('o26');
    leftSidebar.classList.remove('open');
}

function toggleLeftSidebarExpand() {
    const leftSidebar = document.getElementById('o26');
    const expandIcon = document.getElementById('o31');
    
    leftSidebar.classList.toggle('expanded');
    
    if (leftSidebar.classList.contains('expanded')) {
        expandIcon.className = 'fas fa-compress';
        document.getElementById('o79').style.display = 'none';
        document.getElementById('o88').style.display = 'none';
    } else {
        expandIcon.className = 'fas fa-expand';
        document.getElementById('o79').style.display = 'block';
        document.getElementById('o88').style.display = 'block';
    }
}

function switchLeftTab(tabName) {
    document.querySelectorAll('.o33').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.querySelectorAll('.o35').forEach(content => {
        content.classList.remove('active');
    });
    
    event.currentTarget.classList.add('active');
    document.getElementById(tabName + 'Tab').classList.add('active');
    
    if (tabName === 'notifications') {
        loadNotifications();
    } else if (tabName === 'tasks') {
        loadTasks();
    } else if (tabName === 'chat') {
        closeActiveChat();
    }
}

function loadNotifications() {
    // تم تعبئة الإشعارات مباشرة في HTML
}

function markAllAsRead() {
    financialData.notifications.forEach(notification => {
        notification.unread = false;
    });
    const notificationElements = document.querySelectorAll('.o40');
    notificationElements.forEach(element => {
        element.classList.remove('o41');
    });
    alert('تم تحديد جميع الإشعارات كمقروءة');
}

// دوال الشات
function openChat(chatId) {
    activeChat = chatId;
    const chatTab = document.getElementById('chatTab');
    
    document.querySelector('.o47').style.display = 'none';
    document.querySelector('.o59').style.display = 'flex';
    document.querySelector('.o58').style.display = 'none';
    
    const chatNames = {
        management: 'الإدارة المالية',
        accountingManager: 'مدير المحاسبة',
        accountingTeam: 'فريق المحاسبة',
        auditTeam: 'فريق المراجعة',
        treasuryTeam: 'فريق الخزينة'
    };
    
    document.getElementById('o63').textContent = chatNames[chatId] || 'محادثة';
    
    loadChatMessages(chatId);
    
    updateChatControls();
}

function closeActiveChat() {
    activeChat = null;
    document.querySelector('.o47').style.display = 'block';
    document.querySelector('.o59').style.display = 'none';
    document.querySelector('.o58').style.display = 'flex';
    chatMode = 'sidebar';
    
    const chatArea = document.getElementById('o57');
    const leftSidebar = document.getElementById('o26');
    chatArea.classList.remove('fullscreen');
    leftSidebar.classList.remove('chat-fullscreen');
}

function loadChatMessages(chatId) {
    const messagesContainer = document.getElementById('o67');
    messagesContainer.innerHTML = '';
    
    const messages = financialData.chatMessages[chatId] || [];
    
    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${message.type === 'received' ? 'received' : ''}`;
        messageElement.innerHTML = `
            <div class="message-sender">${message.sender}</div>
            <div class="message-content">${message.message}</div>
            <div class="message-time">${message.time}</div>
        `;
        messagesContainer.appendChild(messageElement);
    });
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendActiveChatMessage() {
    if (!activeChat) return;
    
    const messageInput = document.getElementById('o69');
    const messageText = messageInput.value.trim();
    
    if (messageText) {
        if (!financialData.chatMessages[activeChat]) {
            financialData.chatMessages[activeChat] = [];
        }
        
        financialData.chatMessages[activeChat].push({
            sender: 'أنت',
            message: messageText,
            time: new Date().toLocaleTimeString('ar-SA'),
            type: 'sent'
        });
        
        loadChatMessages(activeChat);
        messageInput.value = '';
        
        simulateReply(activeChat);
    }
}

function simulateReply(chatId) {
    setTimeout(() => {
        const replies = {
            management: 'شكراً على رسالتك، سنرد عليك قريباً',
            accountingManager: 'تم استلام رسالتك، شكراً لك',
            accountingTeam: 'محاسب: شكراً على المعلومة',
            auditTeam: 'مراجع: سأراجع التقرير',
            treasuryTeam: 'مسؤول الخزينة: شكراً على التحديث'
        };
        
        if (!financialData.chatMessages[chatId]) {
            financialData.chatMessages[chatId] = [];
        }
        
        financialData.chatMessages[chatId].push({
            sender: chatId === 'management' ? 'الإدارة المالية' : 
                   chatId === 'accountingManager' ? 'مدير المحاسبة' :
                   chatId === 'accountingTeam' ? 'محاسب' :
                   chatId === 'auditTeam' ? 'مراجع' : 'مسؤول الخزينة',
            message: replies[chatId],
            time: new Date().toLocaleTimeString('ar-SA'),
            type: 'received'
        });
        
        loadChatMessages(chatId);
    }, 2000);
}

function toggleChatFullscreen() {
    const chatArea = document.getElementById('o57');
    const leftSidebar = document.getElementById('o26');
    const fullscreenIcon = document.getElementById('o65');
    
    if (chatMode === 'sidebar') {
        chatArea.classList.add('fullscreen');
        leftSidebar.classList.add('chat-fullscreen');
        chatMode = 'fullscreen';
        fullscreenIcon.className = 'fas fa-compress';
    } else {
        chatArea.classList.remove('fullscreen');
        leftSidebar.classList.remove('chat-fullscreen');
        chatMode = 'sidebar';
        fullscreenIcon.className = 'fas fa-expand';
    }
}

function updateChatControls() {
    const fullscreenButton = document.querySelector('.o64 .o21');
    if (fullscreenButton) {
        if (chatMode === 'fullscreen') {
            fullscreenButton.innerHTML = '<i class="fas fa-compress"></i>';
            fullscreenButton.title = 'تصغير المحادثة';
        } else {
            fullscreenButton.innerHTML = '<i class="fas fa-expand"></i>';
            fullscreenButton.title = 'تكبير المحادثة';
        }
    }
}

// دوال المهام
function loadTasks() {
    loadCurrentTasks();
    loadUpcomingTasks();
}

function loadCurrentTasks() {
    const currentTasksContainer = document.getElementById('o76');
    currentTasksContainer.innerHTML = '';
    
    financialData.tasks.current.forEach(task => {
        const taskElement = createTaskElement(task);
        currentTasksContainer.appendChild(taskElement);
    });
}

function loadUpcomingTasks() {
    const upcomingTasksContainer = document.getElementById('o77');
    upcomingTasksContainer.innerHTML = '';
    
    financialData.tasks.future.forEach(task => {
        const taskElement = createTaskElement(task);
        upcomingTasksContainer.appendChild(taskElement);
    });
}

function createTaskElement(task) {
    const taskElement = document.createElement('div');
    taskElement.className = `task-item priority-${task.priority}`;
    taskElement.innerHTML = `
        <div class="task-title">${task.title}</div>
        <div class="task-due">${formatDate(task.dueDate)}</div>
        <div class="task-description">${task.description}</div>
    `;
    
    taskElement.addEventListener('click', () => {
        showTaskDetails(task);
    });
    
    return taskElement;
}

function showTaskDetails(task) {
    alert(`تفاصيل المهمة: ${task.title}\n\nالوصف: ${task.description}\nتاريخ الاستحقاق: ${formatDate(task.dueDate)}\nالأولوية: ${getPriorityText(task.priority)}`);
}

function getPriorityText(priority) {
    const priorities = {
        'high': 'عالية',
        'medium': 'متوسطة', 
        'low': 'منخفضة'
    };
    return priorities[priority] || priority;
}

// دوال التقويم
function initializeCalendar() {
    updateMiniCalendar();
}

function updateMiniCalendar() {
    const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
                         'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    document.getElementById('o84').textContent = `${months[month]} ${year}`;
    
    const calendarDays = document.getElementById('o86');
    calendarDays.innerHTML = '';
    
    const dayNames = ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'];
    dayNames.forEach(dayName => {
        const dayElement = document.createElement('div');
        dayElement.className = 'mini-calendar-day day-header';
        dayElement.textContent = dayName;
        calendarDays.appendChild(dayElement);
    });
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const today = new Date();
    
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'mini-calendar-day';
        dayElement.textContent = day;
        
        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        
        if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
            dayElement.classList.add('today');
        }
        
        const dayTasks = financialData.calendarTasks[dateString] || [];
        if (dayTasks.length > 0) {
            const highestPriority = getHighestPriority(dayTasks);
            dayElement.classList.add('has-tasks', `${highestPriority}-priority`);
        }
        
        dayElement.addEventListener('click', () => {
            showAddTaskModal(dateString);
        });
        
        calendarDays.appendChild(dayElement);
    }
}

function toggleCalendar() {
    isCalendarOpen = !isCalendarOpen;
    const calendarModal = document.getElementById('om49');
    const miniCalendar = document.getElementById('miniCalendar');
    
    if (isCalendarOpen) {
        calendarModal.style.display = 'flex';
        miniCalendar.style.display = 'none';
        updateFullCalendar();
    } else {
        calendarModal.style.display = 'none';
        miniCalendar.style.display = 'block';
    }
}

function updateFullCalendar() {
    const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
                         'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    document.getElementById('om52').textContent = `${months[month]} ${year}`;
    
    const calendarGrid = document.getElementById('om60');
    calendarGrid.innerHTML = '';
    
    const dayNames = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    dayNames.forEach(dayName => {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day day-header';
        dayElement.textContent = dayName;
        calendarGrid.appendChild(dayElement);
    });
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const today = new Date();
    
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        
        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        
        if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
            dayElement.classList.add('today');
        }
        
        const dayTasks = financialData.calendarTasks[dateString] || [];
        if (dayTasks.length > 0) {
            const highestPriority = getHighestPriority(dayTasks);
            dayElement.classList.add('has-tasks', `has-${highestPriority}-tasks`);
        }
        
        dayElement.innerHTML = `
            <div class="day-number">${day}</div>
            <div class="day-tasks">
                ${dayTasks.map(task => 
                    `<div class="day-task-item ${task.priority}">${task.title}</div>`
                ).join('')}
            </div>
        `;
        
        dayElement.addEventListener('click', () => {
            showDayTasks(dateString, dayTasks);
        });
        
        calendarGrid.appendChild(dayElement);
    }
}

function getHighestPriority(tasks) {
    if (tasks.some(task => task.priority === 'high')) return 'high';
    if (tasks.some(task => task.priority === 'medium')) return 'medium';
    return 'low';
}

function showDayTasks(dateString, tasks) {
    const tasksSidebar = document.getElementById('om55');
    
    tasksSidebar.innerHTML = `
        <div class="om56">
            <h5>المهام في ${formatDate(dateString)}</h5>
            <button class="o21 o37" onclick="showAddTaskModal('${dateString}')">إضافة مهمة</button>
        </div>
        ${tasks.length === 0 ? 
            '<p>لا توجد مهام في هذا اليوم</p>' : 
            tasks.map(task => `
                <div class="task-detail-item priority-${task.priority}">
                    <div class="task-detail-title">${task.title}</div>
                    <div class="task-detail-desc">${getTaskDescription(task.id)}</div>
                    <div class="task-actions">
                        <button class="o21 o37" onclick="completeTask(${task.id})">إكمال</button>
                        <button class="o21 o37 o22" onclick="deleteTask(${task.id}, '${dateString}')">حذف</button>
                    </div>
                </div>
            `).join('')
        }
    `;
}

function getTaskDescription(taskId) {
    const allTasks = [...financialData.tasks.current, ...financialData.tasks.future];
    const task = allTasks.find(t => t.id === taskId);
    return task ? task.description : 'لا يوجد وصف';
}

function completeTask(taskId) {
    const allTasks = [...financialData.tasks.current, ...financialData.tasks.future];
    const task = allTasks.find(t => t.id === taskId);
    if (task) {
        task.completed = true;
        alert(`تم إكمال المهمة: ${task.title}`);
        loadTasks();
    }
}

function deleteTask(taskId, dateString) {
    if (confirm('هل أنت متأكد من حذف هذه المهمة؟')) {
        financialData.tasks.current = financialData.tasks.current.filter(t => t.id !== taskId);
        financialData.tasks.future = financialData.tasks.future.filter(t => t.id !== taskId);
        
        if (financialData.calendarTasks[dateString]) {
            financialData.calendarTasks[dateString] = financialData.calendarTasks[dateString].filter(t => t.id !== taskId);
            if (financialData.calendarTasks[dateString].length === 0) {
                delete financialData.calendarTasks[dateString];
            }
        }
        
        loadTasks();
        updateMiniCalendar();
        if (isCalendarOpen) {
            updateFullCalendar();
        }
        showDayTasks(dateString, financialData.calendarTasks[dateString] || []);
    }
}

function changeMonth(direction) {
    currentDate.setMonth(currentDate.getMonth() + direction);
    if (isCalendarOpen) {
        updateFullCalendar();
    } else {
        updateMiniCalendar();
    }
}

// دوال إضافة المهام
function showAddTaskModal(prefilledDate = null) {
    const modal = document.createElement('div');
    modal.className = 'om61';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="om63">
            <div class="om64">
                <h3>إضافة مهمة مالية جديدة</h3>
                <button onclick="this.parentElement.parentElement.parentElement.remove()">&times;</button>
            </div>
            <div class="om65">
                <div class="om67">
                    <label for="taskTitle">عنوان المهمة</label>
                    <input type="text" id="taskTitle" class="om69" placeholder="أدخل عنوان المهمة">
                </div>
                <div class="om67">
                    <label for="taskDate">تاريخ المهمة</label>
                    <input type="date" id="taskDate" class="om69" value="${prefilledDate || ''}">
                </div>
                <div class="om67">
                    <label for="taskPriority">أولوية المهمة</label>
                    <select id="taskPriority" class="om69">
                        <option value="high">عالي</option>
                        <option value="medium">متوسط</option>
                        <option value="low">منخفض</option>
                    </select>
                </div>
                <div class="om67">
                    <label for="taskDescription">وصف المهمة</label>
                    <textarea id="taskDescription" class="om69" rows="3" placeholder="أدخل وصف المهمة"></textarea>
                </div>
                <div class="om75">
                    <button class="o21 om21" onclick="saveNewTask()">حفظ المهمة</button>
                    <button class="o21 o22" onclick="this.parentElement.parentElement.parentElement.parentElement.remove()">إلغاء</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function saveNewTask() {
    const title = document.getElementById('taskTitle').value;
    const date = document.getElementById('taskDate').value;
    const priority = document.getElementById('taskPriority').value;
    const description = document.getElementById('taskDescription').value;
    
    if (!title || !date) {
        alert('يرجى ملء العنوان والتاريخ');
        return;
    }
    
    const newTask = {
        id: Math.max(...[...financialData.tasks.current, ...financialData.tasks.future].map(t => t.id)) + 1,
        title: title,
        dueDate: date,
        priority: priority,
        description: description,
        completed: false
    };
    
    const taskDate = new Date(date);
    const today = new Date();
    const daysDifference = taskDate - today;
    const daysFromNow = Math.ceil(daysDifference / (1000 * 60 * 60 * 24));
    
    if (daysFromNow <= 30) {
        financialData.tasks.current.push(newTask);
    } else {
        financialData.tasks.future.push(newTask);
    }
    
    if (!financialData.calendarTasks[date]) {
        financialData.calendarTasks[date] = [];
    }
    financialData.calendarTasks[date].push({
        id: newTask.id,
        title: newTask.title,
        priority: newTask.priority
    });
    
    loadTasks();
    updateMiniCalendar();
    if (isCalendarOpen) {
        updateFullCalendar();
        showDayTasks(date, financialData.calendarTasks[date]);
    }
    
    document.querySelector('.om61').remove();
    alert('تم إضافة المهمة بنجاح');
}

// دوال لوحة التحكم الأساسية
function initializeDashboard() {
    let userData = JSON.parse(localStorage.getItem('currentFinancialUser'));
    if (!userData) {
        const defaultUser = {
            full_name: 'أحمد محمد',
            username: 'admin',
            role: 'مدير النظام',
            employee_id: 'FIN-001',
            avatar: 'https://via.placeholder.com/50'
        };
        localStorage.setItem('currentFinancialUser', JSON.stringify(defaultUser));
        userData = defaultUser;
    }

    initializeUser();
    updateDashboardStats();
    loadTransactions();
    initializeCharts();
}

function updateDashboardStats() {
    updateStatsCards();
    loadRecentTransactions();
}

function updateStatsCards() {
    // حساب الإيرادات والمصروفات من البيانات
    const totalRevenue = financialData.transactions
        .filter(t => t.type === 'إيراد')
        .reduce((sum, t) => sum + t.amount, 0);
    
    const totalExpenses = financialData.transactions
        .filter(t => t.type === 'مصروف')
        .reduce((sum, t) => sum + t.amount, 0);
    
    const netProfit = totalRevenue - totalExpenses;
    const cashFlow = netProfit * 0.6; // تقدير بسيط للتدفق النقدي
    
    document.getElementById('om4').textContent = formatCurrency(totalRevenue);
    document.getElementById('om7').textContent = formatCurrency(totalExpenses);
    document.getElementById('om9').textContent = formatCurrency(netProfit);
    document.getElementById('om11').textContent = formatCurrency(cashFlow);
}

function loadRecentTransactions() {
    // تم تعبئة المعاملات مباشرة في HTML
}

function initializeCharts() {
    const revenueExpenseChartCtx = document.getElementById('om14').getContext('2d');
    const revenueExpenseChart = new Chart(revenueExpenseChartCtx, {
        type: 'line',
        data: {
            labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
            datasets: [
                {
                    label: 'الإيرادات',
                    data: [120000, 135000, 110000, 125000, 140000, 130000, 145000, 150000, 135000, 140000, 155000, 160000],
                    borderColor: '#27ae60',
                    backgroundColor: 'rgba(39, 174, 96, 0.1)',
                    fill: true
                },
                {
                    label: 'المصروفات',
                    data: [85000, 90000, 80000, 95000, 100000, 92000, 105000, 110000, 98000, 102000, 115000, 120000],
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    rtl: true
                }
            }
        }
    });

    const expensesChartCtx = document.getElementById('om15').getContext('2d');
    const expensesChart = new Chart(expensesChartCtx, {
        type: 'doughnut',
        data: {
            labels: ['الرواتب', 'الإيجار', 'المشتريات', 'المرافق', 'التسويق', 'أخرى'],
            datasets: [{
                data: [35, 20, 15, 10, 12, 8],
                backgroundColor: ['#3498db', '#e74c3c', '#f39c12', '#9b59b6', '#1abc9c', '#34495e']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    rtl: true
                }
            }
        }
    });
}

// دوال التنقل والواجهة
function toggleSidebar() {
    const sidebar = document.getElementById('o79');
    sidebar.classList.toggle('open');
}

function showTab(tabId) {
    document.querySelectorAll('.o89').forEach(section => {
        section.style.display = 'none';
    });
    
    document.querySelectorAll('.o80 a').forEach(link => {
        link.classList.remove('active');
    });
    
    document.getElementById(tabId).style.display = 'block';
    document.querySelector(`.o80 a[onclick="showTab('${tabId}')"]`).classList.add('active');
    
    if (tabId === 'dashboard') {
        updateDashboardStats();
    } else if (tabId === 'dailyEntry') {
        loadDailyEntries();
    }
}

function showReportTab(reportId) {
    document.querySelectorAll('.om47').forEach(section => {
        section.style.display = 'none';
    });
    
    document.querySelectorAll('.om45 .om46').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.getElementById(reportId).style.display = 'block';
    event.target.classList.add('active');
}

function logout() {
    if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
        localStorage.removeItem('currentFinancialUser');
        window.location.href = 'login.html';
    }
}

// دوال القيد اليومي
function showAddEntryModal() {
    document.getElementById('om62').style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function saveEntry() {
    const date = document.getElementById('om68').value;
    const description = document.getElementById('om70').value;
    const debitAccount = document.getElementById('om71').value;
    const creditAccount = document.getElementById('om72').value;
    const amount = document.getElementById('om73').value;
    const notes = document.getElementById('om74').value;
    
    if (!date || !description || !debitAccount || !creditAccount || !amount) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }
    
    const newEntry = {
        id: financialData.transactions.length + 1,
        code: `TXN-${String(financialData.transactions.length + 1).padStart(3, '0')}`,
        date: date,
        description: description,
        type: debitAccount === 'cash' ? 'إيراد' : 'مصروف',
        amount: parseInt(amount),
        status: 'مكتمل',
        debitAccount: debitAccount,
        creditAccount: creditAccount,
        notes: notes
    };
    
    financialData.transactions.push(newEntry);
    closeModal('om62');
    loadDailyEntries();
    alert('تم إضافة القيد بنجاح');
}

function loadDailyEntries() {
    const entriesTable = document.getElementById('om22');
    entriesTable.innerHTML = '';
    
    financialData.transactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.code}</td>
            <td>${transaction.date}</td>
            <td>${transaction.description}</td>
            <td>${getAccountName(transaction.debitAccount)}</td>
            <td>${getAccountName(transaction.creditAccount)}</td>
            <td>${formatCurrency(transaction.amount)}</td>
            <td><span class="status-${transaction.status === 'مكتمل' ? 'completed' : 'inprogress'}">${transaction.status}</span></td>
            <td>
                <button class="o21 o37" onclick="editEntry(${transaction.id})">تعديل</button>
                <button class="o21 o37 o22" onclick="deleteEntry(${transaction.id})">حذف</button>
            </td>
        `;
        entriesTable.appendChild(row);
    });
}

function getAccountName(accountCode) {
    const accountMap = {
        'cash': 'النقدية',
        'receivables': 'الذمم المدينة',
        'payables': 'الذمم الدائنة',
        'expenses': 'المصروفات',
        'revenue': 'الإيرادات',
        'assets': 'الأصول',
        'capital': 'رأس المال'
    };
    return accountMap[accountCode] || accountCode;
}

function editEntry(entryId) {
    const entry = financialData.transactions.find(t => t.id === entryId);
    if (entry) {
        alert(`تعديل القيد: ${entry.description}`);
    }
}

function deleteEntry(entryId) {
    if (confirm('هل أنت متأكد من حذف هذا القيد؟')) {
        const entryIndex = financialData.transactions.findIndex(t => t.id === entryId);
        if (entryIndex !== -1) {
            financialData.transactions.splice(entryIndex, 1);
            loadDailyEntries();
            alert('تم حذف القيد بنجاح');
        }
    }
}

function exportEntries() {
    const csvContent = "data:text/csv;charset=utf-8," 
        + "رقم القيد,التاريخ,الوصف,الحساب المدين,الحساب الدائن,المبلغ,الحالة\n"
        + financialData.transactions.map(transaction => 
            `${transaction.code},${transaction.date},${transaction.description},${getAccountName(transaction.debitAccount)},${getAccountName(transaction.creditAccount)},${transaction.amount},${transaction.status}`
        ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "القيود_اليومية.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// دوال الحسابات
function openAccountDetails(accountId) {
    const account = getAccountById(accountId);
    if (account) {
        alert(`تفاصيل الحساب: ${account.name}\n\n${account.description}\n\nالرصيد: ${formatCurrency(account.balance)}`);
    }
}

function getAccountById(accountId) {
    const accountMap = {
        'cash': financialData.accounts[0],
        'receivables': financialData.accounts[1],
        'payables': financialData.accounts[2],
        'expenses': financialData.accounts[4]
    };
    return accountMap[accountId];
}

function openAccountPage(accountId) {
    window.open(`account_${accountId}.html`, '_blank');
}

function viewAccountReport(accountId) {
    event.stopPropagation();
    const account = getAccountById(accountId);
    alert(`كشف حساب: ${account.name}\n\nالكشف جاهز للتحميل.`);
}

// دوال المخزون
function openInventoryDetails(inventoryId) {
    const inventory = getInventoryById(inventoryId);
    if (inventory) {
        alert(`تفاصيل المخزون: ${inventory.name}\n\n${inventory.description}\n\nالكمية: ${inventory.quantity} قطعة\nالقيمة: ${formatCurrency(inventory.value)}`);
    }
}

function getInventoryById(inventoryId) {
    const inventoryMap = {
        'electronics': financialData.inventory[0],
        'office': financialData.inventory[1]
    };
    return inventoryMap[inventoryId];
}

function openInventoryPage(inventoryId) {
    window.open(`inventory_${inventoryId}.html`, '_blank');
}

function viewInventoryReport(inventoryId) {
    event.stopPropagation();
    const inventory = getInventoryById(inventoryId);
    alert(`تقرير المخزون: ${inventory.name}\n\nالتقرير جاهز للتحميل.`);
}

// دوال القوائم المالية
function openStatementDetails(statementId) {
    const statement = getStatementById(statementId);
    if (statement) {
        alert(`تفاصيل القائمة: ${statement.name}\n\n${statement.description}\n\nآخر تحديث: ${statement.lastUpdate}`);
    }
}

function getStatementById(statementId) {
    const statementMap = {
        'balanceSheet': {name: 'الميزانية العمومية', description: 'قائمة المركز المالي للشركة', lastUpdate: 'ديسمبر 2023'},
        'incomeStatement': {name: 'قائمة الدخل', description: 'قائمة الإيرادات والمصروفات والأرباح', lastUpdate: 'ديسمبر 2023'},
        'cashFlow': {name: 'قائمة التدفقات النقدية', description: 'قائمة التدفقات النقدية الداخلة والخارجة', lastUpdate: 'نوفمبر 2023'}
    };
    return statementMap[statementId];
}

function viewStatementReport(statementId) {
    event.stopPropagation();
    const statement = getStatementById(statementId);
    alert(`عرض القائمة: ${statement.name}\n\nالقائمة جاهزة للتحميل.`);
}

function generateStatement(statementId) {
    event.stopPropagation();
    const statement = getStatementById(statementId);
    alert(`إنشاء قائمة: ${statement.name}\n\nجاري إنشاء القائمة المالية...`);
}

// دوال التقارير
function viewFinancialReport(reportId) {
    const reportMap = {
        'performance': 'تقرير الأداء المالي',
        'budget': 'تقرير الميزانية'
    };
    alert(`عرض التقرير: ${reportMap[reportId]}\n\nالتقرير جاهز للتحميل.`);
}

function generateFinancialReport(reportId) {
    const reportMap = {
        'performance': 'تقرير الأداء المالي',
        'budget': 'تقرير الميزانية'
    };
    alert(`إنشاء تقرير: ${reportMap[reportId]}\n\nجاري إنشاء التقرير المالي...`);
}

// دوال مساعدة
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA');
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('ar-SA', {
        style: 'currency',
        currency: 'SAR',
        minimumFractionDigits: 0
    }).format(amount);
}

// دوال السحب والتغيير
function initializeResizableSidebar() {
    const sidebar = document.getElementById('o79');
    const mainContent = document.getElementById('o88');
    let isResizing = false;

    sidebar.addEventListener('mousedown', function(e) {
        if (e.offsetX < 10) {
            isResizing = true;
            document.body.style.cursor = 'col-resize';
            e.preventDefault();
        }
    });

    document.addEventListener('mousemove', function(e) {
        if (!isResizing) return;
        
        const newWidth = window.innerWidth - e.clientX;
        if (newWidth > 200 && newWidth < 500) {
            sidebar.style.width = newWidth + 'px';
            mainContent.style.marginRight = newWidth + 'px';
        }
    });

    document.addEventListener('mouseup', function() {
        isResizing = false;
        document.body.style.cursor = 'default';
    });
}

// دوال أخرى للوظائف المستقبلية
function loadTransactions() {
    // تم تعبئة المعاملات مباشرة في HTML
}