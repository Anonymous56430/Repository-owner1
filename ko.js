// بيانات نظام خدمة العملاء
const supportData = {
    tickets: [
        { 
            id: 1, 
            customer: 'أحمد محمد',
            subject: 'مشكلة في تسجيل الدخول', 
            department: 'technical', 
            priority: 'high', 
            status: 'open',
            createdDate: '2024-01-15',
            assignedTo: 'سارة',
            description: 'لا يمكنني تسجيل الدخول إلى النظام رغم صحة البيانات'
        },
        { 
            id: 2, 
            customer: 'شركة التقنية',
            subject: 'استفسار عن الفاتورة', 
            department: 'billing', 
            priority: 'medium', 
            status: 'in-progress',
            createdDate: '2024-01-14',
            assignedTo: 'محمد',
            description: 'الفاتورة تحتوي على مبالغ غير واضحة'
        },
        { 
            id: 3, 
            customer: 'مؤسسة النهضة',
            subject: 'طلب دعم فني', 
            department: 'technical', 
            priority: 'low', 
            status: 'closed',
            createdDate: '2024-01-13',
            assignedTo: 'سارة',
            description: 'حاجة إلى مساعدة في إعداد التقارير'
        },
        { 
            id: 4, 
            customer: 'مستشفى الأمل',
            subject: 'مشكلة في الخادم', 
            department: 'technical', 
            priority: 'urgent', 
            status: 'open',
            createdDate: '2024-01-12',
            assignedTo: 'خالد',
            description: 'الخادم لا يستجيب وتوقف النظام عن العمل'
        },
        { 
            id: 5, 
            customer: 'شركة البناء',
            subject: 'تحديث الباقة', 
            department: 'sales', 
            priority: 'medium', 
            status: 'in-progress',
            createdDate: '2024-01-11',
            assignedTo: 'لمى',
            description: 'الرغبة في الترقية إلى الباقة المميزة'
        }
    ],
    
    customers: [
        { 
            id: 1, 
            name: 'أحمد محمد', 
            email: 'ahmed@company.com', 
            phone: '+966500000001',
            company: 'شركة التقنية',
            joinDate: '2023-10-01',
            status: 'active',
            satisfaction: 80,
            openTickets: 5
        },
        { 
            id: 2, 
            name: 'شركة المستقبل', 
            email: 'info@future.com', 
            phone: '+966500000002',
            company: 'شركة المستقبل',
            joinDate: '2022-08-15',
            status: 'premium',
            satisfaction: 95,
            openTickets: 2
        },
        { 
            id: 3, 
            name: 'مستشفى الأمل', 
            email: 'support@alamal.com', 
            phone: '+966500000003',
            company: 'مستشفى الأمل',
            joinDate: '2024-01-01',
            status: 'pending',
            satisfaction: 60,
            openTickets: 3
        },
        { 
            id: 4, 
            name: 'مؤسسة النهضة', 
            email: 'contact@nahda.com', 
            phone: '+966500000004',
            company: 'مؤسسة النهضة',
            joinDate: '2023-05-20',
            status: 'active',
            satisfaction: 88,
            openTickets: 1
        }
    ],
    
    knowledgeBase: [
        { 
            id: 1, 
            title: 'إعدادات النظام الأساسية',
            category: 'technical',
            status: 'published',
            views: 1245,
            author: 'أحمد',
            lastUpdate: '2024-01-10',
            content: 'دليل شامل لإعدادات النظام الأساسية والمتقدم...',
            tags: ['إعدادات', 'تقنية']
        },
        { 
            id: 2, 
            title: 'استكشاف الأخطاء وإصلاحها',
            category: 'technical',
            status: 'published',
            views: 892,
            author: 'سارة',
            lastUpdate: '2024-01-08',
            content: 'حلول للمشاكل الشائعة واستكشاف الأخطاء...',
            tags: ['إصلاح', 'أخطاء']
        },
        { 
            id: 3, 
            title: 'دليل المستخدم الشامل',
            category: 'general',
            status: 'draft',
            views: 450,
            author: 'محمد',
            lastUpdate: '2024-01-05',
            content: 'دليل تفصيلي لجميع ميزات النظام...',
            tags: ['دليل', 'مستخدمين']
        }
    ],
    
    liveChats: [
        { 
            id: 1, 
            customer: 'أحمد محمد',
            status: 'active',
            duration: '5 دقائق',
            startTime: '10:25',
            agent: 'سارة',
            messages: [
                { sender: 'أحمد محمد', message: 'أحتاج مساعدة في إعداد التقارير', time: '10:25', type: 'customer' },
                { sender: 'سارة', message: 'أهلاً بك أحمد، سأساعدك في ذلك', time: '10:26', type: 'agent' }
            ],
            progress: 70
        },
        { 
            id: 2, 
            customer: 'شركة التقنية',
            status: 'waiting',
            duration: '2 دقائق',
            startTime: '10:30',
            agent: null,
            messages: [
                { sender: 'شركة التقنية', message: 'استفسار عن الباقة المميزة', time: '10:30', type: 'customer' }
            ],
            progress: 20
        }
    ],
    
    notifications: [
        { id: 1, title: 'تذكرة عاجلة', description: 'تذكرة جديدة من العميل أحمد - مشكلة حرجة في النظام', time: '10:30', unread: true, priority: 'high' },
        { id: 2, title: 'مكالمة واردة', description: 'مكالمة من العميل محمد تحتاج متابعة فورية', time: '09:15', unread: true, priority: 'medium' },
        { id: 3, title: 'تقرير الأداء', description: 'تقرير أداء فريق الدعم جاهز للمراجعة', time: 'أمس', unread: false, priority: 'low' },
        { id: 4, title: 'تذكرة مغلقة', description: 'تم إغلاق تذكرة العميل مؤسسة النهضة', time: 'الاثنين', unread: true, priority: 'medium' }
    ],
    
    chatMessages: {
        management: [
            { sender: 'الإدارة', message: 'ما هو تقدم العمل على التذاكر العاجلة؟', time: '10:00', type: 'received' }
        ],
        supportManager: [
            { sender: 'مدير الدعم', message: 'أهلاً بك، هل هناك أي استفسارات؟', time: '09:30', type: 'received' }
        ],
        techTeam: [
            { sender: 'أحمد', message: 'مرحبا بالجميع، كيف حال العمل على التذاكر الفنية؟', time: '10:30', type: 'received' }
        ],
        billingTeam: [
            { sender: 'محمد', message: 'التقرير الشهري للفواتير جاهز للمراجعة', time: '09:15', type: 'received' }
        ],
        escalationTeam: [
            { sender: 'سارة', message: 'هناك تذكرة تحتاج تصعيد للإدارة', time: 'أمس', type: 'received' }
        ]
    },
    
    tasks: {
        current: [
            { 
                id: 1, 
                title: 'متابعة تذكرة العميل أحمد', 
                dueDate: '2024-12-31', 
                priority: 'high', 
                description: 'متابعة حل مشكلة تسجيل الدخول للعميل أحمد',
                completed: false 
            },
            { 
                id: 2, 
                title: 'مراجعة تقرير الأداء', 
                dueDate: '2024-12-28', 
                priority: 'medium', 
                description: 'مراجعة وتحليل تقرير أداء فريق الدعم',
                completed: false 
            },
            { 
                id: 3, 
                title: 'تحديث قاعدة المعرفة', 
                dueDate: '2024-12-25', 
                priority: 'low', 
                description: 'إضافة مقالات جديدة لقاعدة المعرفة',
                completed: false 
            }
        ],
        future: [
            { 
                id: 4, 
                title: 'تدريب فريق الدعم الجديد', 
                dueDate: '2024-01-25', 
                priority: 'high', 
                description: 'تدريب الموظفين الجدد على أنظمة الدعم',
                completed: false 
            },
            { 
                id: 5, 
                title: 'تقييم رضا العملاء', 
                dueDate: '2024-02-01', 
                priority: 'medium', 
                description: 'إجراء استبيان رضا العملاء وتحليل النتائج',
                completed: false 
            },
            { 
                id: 6, 
                title: 'تحديث سياسات الدعم', 
                dueDate: '2024-02-15', 
                priority: 'low', 
                description: 'مراجعة وتحديث سياسات خدمة العملاء',
                completed: false 
            }
        ]
    },
    
    calendarTasks: {
        '2024-12-31': [
            { id: 1, title: 'متابعة تذكرة العميل أحمد', priority: 'high' }
        ],
        '2024-12-28': [
            { id: 2, title: 'مراجعة تقرير الأداء', priority: 'medium' }
        ],
        '2024-12-25': [
            { id: 3, title: 'تحديث قاعدة المعرفة', priority: 'low' }
        ],
        '2024-01-25': [
            { id: 4, title: 'تدريب فريق الدعم الجديد', priority: 'high' }
        ],
        '2024-02-01': [
            { id: 5, title: 'تقييم رضا العملاء', priority: 'medium' }
        ],
        '2024-02-15': [
            { id: 6, title: 'تحديث سياسات الدعم', priority: 'low' }
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
    const userData = JSON.parse(localStorage.getItem('currentSupportUser')) || {
        full_name: 'سارة أحمد',
        username: 'support_specialist',
        role: 'أخصائي دعم عملاء',
        employee_id: 'SUP-001',
        avatar: 'https://via.placeholder.com/50'
    };
    
    document.getElementById('o12').textContent = `مرحبا، ${userData.full_name.split(' ')[0]}`;
    document.getElementById('o94').textContent = userData.full_name;
    document.getElementById('o96').textContent = userData.employee_id;
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
        'om43', 'om44'
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
    
    if (!localStorage.getItem('currentSupportUser')) {
        const defaultUser = {
            full_name: 'سارة أحمد',
            username: 'support_specialist',
            role: 'أخصائي دعم عملاء',
            employee_id: 'SUP-001',
            avatar: 'https://via.placeholder.com/50'
        };
        localStorage.setItem('currentSupportUser', JSON.stringify(defaultUser));
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
    supportData.notifications.forEach(notification => {
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
        management: 'الإدارة',
        supportManager: 'مدير الدعم',
        techTeam: 'فريق الدعم الفني',
        billingTeam: 'فريق الفواتير',
        escalationTeam: 'فريق التصعيد'
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
    
    const messages = supportData.chatMessages[chatId] || [];
    
    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${message.type === 'received' ? 'received' : 'sent'}`;
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
        if (!supportData.chatMessages[activeChat]) {
            supportData.chatMessages[activeChat] = [];
        }
        
        supportData.chatMessages[activeChat].push({
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
            supportManager: 'تم استلام رسالتك، شكراً لك',
            techTeam: 'أحمد: شكراً على المعلومة',
            billingTeam: 'محمد: ممتاز، سأراجعه',
            escalationTeam: 'سارة: سأتولى الأمر'
        };
        
        if (!supportData.chatMessages[chatId]) {
            supportData.chatMessages[chatId] = [];
        }
        
        supportData.chatMessages[chatId].push({
            sender: chatId === 'management' ? 'الإدارة' : 
                   chatId === 'supportManager' ? 'مدير الدعم' :
                   chatId === 'techTeam' ? 'أحمد' :
                   chatId === 'billingTeam' ? 'محمد' : 'سارة',
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
    
    supportData.tasks.current.forEach(task => {
        const taskElement = createTaskElement(task);
        currentTasksContainer.appendChild(taskElement);
    });
}

function loadUpcomingTasks() {
    const upcomingTasksContainer = document.getElementById('o77');
    upcomingTasksContainer.innerHTML = '';
    
    supportData.tasks.future.forEach(task => {
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
        
        const dayTasks = supportData.calendarTasks[dateString] || [];
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
        
        const dayTasks = supportData.calendarTasks[dateString] || [];
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
    const allTasks = [...supportData.tasks.current, ...supportData.tasks.future];
    const task = allTasks.find(t => t.id === taskId);
    return task ? task.description : 'لا يوجد وصف';
}

function completeTask(taskId) {
    const allTasks = [...supportData.tasks.current, ...supportData.tasks.future];
    const task = allTasks.find(t => t.id === taskId);
    if (task) {
        task.completed = true;
        alert(`تم إكمال المهمة: ${task.title}`);
        loadTasks();
    }
}

function deleteTask(taskId, dateString) {
    if (confirm('هل أنت متأكد من حذف هذه المهمة؟')) {
        supportData.tasks.current = supportData.tasks.current.filter(t => t.id !== taskId);
        supportData.tasks.future = supportData.tasks.future.filter(t => t.id !== taskId);
        
        if (supportData.calendarTasks[dateString]) {
            supportData.calendarTasks[dateString] = supportData.calendarTasks[dateString].filter(t => t.id !== taskId);
            if (supportData.calendarTasks[dateString].length === 0) {
                delete supportData.calendarTasks[dateString];
            }
        }
        
        loadTasks();
        updateMiniCalendar();
        if (isCalendarOpen) {
            updateFullCalendar();
        }
        showDayTasks(dateString, supportData.calendarTasks[dateString] || []);
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
                <h3>إضافة مهمة دعم جديدة</h3>
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
        id: Math.max(...[...supportData.tasks.current, ...supportData.tasks.future].map(t => t.id)) + 1,
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
        supportData.tasks.current.push(newTask);
    } else {
        supportData.tasks.future.push(newTask);
    }
    
    if (!supportData.calendarTasks[date]) {
        supportData.calendarTasks[date] = [];
    }
    supportData.calendarTasks[date].push({
        id: newTask.id,
        title: newTask.title,
        priority: newTask.priority
    });
    
    loadTasks();
    updateMiniCalendar();
    if (isCalendarOpen) {
        updateFullCalendar();
        showDayTasks(date, supportData.calendarTasks[date]);
    }
    
    document.querySelector('.om61').remove();
    alert('تم إضافة المهمة بنجاح');
}

// دوال لوحة التحكم الأساسية
function initializeDashboard() {
    let userData = JSON.parse(localStorage.getItem('currentSupportUser'));
    if (!userData) {
        const defaultUser = {
            full_name: 'سارة أحمد',
            username: 'support_specialist',
            role: 'أخصائي دعم عملاء',
            employee_id: 'SUP-001',
            avatar: 'https://via.placeholder.com/50'
        };
        localStorage.setItem('currentSupportUser', JSON.stringify(defaultUser));
        userData = defaultUser;
    }

    initializeUser();
    updateDashboardStats();
    loadTickets();
    initializeCharts();
}

function updateDashboardStats() {
    updateStatsCards();
    loadRecentTickets();
}

function updateStatsCards() {
    const openTickets = supportData.tickets.filter(t => t.status === 'open').length;
    const responseRate = 94; // نسبة افتراضية
    const satisfactionRate = 4.8; // معدل رضا افتراضي
    const activeCalls = 8; // مكالمات نشطة افتراضية

    document.getElementById('om4').textContent = openTickets;
    document.getElementById('om7').textContent = responseRate + '%';
    document.getElementById('om9').textContent = satisfactionRate;
    document.getElementById('om11').textContent = activeCalls;
}

function loadRecentTickets() {
    // تم تعبئة التذاكر مباشرة في HTML
}

function initializeCharts() {
    const priorityChartCtx = document.getElementById('om14').getContext('2d');
    const priorityChart = new Chart(priorityChartCtx, {
        type: 'doughnut',
        data: {
            labels: ['عاجل', 'عالي', 'متوسط', 'منخفض'],
            datasets: [{
                data: [1, 2, 2, 1],
                backgroundColor: ['#e74c3c', '#f39c12', '#3498db', '#27ae60']
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

    const performanceChartCtx = document.getElementById('om15').getContext('2d');
    const performanceChart = new Chart(performanceChartCtx, {
        type: 'bar',
        data: {
            labels: ['سارة', 'محمد', 'أحمد', 'خالد', 'لمى'],
            datasets: [{
                label: 'التذاكر المغلقة',
                data: [15, 12, 8, 7, 5],
                backgroundColor: '#3498db'
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
    } else if (tabId === 'tickets') {
        loadTickets();
    } else if (tabId === 'customers') {
        loadCustomers();
    } else if (tabId === 'knowledge') {
        loadKnowledgeBase();
    } else if (tabId === 'livechat') {
        loadLiveChats();
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
        localStorage.removeItem('currentSupportUser');
        window.location.href = 'login.html';
    }
}

// دوال إدارة التذاكر
function showAddTicketModal() {
    document.getElementById('addTicketModal').style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function saveTicket() {
    const subject = document.getElementById('ticketSubject').value;
    const customer = document.getElementById('ticketCustomer').value;
    const department = document.getElementById('ticketDepartment').value;
    const priority = document.getElementById('ticketPriority').value;
    const description = document.getElementById('ticketDescription').value;
    
    if (!subject || !customer || !department) {
        alert('يرجى ملء الحقول المطلوبة');
        return;
    }
    
    const newTicket = {
        id: supportData.tickets.length + 1,
        customer: document.getElementById('ticketCustomer').options[document.getElementById('ticketCustomer').selectedIndex].text,
        subject: subject,
        department: department,
        priority: priority,
        status: 'open',
        createdDate: new Date().toISOString().split('T')[0],
        assignedTo: 'سارة',
        description: description
    };
    
    supportData.tickets.push(newTicket);
    closeModal('addTicketModal');
    loadTickets();
    alert('تم إنشاء التذكرة بنجاح');
}

function loadTickets() {
    const ticketsTable = document.getElementById('om22');
    ticketsTable.innerHTML = '';
    
    supportData.tickets.forEach(ticket => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>TKT-${ticket.id}</td>
            <td>${ticket.customer}</td>
            <td>${ticket.subject}</td>
            <td>${getDepartmentText(ticket.department)}</td>
            <td><span class="priority-${ticket.priority}">${getPriorityText(ticket.priority)}</span></td>
            <td><span class="status-${ticket.status === 'open' ? 'completed' : ticket.status === 'in-progress' ? 'inprogress' : 'pending'}">${getStatusText(ticket.status)}</span></td>
            <td>${formatDate(ticket.createdDate)}</td>
            <td>
                <button class="o21 o37" onclick="viewTicket(${ticket.id})">عرض</button>
                <button class="o21 o37 o22" onclick="closeTicket(${ticket.id})">إغلاق</button>
            </td>
        `;
        ticketsTable.appendChild(row);
    });
}

function getDepartmentText(department) {
    const departments = {
        'technical': 'الدعم الفني',
        'billing': 'الفواتير',
        'sales': 'المبيعات',
        'general': 'دعم عام'
    };
    return departments[department] || department;
}

function getStatusText(status) {
    const statuses = {
        'open': 'مفتوحة',
        'in-progress': 'قيد المعالجة',
        'closed': 'مغلقة'
    };
    return statuses[status] || status;
}

function viewTicket(ticketId) {
    const ticket = supportData.tickets.find(t => t.id === ticketId);
    if (ticket) {
        alert(`عرض التذكرة: ${ticket.subject}\n\nالعميل: ${ticket.customer}\n\nالوصف: ${ticket.description}`);
    }
}

function closeTicket(ticketId) {
    if (confirm('هل أنت متأكد من إغلاق هذه التذكرة؟')) {
        const ticketIndex = supportData.tickets.findIndex(t => t.id === ticketId);
        if (ticketIndex !== -1) {
            supportData.tickets[ticketIndex].status = 'closed';
            loadTickets();
            alert('تم إغلاق التذكرة بنجاح');
        }
    }
}

function exportTickets() {
    const csvContent = "data:text/csv;charset=utf-8," 
        + "رقم التذكرة,العميل,الموضوع,القسم,الأولوية,الحالة,تاريخ الإنشاء,الوصف\n"
        + supportData.tickets.map(ticket => 
            `TKT-${ticket.id},${ticket.customer},${ticket.subject},${getDepartmentText(ticket.department)},${getPriorityText(ticket.priority)},${getStatusText(ticket.status)},${ticket.createdDate},${ticket.description}`
        ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "تذاكر_الدعم.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// دوال العملاء
function loadCustomers() {
    // تم تعبئة العملاء مباشرة في HTML
}

function openCustomerDetails(customerId) {
    const customer = getCustomerById(customerId);
    if (customer) {
        alert(`تفاصيل العميل: ${customer.name}\n\nالبريد: ${customer.email}\nالهاتف: ${customer.phone}\nالشركة: ${customer.company}`);
    }
}

function getCustomerById(customerId) {
    const customerMap = {
        'cust1': supportData.customers[0],
        'cust2': supportData.customers[1],
        'cust3': supportData.customers[2]
    };
    return customerMap[customerId];
}

function createTicketForCustomer(customerId) {
    event.stopPropagation();
    const customer = getCustomerById(customerId);
    if (customer) {
        showAddTicketModal();
        // يمكن تعبئة بيانات العميل تلقائياً
    }
}

function contactCustomer(customerId) {
    event.stopPropagation();
    const customer = getCustomerById(customerId);
    if (customer) {
        alert(`الاتصال بالعميل: ${customer.name}\nالهاتف: ${customer.phone}`);
    }
}

// دوال قاعدة المعرفة
function loadKnowledgeBase() {
    // تم تعبئة قاعدة المعرفة مباشرة في HTML
}

function openArticle(articleId) {
    const article = getArticleById(articleId);
    if (article) {
        alert(`عرض المقال: ${article.title}\n\n${article.content}`);
    }
}

function getArticleById(articleId) {
    const articleMap = {
        'article1': supportData.knowledgeBase[0],
        'article2': supportData.knowledgeBase[1],
        'article3': supportData.knowledgeBase[2]
    };
    return articleMap[articleId];
}

function viewArticle(articleId) {
    event.stopPropagation();
    const article = getArticleById(articleId);
    if (article) {
        alert(`عرض المقال: ${article.title}\n\n${article.content}`);
    }
}

function editArticle(articleId) {
    event.stopPropagation();
    const article = getArticleById(articleId);
    if (article) {
        alert(`تعديل المقال: ${article.title}`);
    }
}

// دوال الدعم المباشر
function loadLiveChats() {
    // تم تعبئة المحادثات المباشرة مباشرة في HTML
}

function openChatSession(chatId) {
    const chat = getChatById(chatId);
    if (chat) {
        alert(`فتح محادثة مع: ${chat.customer}\n\nالحالة: ${chat.status}`);
    }
}

function getChatById(chatId) {
    const chatMap = {
        'chat1': supportData.liveChats[0],
        'chat2': supportData.liveChats[1]
    };
    return chatMap[chatId];
}

function transferChat(chatId) {
    event.stopPropagation();
    const chat = getChatById(chatId);
    if (chat) {
        alert(`تحويل محادثة: ${chat.customer}`);
    }
}

function joinChat(chatId) {
    event.stopPropagation();
    const chat = getChatById(chatId);
    if (chat) {
        alert(`الانضمام إلى محادثة: ${chat.customer}`);
    }
}

function acceptChat(chatId) {
    event.stopPropagation();
    const chat = getChatById(chatId);
    if (chat) {
        chat.agent = 'سارة';
        chat.status = 'active';
        alert(`تم قبول محادثة: ${chat.customer}`);
    }
}

// دوال مساعدة
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA');
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