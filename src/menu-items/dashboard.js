// assets
import { IconSchool, IconSettings } from '@tabler/icons';

// constant
const icons = { IconSchool, IconSettings };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Rooms',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconSchool,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
