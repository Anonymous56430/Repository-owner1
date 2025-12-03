// بيانات نظام شؤون الموظفين
const hrData = {
    employees: [
        { 
            id: 1, 
            code: 'EMP-001',
            name: 'محمد أحمد', 
            department: 'التسويق', 
            job: 'مدير تسويق', 
            hireDate: '2023-10-15',
            status: 'نشط',
            salary: 15000,
            email: 'm.ahmed@company.com',
            phone: '0550123456'
        },
        { 
            id: 2, 
            code: 'EMP-002',
            name: 'فاطمة خالد', 
            department: 'المبيعات', 
            job: 'منسق مبيعات', 
            hireDate: '2023-10-14',
            status: 'نشط',
            salary: 8500,
            email: 'f.khaled@company.com',
            phone: '0550123457'
        },
        { 
            id: 3, 
            code: 'EMP-003',
            name: 'خالد سعيد', 
            department: 'التقنية', 
            job: 'مطور برمجيات', 
            hireDate: '2023-10-13',
            status: 'تجربة',
            salary: 12000,
            email: 'k.saeed@company.com',
            phone: '0550123458'
        },
        { 
            id: 4, 
            code: 'EMP-004',
            name: 'نورة محمد', 
            department: 'الموارد البشرية', 
            job: 'أخصائي توظيف', 
            hireDate: '2023-10-12',
            status: 'نشط',
            salary: 11000,
            email: 'n.mohammed@company.com',
            phone: '0550123459'
        },
        { 
            id: 5, 
            code: 'EMP-005',
            name: 'سعيد علي', 
            department: 'المالية', 
            job: 'محاسب', 
            hireDate: '2023-10-11',
            status: 'نشط',
            salary: 9500,
            email: 's.ali@company.com',
            phone: '0550123460'
        }
    ],
    
    salaries: [
        { 
            id: 1, 
            employeeId: 1,
            basicSalary: 15000,
            allowances: 3000,
            deductions: 1500,
            netSalary: 16500,
            month: '2023-12',
            status: 'مدفوع'
        },
        { 
            id: 2, 
            employeeId: 2,
            basicSalary: 8500,
            allowances: 1500,
            deductions: 800,
            netSalary: 9200,
            month: '2023-12',
            status: 'مدفوع'
        },
        { 
            id: 3, 
            employeeId: 3,
            basicSalary: 12000,
            allowances: 2000,
            deductions: 1000,
            netSalary: 13000,
            month: '2023-12',
            status: 'معلق'
        }
    ],
    
    training: [
        { 
            id: 1, 
            name: 'برامج القيادة', 
            type: 'تطوير إداري',
            participants: 25,
            cost: 75000,
            status: 'مكتمل',
            description: 'برامج تطوير المهارات القيادية والإدارية',
            startDate: '2023-11-01',
            endDate: '2023-11-30'
        },
        { 
            id: 2, 
            name: 'التدريب التقني', 
            type: 'تطوير تقني',
            participants: 40,
            cost: 120000,
            status: 'قيد التنفيذ',
            description: 'برامج تطوير المهارات التقنية والتكنولوجية',
            startDate: '2023-12-01',
            endDate: '2024-01-31'
        },
        { 
            id: 3, 
            name: 'مهارات التواصل', 
            type: 'تطوير شخصي',
            participants: 30,
            cost: 45000,
            status: 'مخطط',
            description: 'برامج تطوير مهارات التواصل والعرض',
            startDate: '2024-02-01',
            endDate: '2024-02-28'
        }
    ],
    
    attendance: [
        { 
            id: 1, 
            employeeId: 1,
            date: '2023-12-01',
            checkIn: '08:00',
            checkOut: '17:00',
            status: 'حاضر'
        },
        { 
            id: 2, 
            employeeId: 2,
            date: '2023-12-01',
            checkIn: '08:15',
            checkOut: '17:10',
            status: 'حاضر'
        },
        { 
            id: 3, 
            employeeId: 3,
            date: '2023-12-01',
            checkIn: '09:30',
            checkOut: '18:00',
            status: 'متأخر'
        }
    ],
    
    notifications: [
        { id: 1, title: 'مهمة عاجلة', description: 'يجب إعداد كشوف رواتب الشهر قبل نهاية الأسبوع', time: '10:30', unread: true, priority: 'high' },
        { id: 2, title: 'اجتماع إداري', description: 'اجتماع إدارة الموارد البشرية الساعة 2:00 ظهراً', time: '09:15', unread: true, priority: 'medium' },
        { id: 3, title: 'تحديث النظام', description: 'تم تحديث نظام شؤون الموظفين إلى الإصدار 1.0', time: 'أمس', unread: false, priority: 'low' },
        { id: 4, title: 'موعد تدريب', description: 'برنامج التدريب القيادي يبدأ الأسبوع القادم', time: 'الاثنين', unread: true, priority: 'high' }
    ],
    
    chatMessages: {
        management: [
            { sender: 'الإدارة العليا', message: 'ما هو تقرير الحضور لهذا الشهر؟', time: '10:00', type: 'received' }
        ],
        hrManager: [
            { sender: 'مدير الموارد البشرية', message: 'أهلاً بك، هل هناك أي استفسارات؟', time: '09:30', type: 'received' }
        ],
        hrTeam: [
            { sender: 'أخصائي موارد بشرية', message: 'مرحبا بالجميع، تقرير الموظفين جاهز', time: '10:30', type: 'received' }
        ],
        payrollTeam: [
            { sender: 'محاسب رواتب', message: 'كشوف الرواتب الشهرية جاهزة للمراجعة', time: '09:15', type: 'received' }
        ],
        trainingTeam: [
            { sender: 'منسق تدريب', message: 'برنامج التدريب الجديد يحتاج للموافقة', time: 'أمس', type: 'received' }
        ]
    },
    
    tasks: {
        current: [
            { 
                id: 1, 
                title: 'إعداد كشوف الرواتب', 
                dueDate: '2024-12-31', 
                priority: 'high', 
                description: 'إعداد كشوف رواتب جميع الموظفين للشهر الحالي',
                completed: false 
            },
            { 
                id: 2, 
                title: 'مراجعة طلبات الإجازة', 
                dueDate: '2024-12-28', 
                priority: 'medium', 
                description: 'مراجعة واعتماد طلبات الإجازة المعلقة',
                completed: false 
            },
            { 
                id: 3, 
                title: 'تخطيط برامج التدريب', 
                dueDate: '2024-12-25', 
                priority: 'low', 
                description: 'تخطيط برامج التدريب للربع القادم',
                completed: false 
            }
        ],
        future: [
            { 
                id: 4, 
                title: 'تقييمات الأداء السنوية', 
                dueDate: '2024-01-25', 
                priority: 'high', 
                description: 'بدء عملية تقييمات الأداء السنوية للموظفين',
                completed: false 
            },
            { 
                id: 5, 
                title: 'تحديث سياسات الموارد البشرية', 
                dueDate: '2024-02-01', 
                priority: 'medium', 
                description: 'مراجعة وتحديث سياسات وإجراءات الموارد البشرية',
                completed: false 
            },
            { 
                id: 6, 
                title: 'تقرير الموارد البشرية السنوي', 
                dueDate: '2024-02-15', 
                priority: 'low', 
                description: 'إعداد التقرير السنوي لإدارة الموارد البشرية',
                completed: false 
            }
        ]
    },
    
    calendarTasks: {
        '2024-12-31': [
            { id: 1, title: 'إعداد كشوف الرواتب', priority: 'high' }
        ],
        '2024-12-28': [
            { id: 2, title: 'مراجعة طلبات الإجازة', priority: 'medium' }
        ],
        '2024-12-25': [
            { id: 3, title: 'تخطيط برامج التدريب', priority: 'low' }
        ],
        '2024-01-25': [
            { id: 4, title: 'تقييمات الأداء السنوية', priority: 'high' }
        ],
        '2024-02-01': [
            { id: 5, title: 'تحديث سياسات الموارد البشرية', priority: 'medium' }
        ],
        '2024-02-15': [
            { id: 6, title: 'تقرير الموارد البشرية السنوي', priority: 'low' }
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
    const userData = JSON.parse(localStorage.getItem('currentHRUser')) || {
        full_name: 'أحمد محمد',
        username: 'hr_admin',
        role: 'مدير شؤون الموظفين',
        employee_id: 'HR-001',
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
    
    if (!localStorage.getItem('currentHRUser')) {
        const defaultUser = {
            full_name: 'أحمد محمد',
            username: 'hr_admin',
            role: 'مدير شؤون الموظفين',
            employee_id: 'HR-001',
            avatar: 'https://via.placeholder.com/50'
        };
        localStorage.setItem('currentHRUser', JSON.stringify(defaultUser));
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
    hrData.notifications.forEach(notification => {
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
        hrManager: 'مدير الموارد البشرية',
        hrTeam: 'فريق الموارد البشرية',
        payrollTeam: 'فريق الرواتب',
        trainingTeam: 'فريق التدريب'
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
    
    const messages = hrData.chatMessages[chatId] || [];
    
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
        if (!hrData.chatMessages[activeChat]) {
            hrData.chatMessages[activeChat] = [];
        }
        
        hrData.chatMessages[activeChat].push({
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
            hrManager: 'تم استلام رسالتك، شكراً لك',
            hrTeam: 'أخصائي موارد بشرية: شكراً على المعلومة',
            payrollTeam: 'محاسب رواتب: سأراجع الكشوف',
            trainingTeam: 'منسق تدريب: شكراً على التحديث'
        };
        
        if (!hrData.chatMessages[chatId]) {
            hrData.chatMessages[chatId] = [];
        }
        
        hrData.chatMessages[chatId].push({
            sender: chatId === 'management' ? 'الإدارة العليا' : 
                   chatId === 'hrManager' ? 'مدير الموارد البشرية' :
                   chatId === 'hrTeam' ? 'أخصائي موارد بشرية' :
                   chatId === 'payrollTeam' ? 'محاسب رواتب' : 'منسق تدريب',
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
    
    hrData.tasks.current.forEach(task => {
        const taskElement = createTaskElement(task);
        currentTasksContainer.appendChild(taskElement);
    });
}

function loadUpcomingTasks() {
    const upcomingTasksContainer = document.getElementById('o77');
    upcomingTasksContainer.innerHTML = '';
    
    hrData.tasks.future.forEach(task => {
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
        
        const dayTasks = hrData.calendarTasks[dateString] || [];
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
        
        const dayTasks = hrData.calendarTasks[dateString] || [];
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
    const allTasks = [...hrData.tasks.current, ...hrData.tasks.future];
    const task = allTasks.find(t => t.id === taskId);
    return task ? task.description : 'لا يوجد وصف';
}

function completeTask(taskId) {
    const allTasks = [...hrData.tasks.current, ...hrData.tasks.future];
    const task = allTasks.find(t => t.id === taskId);
    if (task) {
        task.completed = true;
        alert(`تم إكمال المهمة: ${task.title}`);
        loadTasks();
    }
}

function deleteTask(taskId, dateString) {
    if (confirm('هل أنت متأكد من حذف هذه المهمة؟')) {
        hrData.tasks.current = hrData.tasks.current.filter(t => t.id !== taskId);
        hrData.tasks.future = hrData.tasks.future.filter(t => t.id !== taskId);
        
        if (hrData.calendarTasks[dateString]) {
            hrData.calendarTasks[dateString] = hrData.calendarTasks[dateString].filter(t => t.id !== taskId);
            if (hrData.calendarTasks[dateString].length === 0) {
                delete hrData.calendarTasks[dateString];
            }
        }
        
        loadTasks();
        updateMiniCalendar();
        if (isCalendarOpen) {
            updateFullCalendar();
        }
        showDayTasks(dateString, hrData.calendarTasks[dateString] || []);
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
        id: Math.max(...[...hrData.tasks.current, ...hrData.tasks.future].map(t => t.id)) + 1,
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
        hrData.tasks.current.push(newTask);
    } else {
        hrData.tasks.future.push(newTask);
    }
    
    if (!hrData.calendarTasks[date]) {
        hrData.calendarTasks[date] = [];
    }
    hrData.calendarTasks[date].push({
        id: newTask.id,
        title: newTask.title,
        priority: newTask.priority
    });
    
    loadTasks();
    updateMiniCalendar();
    if (isCalendarOpen) {
        updateFullCalendar();
        showDayTasks(date, hrData.calendarTasks[date]);
    }
    
    document.querySelector('.om61').remove();
    alert('تم إضافة المهمة بنجاح');
}

// دوال لوحة التحكم الأساسية
function initializeDashboard() {
    let userData = JSON.parse(localStorage.getItem('currentHRUser'));
    if (!userData) {
        const defaultUser = {
            full_name: 'أحمد محمد',
            username: 'hr_admin',
            role: 'مدير شؤون الموظفين',
            employee_id: 'HR-001',
            avatar: 'https://via.placeholder.com/50'
        };
        localStorage.setItem('currentHRUser', JSON.stringify(defaultUser));
        userData = defaultUser;
    }

    initializeUser();
    updateDashboardStats();
    loadEmployees();
    initializeCharts();
}

function updateDashboardStats() {
    updateStatsCards();
    loadRecentEmployees();
}

function updateStatsCards() {
    const totalEmployees = hrData.employees.length;
    const activeEmployees = hrData.employees.filter(e => e.status === 'نشط').length;
    const averageSalary = hrData.employees.reduce((sum, emp) => sum + emp.salary, 0) / totalEmployees;
    
    // تقديرات بسيطة
    const attendanceRate = 94; // نسبة الحضور
    const usedVacations = 42; // عدد الإجازات المستخدمة
    
    document.getElementById('om4').textContent = totalEmployees;
    document.getElementById('om7').textContent = formatCurrency(averageSalary);
    document.getElementById('om9').textContent = `${attendanceRate}%`;
    document.getElementById('om11').textContent = usedVacations;
}

function loadRecentEmployees() {
    // تم تعبئة الموظفين مباشرة في HTML
}

function initializeCharts() {
    const departmentsChartCtx = document.getElementById('om14').getContext('2d');
    const departmentsChart = new Chart(departmentsChartCtx, {
        type: 'pie',
        data: {
            labels: ['التسويق', 'المبيعات', 'التقنية', 'الموارد البشرية', 'المالية'],
            datasets: [{
                data: [25, 30, 20, 15, 10],
                backgroundColor: ['#3498db', '#e74c3c', '#f39c12', '#9b59b6', '#1abc9c']
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

    const turnoverChartCtx = document.getElementById('om15').getContext('2d');
    const turnoverChart = new Chart(turnoverChartCtx, {
        type: 'line',
        data: {
            labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
            datasets: [{
                label: 'معدل الدوران (%)',
                data: [5, 4, 6, 3, 4, 5, 7, 6, 4, 5, 3, 4],
                borderColor: '#e74c3c',
                backgroundColor: 'rgba(231, 76, 60, 0.1)',
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10
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
    } else if (tabId === 'employees') {
        loadEmployees();
    }
}

function showVacationTab(tabId) {
    document.querySelectorAll('#vacations .om47').forEach(section => {
        section.style.display = 'none';
    });
    
    document.querySelectorAll('#vacations .om46').forEach(tab => {
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
        localStorage.removeItem('currentHRUser');
        window.location.href = 'login.html';
    }
}

// دوال إدارة الموظفين
function showAddEmployeeModal() {
    document.getElementById('om62').style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function saveEmployee() {
    const name = document.getElementById('om68').value;
    const department = document.getElementById('om70').value;
    const job = document.getElementById('om71').value;
    const status = document.getElementById('om72').value;
    const hireDate = document.getElementById('om73').value;
    const salary = document.getElementById('om74').value;
    
    if (!name || !department || !job || !status || !hireDate || !salary) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }
    
    const newEmployee = {
        id: hrData.employees.length + 1,
        code: `EMP-${String(hrData.employees.length + 1).padStart(3, '0')}`,
        name: name,
        department: department,
        job: job,
        hireDate: hireDate,
        status: status,
        salary: parseInt(salary),
        email: `${name.replace(' ', '.').toLowerCase()}@company.com`,
        phone: '0550' + Math.floor(100000 + Math.random() * 900000)
    };
    
    hrData.employees.push(newEmployee);
    closeModal('om62');
    loadEmployees();
    alert('تم إضافة الموظف بنجاح');
}

function loadEmployees() {
    const employeesTable = document.getElementById('om22');
    employeesTable.innerHTML = '';
    
    hrData.employees.forEach(employee => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.code}</td>
            <td>${employee.name}</td>
            <td><span class="department-badge department-${getDepartmentCode(employee.department)}">${employee.department}</span></td>
            <td><span class="job-type">${employee.job}</span></td>
            <td>${formatDate(employee.hireDate)}</td>
            <td><span class="status-${employee.status === 'نشط' ? 'completed' : employee.status === 'تجربة' ? 'inprogress' : 'pending'}">${employee.status}</span></td>
            <td>
                <button class="o21 o37" onclick="editEmployee(${employee.id})">تعديل</button>
                <button class="o21 o37 o22" onclick="deleteEmployee(${employee.id})">حذف</button>
            </td>
        `;
        employeesTable.appendChild(row);
    });
}

function getDepartmentCode(department) {
    const departmentMap = {
        'التسويق': 'marketing',
        'المبيعات': 'sales',
        'التقنية': 'it',
        'الموارد البشرية': 'hr',
        'المالية': 'finance'
    };
    return departmentMap[department] || 'other';
}

function editEmployee(employeeId) {
    const employee = hrData.employees.find(e => e.id === employeeId);
    if (employee) {
        alert(`تعديل الموظف: ${employee.name}`);
    }
}

function deleteEmployee(employeeId) {
    if (confirm('هل أنت متأكد من حذف هذا الموظف؟')) {
        const employeeIndex = hrData.employees.findIndex(e => e.id === employeeId);
        if (employeeIndex !== -1) {
            hrData.employees.splice(employeeIndex, 1);
            loadEmployees();
            alert('تم حذف الموظف بنجاح');
        }
    }
}

function exportEmployees() {
    const csvContent = "data:text/csv;charset=utf-8," 
        + "رقم الموظف,اسم الموظف,القسم,الوظيفة,تاريخ التعيين,الحالة,الراتب\n"
        + hrData.employees.map(employee => 
            `${employee.code},${employee.name},${employee.department},${employee.job},${employee.hireDate},${employee.status},${employee.salary}`
        ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "الموظفين.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// دوال الرواتب
function openSalaryDetails(salaryId) {
    const salary = getSalaryById(salaryId);
    if (salary) {
        alert(`تفاصيل الرواتب: ${salary.name}\n\n${salary.description}\n\n${salary.details}`);
    }
}

function getSalaryById(salaryId) {
    const salaryMap = {
        'payroll': {name: 'كشوف الرواتب', description: 'إدارة كشوف رواتب جميع الموظفين', details: 'إجمالي الرواتب: 1,062,500 ر.س'},
        'benefits': {name: 'المزايا والبدلات', description: 'إدارة المزايا والبدلات للموظفين', details: 'إجمالي المزايا: 250,000 ر.س'},
        'deductions': {name: 'الاستقطاعات', description: 'إدارة استقطاعات الرواتب للموظفين', details: 'إجمالي الاستقطاعات: 95,000 ر.س'}
    };
    return salaryMap[salaryId];
}

function openSalaryPage(salaryId) {
    window.open(`salary_${salaryId}.html`, '_blank');
}

function viewSalaryReport(salaryId) {
    event.stopPropagation();
    const salary = getSalaryById(salaryId);
    alert(`كشف رواتب: ${salary.name}\n\nالكشف جاهز للتحميل.`);
}

// دوال التدريب
function openTrainingDetails(trainingId) {
    const training = getTrainingById(trainingId);
    if (training) {
        alert(`تفاصيل التدريب: ${training.name}\n\n${training.description}\n\nالمشاركون: ${training.participants} موظف\nالتكلفة: ${formatCurrency(training.cost)}`);
    }
}

function getTrainingById(trainingId) {
    const trainingMap = {
        'leadership': hrData.training[0],
        'technical': hrData.training[1]
    };
    return trainingMap[trainingId];
}

function openTrainingPage(trainingId) {
    window.open(`training_${trainingId}.html`, '_blank');
}

function viewTrainingReport(trainingId) {
    event.stopPropagation();
    const training = getTrainingById(trainingId);
    alert(`تقرير التدريب: ${training.name}\n\nالتقرير جاهز للتحميل.`);
}

// دوال الحضور والانصراف
function openAttendanceDetails(attendanceId) {
    const attendance = getAttendanceById(attendanceId);
    if (attendance) {
        alert(`تفاصيل الحضور: ${attendance.name}\n\n${attendance.description}\n\n${attendance.details}`);
    }
}

function getAttendanceById(attendanceId) {
    const attendanceMap = {
        'daily': {name: 'سجل الحضور اليومي', description: 'تسجيل ومتابعة الحضور والانصراف اليومي', details: 'نسبة الحضور: 94% - التأخيرات: 6%'},
        'monthly': {name: 'تقارير الحضور الشهرية', description: 'تقارير وإحصائيات الحضور الشهرية', details: 'آخر تقرير: ديسمبر 2023'},
        'exceptions': {name: 'إدارة الاستثناءات', description: 'إدارة استثناءات الحضور والانصراف', details: 'الاستثناءات المعلقة: 15'}
    };
    return attendanceMap[attendanceId];
}

function openAttendancePage(attendanceId) {
    window.open(`attendance_${attendanceId}.html`, '_blank');
}

function viewAttendanceReport(attendanceId) {
    event.stopPropagation();
    const attendance = getAttendanceById(attendanceId);
    alert(`تقرير الحضور: ${attendance.name}\n\nالتقرير جاهز للتحميل.`);
}

function generateAttendanceReport(attendanceId) {
    event.stopPropagation();
    const attendance = getAttendanceById(attendanceId);
    alert(`إنشاء تقرير: ${attendance.name}\n\nجاري إنشاء التقرير...`);
}

// دوال الإجازات
function viewVacationRequests(status) {
    const statusText = status === 'pending' ? 'المنتظرة' : 'المعتمدة';
    alert(`عرض طلبات الإجازة ${statusText}\n\nجاري تحميل الطلبات...`);
}

function processVacationRequests() {
    alert('معالجة طلبات الإجازة\n\nجاري فتح واجهة معالجة الطلبات...');
}

function exportVacationRequests() {
    alert('تصدير تقارير الإجازات\n\nجاري تصدير البيانات...');
}

// دوال التقارير
function viewHRReport(reportId) {
    const reportMap = {
        'employees': 'تقرير الموظفين',
        'turnover': 'تقرير الدوران الوظيفي'
    };
    alert(`عرض التقرير: ${reportMap[reportId]}\n\nالتقرير جاهز للتحميل.`);
}

function generateHRReport(reportId) {
    const reportMap = {
        'employees': 'تقرير الموظفين',
        'turnover': 'تقرير الدوران الوظيفي'
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
function loadEmployees() {
    // تم تعبئة الموظفين مباشرة في HTML
}