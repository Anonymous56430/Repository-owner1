// بيانات نظام خدمات المشتركين
const subscriptionData = {
    subscribers: [
        { 
            id: 1, 
            code: 'SUB-001',
            name: 'محمد أحمد', 
            package: 'باقة البريميوم', 
            subscriptionType: 'شهري', 
            startDate: '2023-10-15',
            endDate: '2024-01-15',
            status: 'نشط',
            price: 300,
            email: 'm.ahmed@company.com',
            phone: '0550123456'
        },
        { 
            id: 2, 
            code: 'SUB-002',
            name: 'فاطمة خالد', 
            package: 'الباقة الأساسية', 
            subscriptionType: 'شهري', 
            startDate: '2023-10-14',
            endDate: '2024-01-14',
            status: 'نشط',
            price: 150,
            email: 'f.khaled@company.com',
            phone: '0550123457'
        },
        { 
            id: 3, 
            code: 'SUB-003',
            name: 'خالد سعيد', 
            package: 'باقة الشركات', 
            subscriptionType: 'سنوي', 
            startDate: '2023-10-13',
            endDate: '2024-01-13',
            status: 'متجمد',
            price: 500,
            email: 'k.saeed@company.com',
            phone: '0550123458'
        },
        { 
            id: 4, 
            code: 'SUB-004',
            name: 'نورة محمد', 
            package: 'باقة البريميوم', 
            subscriptionType: 'ربع سنوي', 
            startDate: '2023-10-12',
            endDate: '2024-01-12',
            status: 'نشط',
            price: 300,
            email: 'n.mohammed@company.com',
            phone: '0550123459'
        },
        { 
            id: 5, 
            code: 'SUB-005',
            name: 'سعيد علي', 
            package: 'الباقة الأساسية', 
            subscriptionType: 'شهري', 
            startDate: '2023-10-11',
            endDate: '2024-01-11',
            status: 'نشط',
            price: 150,
            email: 's.ali@company.com',
            phone: '0550123460'
        }
    ],
    
    renewals: [
        { 
            id: 1, 
            subscriberId: 1,
            package: 'باقة البريميوم',
            renewalDate: '2024-01-15',
            amount: 300,
            status: 'معلق'
        },
        { 
            id: 2, 
            subscriberId: 2,
            package: 'الباقة الأساسية',
            renewalDate: '2024-01-14',
            amount: 150,
            status: 'معلق'
        },
        { 
            id: 3, 
            subscriberId: 3,
            package: 'باقة الشركات',
            renewalDate: '2024-01-13',
            amount: 500,
            status: 'منتهي'
        }
    ],
    
    packages: [
        { 
            id: 1, 
            name: 'باقة البريميوم', 
            type: 'مميزة',
            price: 300,
            subscribers: 625,
            status: 'نشط',
            description: 'باقة الخدمات المميزة للمشتركين',
            features: ['غير محدود', 'بجودة عالية', 'ألعاب']
        },
        { 
            id: 2, 
            name: 'الباقة الأساسية', 
            type: 'عادية',
            price: 150,
            subscribers: 1250,
            status: 'نشط',
            description: 'الباقة الأساسية للمشتركين العاديين',
            features: ['أساسي', 'بجودة عادية', 'أفلام']
        },
        { 
            id: 3, 
            name: 'باقة الشركات', 
            type: 'مؤسسات',
            price: 500,
            subscribers: 250,
            status: 'نشط',
            description: 'باقة مخصصة للشركات والمؤسسات',
            features: ['شركات', 'متعدد', 'آمن']
        }
    ],
    
    invoices: [
        { 
            id: 1, 
            subscriberId: 1,
            amount: 300,
            issueDate: '2023-12-01',
            dueDate: '2023-12-15',
            status: 'مسدد'
        },
        { 
            id: 2, 
            subscriberId: 2,
            amount: 150,
            issueDate: '2023-12-01',
            dueDate: '2023-12-15',
            status: 'مسدد'
        },
        { 
            id: 3, 
            subscriberId: 3,
            amount: 500,
            issueDate: '2023-12-01',
            dueDate: '2023-12-15',
            status: 'معلق'
        }
    ],
    
    notifications: [
        { id: 1, title: 'تجديد اشتراكات', description: 'يوجد 25 اشتراك يحتاج للتجديد خلال الأسبوع القادم', time: '10:30', unread: true, priority: 'high' },
        { id: 2, title: 'شكوى جديدة', description: 'تم استلام شكوى جديدة من المشترك محمد أحمد', time: '09:15', unread: true, priority: 'medium' },
        { id: 3, title: 'تحديث النظام', description: 'تم تحديث نظام إدارة المشتركين إلى الإصدار 1.0', time: 'أمس', unread: false, priority: 'low' },
        { id: 4, title: 'فاتورة متأخرة', description: 'يوجد 12 فاتورة متأخرة تحتاج للمتابعة', time: 'الاثنين', unread: true, priority: 'high' }
    ],
    
    chatMessages: {
        management: [
            { sender: 'الإدارة العليا', message: 'ما هو تقرير الإيرادات لهذا الشهر؟', time: '10:00', type: 'received' }
        ],
        serviceManager: [
            { sender: 'مدير الخدمات', message: 'أهلاً بك، هل هناك أي استفسارات؟', time: '09:30', type: 'received' }
        ],
        supportTeam: [
            { sender: 'فني دعم', message: 'مرحبا بالجميع، الشكاوى الجاهزة للمعالجة', time: '10:30', type: 'received' }
        ],
        billingTeam: [
            { sender: 'محاسب فواتير', message: 'الفواتير الشهرية جاهزة للإرسال', time: '09:15', type: 'received' }
        ],
        salesTeam: [
            { sender: 'منسق مبيعات', message: 'الحملة التسويقية الجديدة تحتاج للموافقة', time: 'أمس', type: 'received' }
        ]
    },
    
    tasks: {
        current: [
            { 
                id: 1, 
                title: 'معالجة طلبات التجديد', 
                dueDate: '2024-12-31', 
                priority: 'high', 
                description: 'معالجة طلبات تجديد الاشتراكات المعلقة',
                completed: false 
            },
            { 
                id: 2, 
                title: 'مراجعة الفواتير المتأخرة', 
                dueDate: '2024-12-28', 
                priority: 'medium', 
                description: 'مراجعة ومتابعة الفواتير المتأخرة',
                completed: false 
            },
            { 
                id: 3, 
                title: 'تحديث باقات الخدمات', 
                dueDate: '2024-12-25', 
                priority: 'low', 
                description: 'تحديث عروض وباقات الخدمات',
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
                title: 'تطوير نظام الدفع', 
                dueDate: '2024-02-01', 
                priority: 'medium', 
                description: 'تطوير وتحسين نظام الدفع الإلكتروني',
                completed: false 
            },
            { 
                id: 6, 
                title: 'حملة تجديد الاشتراكات', 
                dueDate: '2024-02-15', 
                priority: 'low', 
                description: 'تخطيط حملة تجديد الاشتراكات السنوية',
                completed: false 
            }
        ]
    },
    
    calendarTasks: {
        '2024-12-31': [
            { id: 1, title: 'معالجة طلبات التجديد', priority: 'high' }
        ],
        '2024-12-28': [
            { id: 2, title: 'مراجعة الفواتير المتأخرة', priority: 'medium' }
        ],
        '2024-12-25': [
            { id: 3, title: 'تحديث باقات الخدمات', priority: 'low' }
        ],
        '2024-01-25': [
            { id: 4, title: 'تقرير الأداء الربع سنوي', priority: 'high' }
        ],
        '2024-02-01': [
            { id: 5, title: 'تطوير نظام الدفع', priority: 'medium' }
        ],
        '2024-02-15': [
            { id: 6, title: 'حملة تجديد الاشتراكات', priority: 'low' }
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
    const userData = JSON.parse(localStorage.getItem('currentSubscriptionUser')) || {
        full_name: 'أحمد محمد',
        username: 'subscription_admin',
        role: 'مدير خدمات المشتركين',
        employee_id: 'SUB-001',
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
    
    if (!localStorage.getItem('currentSubscriptionUser')) {
        const defaultUser = {
            full_name: 'أحمد محمد',
            username: 'subscription_admin',
            role: 'مدير خدمات المشتركين',
            employee_id: 'SUB-001',
            avatar: 'https://via.placeholder.com/50'
        };
        localStorage.setItem('currentSubscriptionUser', JSON.stringify(defaultUser));
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
    subscriptionData.notifications.forEach(notification => {
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
        serviceManager: 'مدير الخدمات',
        supportTeam: 'فريق الدعم الفني',
        billingTeam: 'فريق الفواتير',
        salesTeam: 'فريق المبيعات'
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
    
    const messages = subscriptionData.chatMessages[chatId] || [];
    
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
        if (!subscriptionData.chatMessages[activeChat]) {
            subscriptionData.chatMessages[activeChat] = [];
        }
        
        subscriptionData.chatMessages[activeChat].push({
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
            serviceManager: 'تم استلام رسالتك، شكراً لك',
            supportTeam: 'فني دعم: شكراً على المعلومة',
            billingTeam: 'محاسب فواتير: سأراجع الفواتير',
            salesTeam: 'منسق مبيعات: شكراً على التحديث'
        };
        
        if (!subscriptionData.chatMessages[chatId]) {
            subscriptionData.chatMessages[chatId] = [];
        }
        
        subscriptionData.chatMessages[chatId].push({
            sender: chatId === 'management' ? 'الإدارة العليا' : 
                   chatId === 'serviceManager' ? 'مدير الخدمات' :
                   chatId === 'supportTeam' ? 'فني دعم' :
                   chatId === 'billingTeam' ? 'محاسب فواتير' : 'منسق مبيعات',
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
    
    subscriptionData.tasks.current.forEach(task => {
        const taskElement = createTaskElement(task);
        currentTasksContainer.appendChild(taskElement);
    });
}

function loadUpcomingTasks() {
    const upcomingTasksContainer = document.getElementById('o77');
    upcomingTasksContainer.innerHTML = '';
    
    subscriptionData.tasks.future.forEach(task => {
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
        
        const dayTasks = subscriptionData.calendarTasks[dateString] || [];
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
        
        const dayTasks = subscriptionData.calendarTasks[dateString] || [];
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
    const allTasks = [...subscriptionData.tasks.current, ...subscriptionData.tasks.future];
    const task = allTasks.find(t => t.id === taskId);
    return task ? task.description : 'لا يوجد وصف';
}

function completeTask(taskId) {
    const allTasks = [...subscriptionData.tasks.current, ...subscriptionData.tasks.future];
    const task = allTasks.find(t => t.id === taskId);
    if (task) {
        task.completed = true;
        alert(`تم إكمال المهمة: ${task.title}`);
        loadTasks();
    }
}

function deleteTask(taskId, dateString) {
    if (confirm('هل أنت متأكد من حذف هذه المهمة؟')) {
        subscriptionData.tasks.current = subscriptionData.tasks.current.filter(t => t.id !== taskId);
        subscriptionData.tasks.future = subscriptionData.tasks.future.filter(t => t.id !== taskId);
        
        if (subscriptionData.calendarTasks[dateString]) {
            subscriptionData.calendarTasks[dateString] = subscriptionData.calendarTasks[dateString].filter(t => t.id !== taskId);
            if (subscriptionData.calendarTasks[dateString].length === 0) {
                delete subscriptionData.calendarTasks[dateString];
            }
        }
        
        loadTasks();
        updateMiniCalendar();
        if (isCalendarOpen) {
            updateFullCalendar();
        }
        showDayTasks(dateString, subscriptionData.calendarTasks[dateString] || []);
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
        id: Math.max(...[...subscriptionData.tasks.current, ...subscriptionData.tasks.future].map(t => t.id)) + 1,
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
        subscriptionData.tasks.current.push(newTask);
    } else {
        subscriptionData.tasks.future.push(newTask);
    }
    
    if (!subscriptionData.calendarTasks[date]) {
        subscriptionData.calendarTasks[date] = [];
    }
    subscriptionData.calendarTasks[date].push({
        id: newTask.id,
        title: newTask.title,
        priority: newTask.priority
    });
    
    loadTasks();
    updateMiniCalendar();
    if (isCalendarOpen) {
        updateFullCalendar();
        showDayTasks(date, subscriptionData.calendarTasks[date]);
    }
    
    document.querySelector('.om61').remove();
    alert('تم إضافة المهمة بنجاح');
}

// دوال لوحة التحكم الأساسية
function initializeDashboard() {
    let userData = JSON.parse(localStorage.getItem('currentSubscriptionUser'));
    if (!userData) {
        const defaultUser = {
            full_name: 'أحمد محمد',
            username: 'subscription_admin',
            role: 'مدير خدمات المشتركين',
            employee_id: 'SUB-001',
            avatar: 'https://via.placeholder.com/50'
        };
        localStorage.setItem('currentSubscriptionUser', JSON.stringify(defaultUser));
        userData = defaultUser;
    }

    initializeUser();
    updateDashboardStats();
    loadSubscriptions();
    initializeCharts();
}

function updateDashboardStats() {
    updateStatsCards();
    loadRecentSubscribers();
}

function updateStatsCards() {
    const totalSubscribers = subscriptionData.subscribers.length;
    const activeSubscriptions = subscriptionData.subscribers.filter(s => s.status === 'نشط').length;
    const monthlyRevenue = subscriptionData.subscribers.reduce((sum, sub) => sum + sub.price, 0);
    const renewalRate = 94; // نسبة التجديد
    
    document.getElementById('om4').textContent = totalSubscribers;
    document.getElementById('om7').textContent = activeSubscriptions;
    document.getElementById('om9').textContent = formatCurrency(monthlyRevenue);
    document.getElementById('om11').textContent = `${renewalRate}%`;
}

function loadRecentSubscribers() {
    // تم تعبئة المشتركين مباشرة في HTML
}

function initializeCharts() {
    const packagesChartCtx = document.getElementById('om14').getContext('2d');
    const packagesChart = new Chart(packagesChartCtx, {
        type: 'pie',
        data: {
            labels: ['باقة البريميوم', 'الباقة الأساسية', 'باقة الشركات'],
            datasets: [{
                data: [625, 1250, 250],
                backgroundColor: ['#3498db', '#e74c3c', '#f39c12']
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
    } else if (tabId === 'subscriptions') {
        loadSubscriptions();
    }
}

function showBillingTab(tabId) {
    document.querySelectorAll('#billing .om47').forEach(section => {
        section.style.display = 'none';
    });
    
    document.querySelectorAll('#billing .om46').forEach(tab => {
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
        localStorage.removeItem('currentSubscriptionUser');
        window.location.href = 'login.html';
    }
}

// دوال إدارة الاشتراكات
function showAddSubscriptionModal() {
    document.getElementById('om62').style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function saveSubscription() {
    const name = document.getElementById('om68').value;
    const package = document.getElementById('om70').value;
    const subscriptionType = document.getElementById('om71').value;
    const status = document.getElementById('om72').value;
    const startDate = document.getElementById('om73').value;
    const endDate = document.getElementById('om74').value;
    
    if (!name || !package || !subscriptionType || !status || !startDate || !endDate) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }
    
    const packagePrices = {
        'premium': 300,
        'basic': 150,
        'corporate': 500
    };
    
    const newSubscription = {
        id: subscriptionData.subscribers.length + 1,
        code: `SUB-${String(subscriptionData.subscribers.length + 1).padStart(3, '0')}`,
        name: name,
        package: getPackageName(package),
        subscriptionType: subscriptionType,
        startDate: startDate,
        endDate: endDate,
        status: status,
        price: packagePrices[package],
        email: `${name.replace(' ', '.').toLowerCase()}@company.com`,
        phone: '0550' + Math.floor(100000 + Math.random() * 900000)
    };
    
    subscriptionData.subscribers.push(newSubscription);
    closeModal('om62');
    loadSubscriptions();
    alert('تم إضافة الاشتراك بنجاح');
}

function getPackageName(packageCode) {
    const packageMap = {
        'premium': 'باقة البريميوم',
        'basic': 'الباقة الأساسية',
        'corporate': 'باقة الشركات'
    };
    return packageMap[packageCode] || packageCode;
}

function loadSubscriptions() {
    const subscriptionsTable = document.getElementById('om22');
    subscriptionsTable.innerHTML = '';
    
    subscriptionData.subscribers.forEach(subscriber => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${subscriber.code}</td>
            <td>${subscriber.name}</td>
            <td><span class="package-badge package-${getPackageCode(subscriber.package)}">${subscriber.package}</span></td>
            <td><span class="subscription-type">${subscriber.subscriptionType}</span></td>
            <td>${formatDate(subscriber.startDate)}</td>
            <td>${formatDate(subscriber.endDate)}</td>
            <td><span class="status-${subscriber.status === 'نشط' ? 'completed' : subscriber.status === 'متجمد' ? 'inprogress' : 'pending'}">${subscriber.status}</span></td>
            <td>
                <button class="o21 o37" onclick="editSubscription(${subscriber.id})">تعديل</button>
                <button class="o21 o37 o22" onclick="deleteSubscription(${subscriber.id})">حذف</button>
            </td>
        `;
        subscriptionsTable.appendChild(row);
    });
}

function getPackageCode(packageName) {
    const packageMap = {
        'باقة البريميوم': 'premium',
        'الباقة الأساسية': 'basic',
        'باقة الشركات': 'corporate'
    };
    return packageMap[packageName] || 'other';
}

function editSubscription(subscriptionId) {
    const subscription = subscriptionData.subscribers.find(s => s.id === subscriptionId);
    if (subscription) {
        alert(`تعديل الاشتراك: ${subscription.name}`);
    }
}

function deleteSubscription(subscriptionId) {
    if (confirm('هل أنت متأكد من حذف هذا الاشتراك؟')) {
        const subscriptionIndex = subscriptionData.subscribers.findIndex(s => s.id === subscriptionId);
        if (subscriptionIndex !== -1) {
            subscriptionData.subscribers.splice(subscriptionIndex, 1);
            loadSubscriptions();
            alert('تم حذف الاشتراك بنجاح');
        }
    }
}

function exportSubscriptions() {
    const csvContent = "data:text/csv;charset=utf-8," 
        + "رقم الاشتراك,اسم المشترك,الباقة,نوع الاشتراك,تاريخ البدء,تاريخ الانتهاء,الحالة,السعر\n"
        + subscriptionData.subscribers.map(subscriber => 
            `${subscriber.code},${subscriber.name},${subscriber.package},${subscriber.subscriptionType},${subscriber.startDate},${subscriber.endDate},${subscriber.status},${subscriber.price}`
        ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "الاشتراكات.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// دوال التجديد
function openRenewalDetails(renewalId) {
    const renewal = getRenewalById(renewalId);
    if (renewal) {
        alert(`تفاصيل التجديد: ${renewal.name}\n\n${renewal.description}\n\n${renewal.details}`);
    }
}

function getRenewalById(renewalId) {
    const renewalMap = {
        'pending': {name: 'التجديدات المعلقة', description: 'الاشتراكات التي تحتاج للتجديد خلال الأسبوع القادم', details: 'القيمة الإجمالية: 75,000 ر.س'},
        'expired': {name: 'الاشتراكات المنتهية', description: 'الاشتراكات التي انتهت وتحتاج للتجديد الفوري', details: 'القيمة الإجمالية: 36,000 ر.س'},
        'renewed': {name: 'الاشتراكات المجددة', description: 'الاشتراكات التي تم تجديدها خلال الشهر الحالي', details: 'القيمة الإجمالية: 395,000 ر.س'}
    };
    return renewalMap[renewalId];
}

function viewRenewalReport(renewalId) {
    event.stopPropagation();
    const renewal = getRenewalById(renewalId);
    alert(`عرض قائمة: ${renewal.name}\n\nالقائمة جاهزة للتحميل.`);
}

function processRenewals(renewalId) {
    event.stopPropagation();
    const renewal = getRenewalById(renewalId);
    alert(`معالجة التجديدات: ${renewal.name}\n\nجاري فتح واجهة المعالجة...`);
}

function exportRenewals(renewalId) {
    event.stopPropagation();
    const renewal = getRenewalById(renewalId);
    alert(`تصدير التقارير: ${renewal.name}\n\nجاري تصدير البيانات...`);
}

// دوال المشتركين
function openSubscriberDetails(subscriberId) {
    const subscriber = getSubscriberById(subscriberId);
    if (subscriber) {
        alert(`تفاصيل المشتركين: ${subscriber.name}\n\n${subscriber.description}\n\n${subscriber.details}`);
    }
}

function getSubscriberById(subscriberId) {
    const subscriberMap = {
        'premium': {name: 'مشتركي البريميوم', description: 'المشتركين في باقة البريميوم المميزة', details: 'الإيراد الشهري: 187,500 ر.س - نسبة التجديد: 96%'},
        'basic': {name: 'مشتركي الأساسية', description: 'المشتركين في الباقة الأساسية', details: 'الإيراد الشهري: 187,500 ر.س - نسبة التجديد: 92%'},
        'corporate': {name: 'مشتركي الشركات', description: 'المشتركين من قطاع الشركات والأعمال', details: 'الإيراد الشهري: 125,000 ر.س - نسبة التجديد: 98%'}
    };
    return subscriberMap[subscriberId];
}

function openSubscriberPage(subscriberId) {
    window.open(`subscribers_${subscriberId}.html`, '_blank');
}

function viewSubscriberReport(subscriberId) {
    event.stopPropagation();
    const subscriber = getSubscriberById(subscriberId);
    alert(`تقرير المشتركين: ${subscriber.name}\n\nالتقرير جاهز للتحميل.`);
}

// دوال الخدمات
function openServiceDetails(serviceId) {
    const service = getServiceById(serviceId);
    if (service) {
        alert(`تفاصيل الخدمة: ${service.name}\n\n${service.description}\n\nالسعر: ${formatCurrency(service.price)}/شهر\nالمشتركين: ${service.subscribers}`);
    }
}

function getServiceById(serviceId) {
    const serviceMap = {
        'premium': subscriptionData.packages[0],
        'basic': subscriptionData.packages[1],
        'corporate': subscriptionData.packages[2]
    };
    return serviceMap[serviceId];
}

function viewServiceReport(serviceId) {
    event.stopPropagation();
    const service = getServiceById(serviceId);
    alert(`تقرير الخدمة: ${service.name}\n\nالتقرير جاهز للتحميل.`);
}

function editService(serviceId) {
    event.stopPropagation();
    const service = getServiceById(serviceId);
    alert(`تعديل الباقة: ${service.name}\n\nجاري فتح واجهة التعديل...`);
}

// دوال الفواتير
function viewInvoices(status) {
    const statusText = status === 'pending' ? 'المعلقة' : 'المسددة';
    alert(`عرض الفواتير ${statusText}\n\nجاري تحميل الفواتير...`);
}

function sendReminders(status) {
    alert(`إرسال تذكيرات للفواتير ${status === 'pending' ? 'المعلقة' : 'المسددة'}\n\nجاري إرسال التذكيرات...`);
}

function exportInvoices(status) {
    alert(`تصدير تقارير الفواتير ${status === 'pending' ? 'المعلقة' : 'المسددة'}\n\nجاري تصدير البيانات...`);
}

// دوال التقارير
function viewSubscriptionReport(reportId) {
    const reportMap = {
        'subscribers': 'تقرير المشتركين',
        'renewals': 'تقرير التجديد'
    };
    alert(`عرض التقرير: ${reportMap[reportId]}\n\nالتقرير جاهز للتحميل.`);
}

function generateSubscriptionReport(reportId) {
    const reportMap = {
        'subscribers': 'تقرير المشتركين',
        'renewals': 'تقرير التجديد'
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
function loadSubscriptions() {
    // تم تعبئة الاشتراكات مباشرة في HTML
}