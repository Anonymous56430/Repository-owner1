// بيانات نظام الرقابة والإشراف
const monitoringData = {
    departments: [
        { 
            id: 1, 
            name: 'قسم المبيعات',
            manager: 'أحمد محمد',
            employees: 25,
            performance: 95,
            status: 'excellent',
            kpis: 15,
            growth: 12,
            alerts: 2
        },
        { 
            id: 2, 
            name: 'قسم الدعم الفني',
            manager: 'سارة أحمد',
            employees: 18,
            performance: 78,
            status: 'good',
            kpis: 12,
            responseTime: 4.2,
            alerts: 5
        },
        { 
            id: 3, 
            name: 'قسم التطوير',
            manager: 'محمد الخالد',
            employees: 15,
            performance: 62,
            status: 'watch',
            kpis: 10,
            bugs: 8,
            alerts: 8
        },
        { 
            id: 4, 
            name: 'قسم الموارد البشرية',
            manager: 'لمى عبدالله',
            employees: 8,
            performance: 88,
            status: 'good',
            kpis: 8,
            satisfaction: 92,
            alerts: 1
        }
    ],
    
    employees: [
        { 
            id: 1, 
            name: 'أحمد محمد',
            department: 'المبيعات',
            position: 'منسق مبيعات',
            joinDate: '2022-03-15',
            performance: 98,
            status: 'excellent',
            rating: 5,
            achievements: ['أعلى مبيعات', 'أفضل خدمة عملاء']
        },
        { 
            id: 2, 
            name: 'سارة أحمد',
            department: 'الدعم الفني',
            position: 'أخصائية دعم',
            joinDate: '2023-01-10',
            performance: 92,
            status: 'very-good',
            rating: 4.5,
            achievements: ['95% رضا عملاء', 'أسرع استجابة']
        },
        { 
            id: 3, 
            name: 'محمد الخالد',
            department: 'التطوير',
            position: 'مطور',
            joinDate: '2024-02-01',
            performance: 65,
            status: 'watch',
            rating: 3.2,
            achievements: ['مشروع تسليم في الوقت']
        }
    ],
    
    kpis: [
        { 
            id: 1, 
            name: 'معدل التحويل',
            department: 'sales',
            currentValue: 28,
            target: 25,
            unit: 'percentage',
            trend: 'up',
            status: 'green',
            frequency: 'monthly',
            priority: 'high'
        },
        { 
            id: 2, 
            name: 'وقت الاستجابة',
            department: 'support',
            currentValue: 4.2,
            target: 3,
            unit: 'time',
            trend: 'down',
            status: 'yellow',
            frequency: 'daily',
            priority: 'high'
        },
        { 
            id: 3, 
            name: 'معدل الإنجاز',
            department: 'development',
            currentValue: 62,
            target: 90,
            unit: 'percentage',
            trend: 'down',
            status: 'red',
            frequency: 'weekly',
            priority: 'high'
        },
        { 
            id: 4, 
            name: 'رضا الموظفين',
            department: 'hr',
            currentValue: 92,
            target: 85,
            unit: 'percentage',
            trend: 'up',
            status: 'green',
            frequency: 'quarterly',
            priority: 'medium'
        }
    ],
    
    alerts: [
        { 
            id: 1, 
            type: 'انخفاض الأداء',
            department: 'المبيعات',
            kpi: 'معدل التحويل',
            level: 'high',
            status: 'unresolved',
            createdDate: '2024-01-15',
            description: 'انخفاض في معدل التحويل بنسبة 15% هذا الأسبوع'
        },
        { 
            id: 2, 
            type: 'تجاوز الوقت',
            department: 'الدعم الفني',
            kpi: 'وقت الاستجابة',
            level: 'medium',
            status: 'in-progress',
            createdDate: '2024-01-14',
            description: 'تجاوز وقت الاستجابة المستهدف بمعدل 1.2 دقيقة'
        },
        { 
            id: 3, 
            type: 'انخفاض الإنتاجية',
            department: 'التطوير',
            kpi: 'معدل الإنجاز',
            level: 'low',
            status: 'resolved',
            createdDate: '2024-01-13',
            description: 'انخفاض في معدل إنجاز المهام بنسبة 28% عن الهدف'
        }
    ],
    
    notifications: [
        { id: 1, title: 'تنبيه أداء', description: 'انخفاض في أداء قسم المبيعات بنسبة 15% هذا الأسبوع', time: '10:30', unread: true, priority: 'high' },
        { id: 2, title: 'تقرير رقابي', description: 'تقرير الرقابة الشهري جاهز للمراجعة', time: '09:15', unread: true, priority: 'medium' },
        { id: 3, title: 'مؤشرات حرجة', description: '3 مؤشرات أداء في المنطقة الحمراء تحتاج متابعة', time: 'أمس', unread: false, priority: 'low' },
        { id: 4, title: 'اجتماع متابعة', description: 'اجتماع متابعة أداء الأقسام غداً الساعة 10 صباحاً', time: 'الاثنين', unread: true, priority: 'medium' }
    ],
    
    chatMessages: {
        executive: [
            { sender: 'الإدارة التنفيذية', message: 'ما هو تقييمكم لأداء الأقسام هذا الشهر؟', time: '10:00', type: 'received' }
        ],
        ceo: [
            { sender: 'المدير العام', message: 'أهلاً بك، هل هناك أي تقارير تحتاج مراجعتي؟', time: '09:30', type: 'received' }
        ],
        salesHead: [
            { sender: 'رئيس المبيعات', message: 'أداء الفريق تحسن هذا الأسبوع، هل لديكم ملاحظات؟', time: '10:30', type: 'received' }
        ],
        supportHead: [
            { sender: 'رئيس الدعم', message: 'نعمل على تحسين وقت الاستجابة، هل هناك توصيات؟', time: '09:15', type: 'received' }
        ],
        hrHead: [
            { sender: 'رئيس الموارد البشرية', message: 'تقرير رضا الموظفين جاهز للمراجعة', time: 'أمس', type: 'received' }
        ]
    },
    
    tasks: {
        current: [
            { 
                id: 1, 
                title: 'مراجعة أداء قسم المبيعات', 
                dueDate: '2024-12-31', 
                priority: 'high', 
                description: 'تحليل أسباب انخفاض الأداء وإعداد خطة تحسين',
                completed: false 
            },
            { 
                id: 2, 
                title: 'إعداد تقرير الرقابة الشهري', 
                dueDate: '2024-12-28', 
                priority: 'medium', 
                description: 'جمع وتحليل بيانات أداء جميع الأقسام',
                completed: false 
            },
            { 
                id: 3, 
                title: 'متابعة مؤشرات الأداء الحمراء', 
                dueDate: '2024-12-25', 
                priority: 'high', 
                description: 'متابعة المؤشرات في المنطقة الحمراء وإعداد تقرير',
                completed: false 
            }
        ],
        future: [
            { 
                id: 4, 
                title: 'اجتماع تقييم الأداء', 
                dueDate: '2024-01-25', 
                priority: 'high', 
                description: 'اجتماع مع رؤساء الأقسام لتقييم الأداء',
                completed: false 
            },
            { 
                id: 5, 
                title: 'تحديث مؤشرات الأداء', 
                dueDate: '2024-02-01', 
                priority: 'medium', 
                description: 'مراجعة وتحديث مؤشرات الأداء الرئيسية',
                completed: false 
            },
            { 
                id: 6, 
                title: 'تحليل اتجاهات الأداء', 
                dueDate: '2024-02-15', 
                priority: 'low', 
                description: 'تحليل اتجاهات الأداء على المدى الطويل',
                completed: false 
            }
        ]
    },
    
    calendarTasks: {
        '2024-12-31': [
            { id: 1, title: 'مراجعة أداء قسم المبيعات', priority: 'high' }
        ],
        '2024-12-28': [
            { id: 2, title: 'إعداد تقرير الرقابة الشهري', priority: 'medium' }
        ],
        '2024-12-25': [
            { id: 3, title: 'متابعة مؤشرات الأداء الحمراء', priority: 'high' }
        ],
        '2024-01-25': [
            { id: 4, title: 'اجتماع تقييم الأداء', priority: 'high' }
        ],
        '2024-02-01': [
            { id: 5, title: 'تحديث مؤشرات الأداء', priority: 'medium' }
        ],
        '2024-02-15': [
            { id: 6, title: 'تحليل اتجاهات الأداء', priority: 'low' }
        ]
    }
};

// متغيرات عامة
let activeChat = null;
let isLeftSidebarExpanded = false;
let currentDate = new Date();
let isCalendarOpen = false;
let sidebarWidth = 300;
let chatMode = 'sidebar';

// دوال المستخدم المحدثة
function initializeUser() {
    const userData = JSON.parse(localStorage.getItem('currentMonitoringUser')) || {
        full_name: 'خالد أحمد',
        username: 'monitoring_manager',
        role: 'مدير الرقابة',
        employee_id: 'MON-001',
        avatar: 'https://via.placeholder.com/50'
    };
    
    document.getElementById('o12').textContent = `مرحبا، ${userData.full_name.split(' ')[0]}`;
    document.getElementById('o94').textContent = userData.full_name;
    document.getElementById('o96').textContent = userData.employee_id;
    document.getElementById('o8').src = userData.avatar;
    
    document.querySelector('.o10').textContent = userData.role;
}

// دالة تحديث الساعة والتواريخ
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

// تهيئة التطبيق
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
    
    if (!localStorage.getItem('currentMonitoringUser')) {
        const defaultUser = {
            full_name: 'خالد أحمد',
            username: 'monitoring_manager',
            role: 'مدير الرقابة',
            employee_id: 'MON-001',
            avatar: 'https://via.placeholder.com/50'
        };
        localStorage.setItem('currentMonitoringUser', JSON.stringify(defaultUser));
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
    monitoringData.notifications.forEach(notification => {
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
        executive: 'الإدارة التنفيذية',
        ceo: 'المدير العام',
        salesHead: 'رئيس المبيعات',
        supportHead: 'رئيس الدعم',
        hrHead: 'رئيس الموارد البشرية'
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
    
    const messages = monitoringData.chatMessages[chatId] || [];
    
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
        if (!monitoringData.chatMessages[activeChat]) {
            monitoringData.chatMessages[activeChat] = [];
        }
        
        monitoringData.chatMessages[activeChat].push({
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
            executive: 'شكراً على التحديث، ننتظر التقرير النهائي',
            ceo: 'تم استلام رسالتك، شكراً لك',
            salesHead: 'سنعمل على تحسين الأداء',
            supportHead: 'شكراً على الملاحظات',
            hrHead: 'سأراجع التقرير'
        };
        
        if (!monitoringData.chatMessages[chatId]) {
            monitoringData.chatMessages[chatId] = [];
        }
        
        monitoringData.chatMessages[chatId].push({
            sender: chatId === 'executive' ? 'الإدارة التنفيذية' : 
                   chatId === 'ceo' ? 'المدير العام' :
                   chatId === 'salesHead' ? 'رئيس المبيعات' :
                   chatId === 'supportHead' ? 'رئيس الدعم' : 'رئيس الموارد البشرية',
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
    
    monitoringData.tasks.current.forEach(task => {
        const taskElement = createTaskElement(task);
        currentTasksContainer.appendChild(taskElement);
    });
}

function loadUpcomingTasks() {
    const upcomingTasksContainer = document.getElementById('o77');
    upcomingTasksContainer.innerHTML = '';
    
    monitoringData.tasks.future.forEach(task => {
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
        
        const dayTasks = monitoringData.calendarTasks[dateString] || [];
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
        
        const dayTasks = monitoringData.calendarTasks[dateString] || [];
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
    const allTasks = [...monitoringData.tasks.current, ...monitoringData.tasks.future];
    const task = allTasks.find(t => t.id === taskId);
    return task ? task.description : 'لا يوجد وصف';
}

function completeTask(taskId) {
    const allTasks = [...monitoringData.tasks.current, ...monitoringData.tasks.future];
    const task = allTasks.find(t => t.id === taskId);
    if (task) {
        task.completed = true;
        alert(`تم إكمال المهمة: ${task.title}`);
        loadTasks();
    }
}

function deleteTask(taskId, dateString) {
    if (confirm('هل أنت متأكد من حذف هذه المهمة؟')) {
        monitoringData.tasks.current = monitoringData.tasks.current.filter(t => t.id !== taskId);
        monitoringData.tasks.future = monitoringData.tasks.future.filter(t => t.id !== taskId);
        
        if (monitoringData.calendarTasks[dateString]) {
            monitoringData.calendarTasks[dateString] = monitoringData.calendarTasks[dateString].filter(t => t.id !== taskId);
            if (monitoringData.calendarTasks[dateString].length === 0) {
                delete monitoringData.calendarTasks[dateString];
            }
        }
        
        loadTasks();
        updateMiniCalendar();
        if (isCalendarOpen) {
            updateFullCalendar();
        }
        showDayTasks(dateString, monitoringData.calendarTasks[dateString] || []);
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
                <h3>إضافة مهمة رقابية جديدة</h3>
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
        id: Math.max(...[...monitoringData.tasks.current, ...monitoringData.tasks.future].map(t => t.id)) + 1,
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
        monitoringData.tasks.current.push(newTask);
    } else {
        monitoringData.tasks.future.push(newTask);
    }
    
    if (!monitoringData.calendarTasks[date]) {
        monitoringData.calendarTasks[date] = [];
    }
    monitoringData.calendarTasks[date].push({
        id: newTask.id,
        title: newTask.title,
        priority: newTask.priority
    });
    
    loadTasks();
    updateMiniCalendar();
    if (isCalendarOpen) {
        updateFullCalendar();
        showDayTasks(date, monitoringData.calendarTasks[date]);
    }
    
    document.querySelector('.om61').remove();
    alert('تم إضافة المهمة بنجاح');
}

// دوال لوحة التحكم الأساسية
function initializeDashboard() {
    let userData = JSON.parse(localStorage.getItem('currentMonitoringUser'));
    if (!userData) {
        const defaultUser = {
            full_name: 'خالد أحمد',
            username: 'monitoring_manager',
            role: 'مدير الرقابة',
            employee_id: 'MON-001',
            avatar: 'https://via.placeholder.com/50'
        };
        localStorage.setItem('currentMonitoringUser', JSON.stringify(defaultUser));
        userData = defaultUser;
    }

    initializeUser();
    updateDashboardStats();
    loadPerformanceData();
    initializeCharts();
}

function updateDashboardStats() {
    updateStatsCards();
    loadRecentAlerts();
}

function updateStatsCards() {
    const avgPerformance = Math.round(monitoringData.departments.reduce((sum, dept) => sum + dept.performance, 0) / monitoringData.departments.length);
    const activeAlerts = monitoringData.alerts.filter(alert => alert.status !== 'resolved').length;
    const monitoredDepartments = monitoringData.departments.length;
    const pendingReports = 5; // قيمة افتراضية

    document.getElementById('om4').textContent = avgPerformance + '%';
    document.getElementById('om7').textContent = activeAlerts;
    document.getElementById('om9').textContent = monitoredDepartments;
    document.getElementById('om11').textContent = pendingReports;
}

function loadRecentAlerts() {
    // تم تعبئة التنبيهات مباشرة في HTML
}

function initializeCharts() {
    const departmentsChartCtx = document.getElementById('om14').getContext('2d');
    const departmentsChart = new Chart(departmentsChartCtx, {
        type: 'bar',
        data: {
            labels: ['المبيعات', 'الدعم', 'التطوير', 'الموارد البشرية'],
            datasets: [{
                label: 'أداء الأقسام',
                data: [95, 78, 62, 88],
                backgroundColor: ['#27ae60', '#f39c12', '#e74c3c', '#3498db']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    rtl: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    const kpiChartCtx = document.getElementById('om15').getContext('2d');
    const kpiChart = new Chart(kpiChartCtx, {
        type: 'doughnut',
        data: {
            labels: ['أخضر', 'أصفر', 'أحمر'],
            datasets: [{
                data: [2, 1, 1],
                backgroundColor: ['#27ae60', '#f39c12', '#e74c3c']
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
    } else if (tabId === 'performance') {
        loadPerformanceData();
    } else if (tabId === 'departments') {
        loadDepartments();
    } else if (tabId === 'employees') {
        loadEmployees();
    } else if (tabId === 'kpi') {
        loadKPIs();
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
        localStorage.removeItem('currentMonitoringUser');
        window.location.href = 'login.html';
    }
}

// دوال مراقبة الأداء
function loadPerformanceData() {
    const performanceTable = document.getElementById('om22');
    performanceTable.innerHTML = '';
    
    monitoringData.kpis.forEach(kpi => {
        const row = document.createElement('tr');
        const achievement = Math.round((kpi.currentValue / kpi.target) * 100);
        const trendIcon = kpi.trend === 'up' ? '🔼' : '🔻';
        
        row.innerHTML = `
            <td>${kpi.name}</td>
            <td>${getDepartmentText(kpi.department)}</td>
            <td>${kpi.currentValue} ${getUnitText(kpi.unit)}</td>
            <td>${kpi.target} ${getUnitText(kpi.unit)}</td>
            <td><span class="performance-trend ${kpi.trend === 'up' ? 'trend-up' : 'trend-down'}">${trendIcon} ${achievement}%</span></td>
            <td><span class="kpi-status kpi-${kpi.status}">${getStatusText(kpi.status)}</span></td>
            <td>
                <button class="o21 o37" onclick="viewKPIDetails(${kpi.id})">تفاصيل</button>
                <button class="o21 o37 o22" onclick="adjustKPIThreshold(${kpi.id})">تعديل</button>
            </td>
        `;
        performanceTable.appendChild(row);
    });
}

function getDepartmentText(department) {
    const departments = {
        'sales': 'المبيعات',
        'support': 'الدعم الفني',
        'development': 'التطوير',
        'hr': 'الموارد البشرية'
    };
    return departments[department] || department;
}

function getUnitText(unit) {
    const units = {
        'percentage': '%',
        'time': 'د',
        'number': '',
        'currency': 'ريال'
    };
    return units[unit] || unit;
}

function getStatusText(status) {
    const statuses = {
        'green': 'أخضر',
        'yellow': 'أصفر',
        'red': 'أحمر'
    };
    return statuses[status] || status;
}

function viewKPIDetails(kpiId) {
    const kpi = monitoringData.kpis.find(k => k.id === kpiId);
    if (kpi) {
        alert(`تفاصيل المؤشر: ${kpi.name}\n\nالقيمة الحالية: ${kpi.currentValue}\nالهدف: ${kpi.target}\nالحالة: ${getStatusText(kpi.status)}`);
    }
}

function adjustKPIThreshold(kpiId) {
    const kpi = monitoringData.kpis.find(k => k.id === kpiId);
    if (kpi) {
        alert(`تعديل عتبة المؤشر: ${kpi.name}`);
    }
}

// دوال الأقسام
function loadDepartments() {
    // تم تعبئة الأقسام مباشرة في HTML
}

function openDepartmentDetails(deptId) {
    const department = getDepartmentById(deptId);
    if (department) {
        alert(`تفاصيل القسم: ${department.name}\n\nالمدير: ${department.manager}\nعدد الموظفين: ${department.employees}\nالأداء: ${department.performance}%`);
    }
}

function getDepartmentById(deptId) {
    const deptMap = {
        'sales': monitoringData.departments[0],
        'support': monitoringData.departments[1],
        'development': monitoringData.departments[2]
    };
    return deptMap[deptId];
}

function generateDepartmentReport(deptId) {
    event.stopPropagation();
    const department = getDepartmentById(deptId);
    if (department) {
        alert(`إنشاء تقرير للقسم: ${department.name}`);
    }
}

function monitorDepartment(deptId) {
    event.stopPropagation();
    const department = getDepartmentById(deptId);
    if (department) {
        alert(`بدء مراقبة القسم: ${department.name}`);
    }
}

// دوال الموظفين
function loadEmployees() {
    // تم تعبئة الموظفين مباشرة في HTML
}

function openEmployeeDetails(empId) {
    const employee = getEmployeeById(empId);
    if (employee) {
        alert(`تفاصيل الموظف: ${employee.name}\n\nالقسم: ${employee.department}\nالمنصب: ${employee.position}\nالأداء: ${employee.performance}%`);
    }
}

function getEmployeeById(empId) {
    const empMap = {
        'emp1': monitoringData.employees[0],
        'emp2': monitoringData.employees[1],
        'emp3': monitoringData.employees[2]
    };
    return empMap[empId];
}

function viewEmployeeReport(empId) {
    event.stopPropagation();
    const employee = getEmployeeById(empId);
    if (employee) {
        alert(`عرض تقرير الموظف: ${employee.name}`);
    }
}

function analyzePerformance(empId) {
    event.stopPropagation();
    const employee = getEmployeeById(empId);
    if (employee) {
        alert(`تحليل أداء الموظف: ${employee.name}`);
    }
}

// دوال مؤشرات الأداء
function loadKPIs() {
    // تم تعبئة مؤشرات الأداء مباشرة في HTML
}

function openKPIDetails(kpiId) {
    const kpi = getKPIById(kpiId);
    if (kpi) {
        alert(`تفاصيل المؤشر: ${kpi.name}\n\nالقيمة: ${kpi.currentValue}\nالهدف: ${kpi.target}\nالحالة: ${getStatusText(kpi.status)}`);
    }
}

function getKPIById(kpiId) {
    const kpiMap = {
        'kpi1': monitoringData.kpis[0],
        'kpi2': monitoringData.kpis[1],
        'kpi3': monitoringData.kpis[2]
    };
    return kpiMap[kpiId];
}

function viewKPITrend(kpiId) {
    event.stopPropagation();
    const kpi = getKPIById(kpiId);
    if (kpi) {
        alert(`عرض اتجاه المؤشر: ${kpi.name}`);
    }
}

function adjustKPI(kpiId) {
    event.stopPropagation();
    const kpi = getKPIById(kpiId);
    if (kpi) {
        alert(`تعديل المؤشر: ${kpi.name}`);
    }
}

// دوال إضافة مؤشر أداء
function showAddKPIModal() {
    document.getElementById('addKPIModal').style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function saveKPI() {
    const name = document.getElementById('kpiName').value;
    const department = document.getElementById('kpiDepartment').value;
    const target = document.getElementById('kpiTarget').value;
    const unit = document.getElementById('kpiUnit').value;
    const frequency = document.getElementById('kpiFrequency').value;
    const priority = document.getElementById('kpiPriority').value;
    
    if (!name || !department || !target) {
        alert('يرجى ملء الحقول المطلوبة');
        return;
    }
    
    const newKPI = {
        id: monitoringData.kpis.length + 1,
        name: name,
        department: department,
        currentValue: 0,
        target: parseFloat(target),
        unit: unit,
        trend: 'up',
        status: 'green',
        frequency: frequency,
        priority: priority
    };
    
    monitoringData.kpis.push(newKPI);
    closeModal('addKPIModal');
    loadPerformanceData();
    alert('تم إضافة مؤشر الأداء بنجاح');
}

// دوال مساعدة
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA');
}

function exportPerformance() {
    const csvContent = "data:text/csv;charset=utf-8," 
        + "المؤشر,القسم,القيمة الحالية,الهدف,وحدة القياس,الحالة,الأولوية\n"
        + monitoringData.kpis.map(kpi => 
            `${kpi.name},${getDepartmentText(kpi.department)},${kpi.currentValue},${kpi.target},${getUnitText(kpi.unit)},${getStatusText(kpi.status)},${getPriorityText(kpi.priority)}`
        ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "مؤشرات_الأداء.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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