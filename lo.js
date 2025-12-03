// بيانات نظام الخدمات اللوجستية
const logisticsData = {
    shipments: [
        { 
            id: 1, 
            code: 'SHIP-001',
            client: 'شركة التقنية', 
            type: 'بري سريع', 
            size: 'متوسط', 
            shippingDate: '2023-10-15',
            deliveryDate: '2024-01-15',
            status: 'قيد التجهيز',
            cost: 300,
            clientEmail: 'info@techcompany.com',
            clientPhone: '0550123456'
        },
        { 
            id: 2, 
            code: 'SHIP-002',
            client: 'مؤسسة النقل', 
            type: 'بري عادي', 
            size: 'كبير', 
            shippingDate: '2023-10-14',
            deliveryDate: '2024-01-14',
            status: 'قيد النقل',
            cost: 500,
            clientEmail: 'contact@transport.org',
            clientPhone: '0550123457'
        },
        { 
            id: 3, 
            code: 'SHIP-003',
            client: 'شركة التوريد', 
            type: 'بحري', 
            size: 'كبير', 
            shippingDate: '2023-10-13',
            deliveryDate: '2024-01-13',
            status: 'معلق',
            cost: 800,
            clientEmail: 'supply@company.com',
            clientPhone: '0550123458'
        },
        { 
            id: 4, 
            code: 'SHIP-004',
            client: 'شركة التجارة', 
            type: 'جوي', 
            size: 'صغير', 
            shippingDate: '2023-10-12',
            deliveryDate: '2024-01-12',
            status: 'قيد التجهيز',
            cost: 1200,
            clientEmail: 'trade@business.com',
            clientPhone: '0550123459'
        },
        { 
            id: 5, 
            code: 'SHIP-005',
            client: 'مصنع الإنتاج', 
            type: 'بري سريع', 
            size: 'متوسط', 
            shippingDate: '2023-10-11',
            deliveryDate: '2024-01-11',
            status: 'قيد النقل',
            cost: 400,
            clientEmail: 'factory@production.com',
            clientPhone: '0550123460'
        }
    ],
    
    inventory: [
        { 
            id: 1, 
            productCode: 'PROD-001',
            productName: 'مواد إلكترونية', 
            category: 'إلكترونيات', 
            quantity: 150,
            minQuantity: 50,
            cost: 75,
            status: 'متوفر'
        },
        { 
            id: 2, 
            productCode: 'PROD-002',
            productName: 'مواد بناء', 
            category: 'بناء', 
            quantity: 500,
            minQuantity: 100,
            cost: 25,
            status: 'متوفر'
        },
        { 
            id: 3, 
            productCode: 'PROD-003',
            productName: 'مواد غذائية', 
            category: 'غذائية', 
            quantity: 80,
            minQuantity: 30,
            cost: 15,
            status: 'منخفض'
        }
    ],
    
    warehouses: [
        { 
            id: 1, 
            name: 'المستودع الرئيسي', 
            type: 'رئيسي',
            capacity: 10000,
            currentStock: 6250,
            status: 'نشط',
            description: 'المستودع الرئيسي للمنتجات والمواد',
            features: ['كبير', 'متنوع', 'رئيسي']
        },
        { 
            id: 2, 
            name: 'المستودع الإقليمي', 
            type: 'توزيع',
            capacity: 5000,
            currentStock: 3250,
            status: 'نشط',
            description: 'المستودع الإقليمي للتوزيع',
            features: ['إقليمي', 'توزيع', 'فرعي']
        },
        { 
            id: 3, 
            name: 'مستودع التبريد', 
            type: 'مبرد',
            capacity: 2000,
            currentStock: 1250,
            status: 'نشط',
            description: 'مستودع مخصص للمواد المبردة',
            features: ['تبريد', 'خاص', 'مبرد']
        }
    ],
    
    orders: [
        { 
            id: 1, 
            clientId: 1,
            amount: 300,
            orderDate: '2023-12-01',
            deliveryDate: '2023-12-15',
            status: 'مسدد'
        },
        { 
            id: 2, 
            clientId: 2,
            amount: 500,
            orderDate: '2023-12-01',
            deliveryDate: '2023-12-15',
            status: 'مسدد'
        },
        { 
            id: 3, 
            clientId: 3,
            amount: 800,
            orderDate: '2023-12-01',
            deliveryDate: '2023-12-15',
            status: 'معلق'
        }
    ],
    
    notifications: [
        { id: 1, title: 'شحنات قيد التجهيز', description: 'يوجد 15 شحنة تحتاج للتجهيز خلال اليوم', time: '10:30', unread: true, priority: 'high' },
        { id: 2, title: 'طلب جديد', description: 'تم استلام طلب جديد من العميل شركة التقنية', time: '09:15', unread: true, priority: 'medium' },
        { id: 3, title: 'تحديث النظام', description: 'تم تحديث نظام إدارة اللوجستيات إلى الإصدار 1.0', time: 'أمس', unread: false, priority: 'low' },
        { id: 4, title: 'مخزون منخفض', description: 'يوجد 5 منتجات تحتاج لإعادة توريد', time: 'الاثنين', unread: true, priority: 'high' }
    ],
    
    chatMessages: {
        management: [
            { sender: 'الإدارة العليا', message: 'ما هو تقرير الشحنات لهذا الشهر؟', time: '10:00', type: 'received' }
        ],
        operationsManager: [
            { sender: 'مدير العمليات', message: 'أهلاً بك، هل هناك أي استفسارات؟', time: '09:30', type: 'received' }
        ],
        warehouseTeam: [
            { sender: 'مدير المستودع', message: 'مرحبا بالجميع، المخزون الجاهز للمعالجة', time: '10:30', type: 'received' }
        ],
        shippingTeam: [
            { sender: 'منسق شحن', message: 'الشحنات الشهرية جاهزة للإرسال', time: '09:15', type: 'received' }
        ],
        supplyTeam: [
            { sender: 'منسق توريد', message: 'طلبات التوريد الجديدة تحتاج للموافقة', time: 'أمس', type: 'received' }
        ]
    },
    
    tasks: {
        current: [
            { 
                id: 1, 
                title: 'معالجة طلبات الشحن', 
                dueDate: '2024-12-31', 
                priority: 'high', 
                description: 'معالجة طلبات الشحن المعلقة',
                completed: false 
            },
            { 
                id: 2, 
                title: 'مراجعة المخزون', 
                dueDate: '2024-12-28', 
                priority: 'medium', 
                description: 'مراجعة ومتابعة المخزون',
                completed: false 
            },
            { 
                id: 3, 
                title: 'تحديث بيانات المستودعات', 
                dueDate: '2024-12-25', 
                priority: 'low', 
                description: 'تحديث بيانات المستودعات والمخزون',
                completed: false 
            }
        ],
        future: [
            { 
                id: 4, 
                title: 'تقرير الأداء الربع سنوي', 
                dueDate: '2024-01-25', 
                priority: 'high', 
                description: 'إعداد تقرير الأداء للربع الرابع',
                completed: false 
            },
            { 
                id: 5, 
                title: 'تطوير نظام التتبع', 
                dueDate: '2024-02-01', 
                priority: 'medium', 
                description: 'تطوير وتحسين نظام تتبع الشحنات',
                completed: false 
            },
            { 
                id: 6, 
                title: 'حملة تحسين الخدمة', 
                dueDate: '2024-02-15', 
                priority: 'low', 
                description: 'تخطيط حملة تحسين الخدمة اللوجستية',
                completed: false 
            }
        ]
    },
    
    calendarTasks: {
        '2024-12-31': [
            { id: 1, title: 'معالجة طلبات الشحن', priority: 'high' }
        ],
        '2024-12-28': [
            { id: 2, title: 'مراجعة المخزون', priority: 'medium' }
        ],
        '2024-12-25': [
            { id: 3, title: 'تحديث بيانات المستودعات', priority: 'low' }
        ],
        '2024-01-25': [
            { id: 4, title: 'تقرير الأداء الربع سنوي', priority: 'high' }
        ],
        '2024-02-01': [
            { id: 5, title: 'تطوير نظام التتبع', priority: 'medium' }
        ],
        '2024-02-15': [
            { id: 6, title: 'حملة تحسين الخدمة', priority: 'low' }
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
    const userData = JSON.parse(localStorage.getItem('currentLogisticsUser')) || {
        full_name: 'أحمد محمد',
        username: 'logistics_admin',
        role: 'مدير العمليات اللوجستية',
        employee_id: 'LOG-001',
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
        'om43', 'om44', 'om45'
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
    
    if (!localStorage.getItem('currentLogisticsUser')) {
        const defaultUser = {
            full_name: 'أحمد محمد',
            username: 'logistics_admin',
            role: 'مدير العمليات اللوجستية',
            employee_id: 'LOG-001',
            avatar: 'https://via.placeholder.com/50'
        };
        localStorage.setItem('currentLogisticsUser', JSON.stringify(defaultUser));
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
    logisticsData.notifications.forEach(notification => {
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
        management: 'الإدارة العليا',
        operationsManager: 'مدير العمليات',
        warehouseTeam: 'فريق المستودع',
        shippingTeam: 'فريق الشحن',
        supplyTeam: 'فريق التوريد'
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
    
    const messages = logisticsData.chatMessages[chatId] || [];
    
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
        if (!logisticsData.chatMessages[activeChat]) {
            logisticsData.chatMessages[activeChat] = [];
        }
        
        logisticsData.chatMessages[activeChat].push({
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
            operationsManager: 'تم استلام رسالتك، شكراً لك',
            warehouseTeam: 'مدير المستودع: شكراً على المعلومة',
            shippingTeam: 'منسق شحن: سأراجع الشحنات',
            supplyTeam: 'منسق توريد: شكراً على التحديث'
        };
        
        if (!logisticsData.chatMessages[chatId]) {
            logisticsData.chatMessages[chatId] = [];
        }
        
        logisticsData.chatMessages[chatId].push({
            sender: chatId === 'management' ? 'الإدارة العليا' : 
                   chatId === 'operationsManager' ? 'مدير العمليات' :
                   chatId === 'warehouseTeam' ? 'مدير المستودع' :
                   chatId === 'shippingTeam' ? 'منسق شحن' : 'منسق توريد',
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
    
    logisticsData.tasks.current.forEach(task => {
        const taskElement = createTaskElement(task);
        currentTasksContainer.appendChild(taskElement);
    });
}

function loadUpcomingTasks() {
    const upcomingTasksContainer = document.getElementById('o77');
    upcomingTasksContainer.innerHTML = '';
    
    logisticsData.tasks.future.forEach(task => {
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
        
        const dayTasks = logisticsData.calendarTasks[dateString] || [];
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
        
        const dayTasks = logisticsData.calendarTasks[dateString] || [];
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
    const allTasks = [...logisticsData.tasks.current, ...logisticsData.tasks.future];
    const task = allTasks.find(t => t.id === taskId);
    return task ? task.description : 'لا يوجد وصف';
}

function completeTask(taskId) {
    const allTasks = [...logisticsData.tasks.current, ...logisticsData.tasks.future];
    const task = allTasks.find(t => t.id === taskId);
    if (task) {
        task.completed = true;
        alert(`تم إكمال المهمة: ${task.title}`);
        loadTasks();
    }
}

function deleteTask(taskId, dateString) {
    if (confirm('هل أنت متأكد من حذف هذه المهمة؟')) {
        logisticsData.tasks.current = logisticsData.tasks.current.filter(t => t.id !== taskId);
        logisticsData.tasks.future = logisticsData.tasks.future.filter(t => t.id !== taskId);
        
        if (logisticsData.calendarTasks[dateString]) {
            logisticsData.calendarTasks[dateString] = logisticsData.calendarTasks[dateString].filter(t => t.id !== taskId);
            if (logisticsData.calendarTasks[dateString].length === 0) {
                delete logisticsData.calendarTasks[dateString];
            }
        }
        
        loadTasks();
        updateMiniCalendar();
        if (isCalendarOpen) {
            updateFullCalendar();
        }
        showDayTasks(dateString, logisticsData.calendarTasks[dateString] || []);
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
                <h3>إضافة مهمة جديدة</h3>
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
        id: Math.max(...[...logisticsData.tasks.current, ...logisticsData.tasks.future].map(t => t.id)) + 1,
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
        logisticsData.tasks.current.push(newTask);
    } else {
        logisticsData.tasks.future.push(newTask);
    }
    
    if (!logisticsData.calendarTasks[date]) {
        logisticsData.calendarTasks[date] = [];
    }
    logisticsData.calendarTasks[date].push({
        id: newTask.id,
        title: newTask.title,
        priority: newTask.priority
    });
    
    loadTasks();
    updateMiniCalendar();
    if (isCalendarOpen) {
        updateFullCalendar();
        showDayTasks(date, logisticsData.calendarTasks[date]);
    }
    
    document.querySelector('.om61').remove();
    alert('تم إضافة المهمة بنجاح');
}

// دوال لوحة التحكم الأساسية
function initializeDashboard() {
    let userData = JSON.parse(localStorage.getItem('currentLogisticsUser'));
    if (!userData) {
        const defaultUser = {
            full_name: 'أحمد محمد',
            username: 'logistics_admin',
            role: 'مدير العمليات اللوجستية',
            employee_id: 'LOG-001',
            avatar: 'https://via.placeholder.com/50'
        };
        localStorage.setItem('currentLogisticsUser', JSON.stringify(defaultUser));
        userData = defaultUser;
    }

    initializeUser();
    updateDashboardStats();
    loadShipments();
    initializeCharts();
}

function updateDashboardStats() {
    updateStatsCards();
    loadRecentShipments();
}

function updateStatsCards() {
    const totalShipments = logisticsData.shipments.length;
    const activeShipments = logisticsData.shipments.filter(s => s.status === 'قيد النقل' || s.status === 'قيد التجهيز').length;
    const monthlyRevenue = logisticsData.shipments.reduce((sum, ship) => sum + ship.cost, 0);
    const onTimeDeliveryRate = 94; // نسبة التسليم في الوقت
    
    document.getElementById('om4').textContent = totalShipments;
    document.getElementById('om7').textContent = activeShipments;
    document.getElementById('om9').textContent = formatCurrency(monthlyRevenue);
    document.getElementById('om11').textContent = `${onTimeDeliveryRate}%`;
}

function loadRecentShipments() {
    // تم تعبئة الشحنات مباشرة في HTML
}

function initializeCharts() {
    const shippingChartCtx = document.getElementById('om14').getContext('2d');
    const shippingChart = new Chart(shippingChartCtx, {
        type: 'pie',
        data: {
            labels: ['بري سريع', 'بري عادي', 'بحري', 'جوي'],
            datasets: [{
                data: [625, 1250, 250, 125],
                backgroundColor: ['#3498db', '#e74c3c', '#f39c12', '#9b59b6']
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

    const revenueChartCtx = document.getElementById('om15').getContext('2d');
    const revenueChart = new Chart(revenueChartCtx, {
        type: 'line',
        data: {
            labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
            datasets: [{
                label: 'الإيرادات (ألف ر.س)',
                data: [380, 395, 410, 400, 420, 415, 430, 425, 440, 435, 450, 425],
                borderColor: '#27ae60',
                backgroundColor: 'rgba(39, 174, 96, 0.1)',
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
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
    } else if (tabId === 'inventory') {
        loadInventory();
    } else if (tabId === 'shipping') {
        loadShipments();
    }
}

function showOrdersTab(tabId) {
    document.querySelectorAll('#orders .om47').forEach(section => {
        section.style.display = 'none';
    });
    
    document.querySelectorAll('#orders .om46').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.getElementById(tabId).style.display = 'block';
    event.target.classList.add('active');
}

function showReportTab(reportId) {
    document.querySelectorAll('#reports .om47').forEach(section => {
        section.style.display = 'none';
    });
    
    document.querySelectorAll('#reports .om46').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.getElementById(reportId).style.display = 'block';
    event.target.classList.add('active');
}

function logout() {
    if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
        localStorage.removeItem('currentLogisticsUser');
        window.location.href = 'login.html';
    }
}

// دوال إدارة المخزون
function showAddInventoryModal() {
    // سيتم تنفيذها لاحقاً
    alert('نافذة إضافة منتج جديد - قيد التطوير');
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function loadInventory() {
    const inventoryTable = document.getElementById('om22');
    inventoryTable.innerHTML = '';
    
    logisticsData.inventory.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.productCode}</td>
            <td>${item.productName}</td>
            <td>${item.category}</td>
            <td>${item.quantity}</td>
            <td>${item.minQuantity}</td>
            <td>${formatCurrency(item.cost)}</td>
            <td><span class="status-${item.status === 'متوفر' ? 'completed' : item.status === 'منخفض' ? 'inprogress' : 'pending'}">${item.status}</span></td>
            <td>
                <button class="o21 o37" onclick="editInventory(${item.id})">تعديل</button>
                <button class="o21 o37 o22" onclick="deleteInventory(${item.id})">حذف</button>
            </td>
        `;
        inventoryTable.appendChild(row);
    });
}

function editInventory(itemId) {
    const item = logisticsData.inventory.find(i => i.id === itemId);
    if (item) {
        alert(`تعديل المنتج: ${item.productName}`);
    }
}

function deleteInventory(itemId) {
    if (confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
        const itemIndex = logisticsData.inventory.findIndex(i => i.id === itemId);
        if (itemIndex !== -1) {
            logisticsData.inventory.splice(itemIndex, 1);
            loadInventory();
            alert('تم حذف المنتج بنجاح');
        }
    }
}

function exportInventory() {
    const csvContent = "data:text/csv;charset=utf-8," 
        + "رقم المنتج,اسم المنتج,الفئة,الكمية المتاحة,الحد الأدنى,التكلفة,الحالة\n"
        + logisticsData.inventory.map(item => 
            `${item.productCode},${item.productName},${item.category},${item.quantity},${item.minQuantity},${item.cost},${item.status}`
        ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "المخزون.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// دوال إدارة الشحن
function showAddShippingModal() {
    document.getElementById('om62').style.display = 'flex';
}

function saveShipping() {
    const client = document.getElementById('om68').value;
    const type = document.getElementById('om70').value;
    const size = document.getElementById('om71').value;
    const status = document.getElementById('om72').value;
    const shippingDate = document.getElementById('om73').value;
    const deliveryDate = document.getElementById('om74').value;
    
    if (!client || !type || !size || !status || !shippingDate || !deliveryDate) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }
    
    const typeCosts = {
        'express': 300,
        'standard': 150,
        'sea': 500,
        'air': 800
    };
    
    const typeNames = {
        'express': 'بري سريع',
        'standard': 'بري عادي',
        'sea': 'بحري',
        'air': 'جوي'
    };
    
    const newShipping = {
        id: logisticsData.shipments.length + 1,
        code: `SHIP-${String(logisticsData.shipments.length + 1).padStart(3, '0')}`,
        client: client,
        type: typeNames[type],
        size: size,
        shippingDate: shippingDate,
        deliveryDate: deliveryDate,
        status: status,
        cost: typeCosts[type],
        clientEmail: `${client.replace(' ', '.').toLowerCase()}@company.com`,
        clientPhone: '0550' + Math.floor(100000 + Math.random() * 900000)
    };
    
    logisticsData.shipments.push(newShipping);
    closeModal('om62');
    loadShipments();
    alert('تم إضافة الشحنة بنجاح');
}

function loadShipments() {
    const shipmentsTable = document.getElementById('om22');
    if (!shipmentsTable) return;
    
    shipmentsTable.innerHTML = '';
    
    logisticsData.shipments.forEach(shipment => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${shipment.code}</td>
            <td>${shipment.client}</td>
            <td><span class="shipping-type-badge shipping-${getShippingTypeCode(shipment.type)}">${shipment.type}</span></td>
            <td>${shipment.size}</td>
            <td>${formatDate(shipment.shippingDate)}</td>
            <td>${formatDate(shipment.deliveryDate)}</td>
            <td><span class="status-${shipment.status === 'قيد النقل' ? 'completed' : shipment.status === 'معلق' ? 'inprogress' : 'pending'}">${shipment.status}</span></td>
            <td>
                <button class="o21 o37" onclick="editShipping(${shipment.id})">تعديل</button>
                <button class="o21 o37 o22" onclick="deleteShipping(${shipment.id})">حذف</button>
            </td>
        `;
        shipmentsTable.appendChild(row);
    });
}

function getShippingTypeCode(typeName) {
    const typeMap = {
        'بري سريع': 'express',
        'بري عادي': 'standard',
        'بحري': 'sea',
        'جوي': 'air'
    };
    return typeMap[typeName] || 'other';
}

function editShipping(shipmentId) {
    const shipment = logisticsData.shipments.find(s => s.id === shipmentId);
    if (shipment) {
        alert(`تعديل الشحنة: ${shipment.client}`);
    }
}

function deleteShipping(shipmentId) {
    if (confirm('هل أنت متأكد من حذف هذه الشحنة؟')) {
        const shipmentIndex = logisticsData.shipments.findIndex(s => s.id === shipmentId);
        if (shipmentIndex !== -1) {
            logisticsData.shipments.splice(shipmentIndex, 1);
            loadShipments();
            alert('تم حذف الشحنة بنجاح');
        }
    }
}

// دوال الشحن
function openShippingDetails(shippingId) {
    const shipping = getShippingById(shippingId);
    if (shipping) {
        alert(`تفاصيل الشحنات: ${shipping.name}\n\n${shipping.description}\n\n${shipping.details}`);
    }
}

function getShippingById(shippingId) {
    const shippingMap = {
        'pending': {name: 'الشحنات المعلقة', description: 'الشحنات التي تحتاج للتجهيز خلال الأسبوع القادم', details: 'القيمة الإجمالية: 75,000 ر.س'},
        'inTransit': {name: 'الشحنات قيد النقل', description: 'الشحنات التي قيد النقل حالياً', details: 'القيمة الإجمالية: 36,000 ر.س'},
        'delivered': {name: 'الشحنات المسلمة', description: 'الشحنات التي تم تسليمها خلال الشهر الحالي', details: 'القيمة الإجمالية: 395,000 ر.س'}
    };
    return shippingMap[shippingId];
}

function viewShippingReport(shippingId) {
    event.stopPropagation();
    const shipping = getShippingById(shippingId);
    alert(`عرض قائمة: ${shipping.name}\n\nالقائمة جاهزة للتحميل.`);
}

function processShipping(shippingId) {
    event.stopPropagation();
    const shipping = getShippingById(shippingId);
    alert(`معالجة الشحنات: ${shipping.name}\n\nجاري فتح واجهة المعالجة...`);
}

function trackShipping(shippingId) {
    event.stopPropagation();
    const shipping = getShippingById(shippingId);
    alert(`تتبع الشحنات: ${shipping.name}\n\nجاري فتح نظام التتبع...`);
}

function exportShipping(shippingId) {
    event.stopPropagation();
    const shipping = getShippingById(shippingId);
    alert(`تصدير التقارير: ${shipping.name}\n\nجاري تصدير البيانات...`);
}

// دوال التوريد
function openSupplyDetails(supplyId) {
    const supply = getSupplyById(supplyId);
    if (supply) {
        alert(`تفاصيل التوريد: ${supply.name}\n\n${supply.description}\n\n${supply.details}`);
    }
}

function getSupplyById(supplyId) {
    const supplyMap = {
        'local': {name: 'التوريد المحلي', description: 'طلبات التوريد من الموردين المحليين', details: 'القيمة الإجمالية: 187,500 ر.س - نسبة الإنجاز: 96%'},
        'international': {name: 'التوريد الدولي', description: 'طلبات التوريد من الموردين الدوليين', details: 'القيمة الإجمالية: 187,500 ر.س - نسبة الإنجاز: 92%'},
        'urgent': {name: 'التوريد العاجل', description: 'طلبات التوريد العاجلة والمستعجلة', details: 'القيمة الإجمالية: 125,000 ر.س - نسبة الإنجاز: 98%'}
    };
    return supplyMap[supplyId];
}

function openSupplyPage(supplyId) {
    window.open(`supply_${supplyId}.html`, '_blank');
}

function viewSupplyReport(supplyId) {
    event.stopPropagation();
    const supply = getSupplyById(supplyId);
    alert(`تقرير التوريد: ${supply.name}\n\nالتقرير جاهز للتحميل.`);
}

// دوال المستودعات
function openWarehouseDetails(warehouseId) {
    const warehouse = getWarehouseById(warehouseId);
    if (warehouse) {
        alert(`تفاصيل المستودع: ${warehouse.name}\n\n${warehouse.description}\n\nالسعة: ${formatNumber(warehouse.capacity)} م²\nالمخزون: ${formatNumber(warehouse.currentStock)}`);
    }
}

function getWarehouseById(warehouseId) {
    const warehouseMap = {
        'main': logisticsData.warehouses[0],
        'regional': logisticsData.warehouses[1],
        'cold': logisticsData.warehouses[2]
    };
    return warehouseMap[warehouseId];
}

function viewWarehouseReport(warehouseId) {
    event.stopPropagation();
    const warehouse = getWarehouseById(warehouseId);
    alert(`تقرير المستودع: ${warehouse.name}\n\nالتقرير جاهز للتحميل.`);
}

function editWarehouse(warehouseId) {
    event.stopPropagation();
    const warehouse = getWarehouseById(warehouseId);
    alert(`تعديل المستودع: ${warehouse.name}\n\nجاري فتح واجهة التعديل...`);
}

// دوال الطلبات
function viewOrders(status) {
    const statusText = status === 'new' ? 'الجديدة' : 'المعالجة';
    alert(`عرض الطلبات ${statusText}\n\nجاري تحميل الطلبات...`);
}

function processOrders(status) {
    alert(`معالجة الطلبات ${status === 'new' ? 'الجديدة' : 'المعالجة'}\n\nجاري معالجة الطلبات...`);
}

function exportOrders(status) {
    alert(`تصدير تقارير الطلبات ${status === 'new' ? 'الجديدة' : 'المعالجة'}\n\nجاري تصدير البيانات...`);
}

// دوال التقارير
function viewShippingReport(reportId) {
    const reportMap = {
        'all': 'تقرير الشحنات',
        'delivery': 'تقرير التوصيل'
    };
    alert(`عرض التقرير: ${reportMap[reportId]}\n\nالتقرير جاهز للتحميل.`);
}

function generateShippingReport(reportId) {
    const reportMap = {
        'all': 'تقرير الشحنات',
        'delivery': 'تقرير التوصيل'
    };
    alert(`إنشاء تقرير: ${reportMap[reportId]}\n\nجاري إنشاء التقرير...`);
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

function formatNumber(number) {
    return new Intl.NumberFormat('ar-SA').format(number);
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
function loadShipments() {
    // تم تعبئة الشحنات مباشرة في HTML
}