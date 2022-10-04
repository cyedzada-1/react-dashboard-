import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import PersonIcon from '@mui/icons-material/Person';
import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const menuItems = [
  {
    heading: 'General',
    items: [
      {
        name: 'Booking Management',
        icon: AddCircleOutlineIcon,
        link: '/booking',
        items: [
          {
            name: 'New Booking ',
            link: '/booking/new-booking'
          },
          {
            name: 'Refund',
            link: '/booking/refund'
          },
          {
            name: 'reschedule',
            link: '/booking/reschedule'
          },
          {
            name: 'Booking History',
            link: '/booking/booking-history'
          }
        ]
      },

      {
        name: 'Client Management',
        icon: PersonIcon,
        link: '/client',
        items: [
          {
            name: 'Register client',
            link: '/client/register-client'
          },
          {
            name: 'View Client',
            link: '/client/view-client'
          },
          {
            name: 'Modify Client',
            link: '/client/modify-client'
          },
          {
            name: 'Search Client',
            link: '/client/search-client'
          },
          {
            name: 'Client Queries',
            link: '/client/client-queries'
          },
          {
            name: 'Client Bookings',
            link: '/client/client-bookings'
          },
          {
            name: 'Supplier Credentials',
            link: '/client/supplier',
            items: [
              {
                name: 'Basic',
                link: '/client/supplier/basic'
              }
            ]
          }
        ]
      },
      {
        name: 'Administration',
        icon: AccountBalanceIcon,
        items: [
          {
            name: 'Company Details',
            items: [
              {
                name: 'Basic',
                link: '/account'
              }
            ]
          },
          {
            name: 'Staff Management',
            link: '/staff-management',
            items: [
              {
                name: 'Register Staff',
                link: '/staff-management/register-staff'
              },
              {
                name: 'Search Staff',
                link: '/staff-management/search-staff'
              },
              {
                name: 'Manage Roles',
                link: '/staff-management/manage-roles'
              },
              {
                name: 'Manage Teams',
                link: '/staff-management/manage-teams'
              },
              {
                name: 'Manage Deparments',
                link: '/staff-management/manage-departments'
              },
              {
                name: 'Manage Designation ',
                link: '/staff-management/manage-designation'
              },
              {
                name: 'Others',
                link: '/staff-management/others'
              }
            ]
          },
          {
            name: 'Supplier Credentials',
            items: [
              {
                name: 'Basic',
                link: '/account/register-basic'
              }
            ]
          }
        ]
      },
      {
        name: 'Finance',
        icon: VpnKeyTwoToneIcon,
        link: '/finance',
        items: [
          {
            name: 'inventory',
            link: '/finace/inventory'
          },
          {
            name: 'Expenses',
            link: '/finace/inventory'
          },
          {
            name: 'Salaries',
            link: '/finace/inventory'
          }
        ]
      }
    ]
  },
  {
    heading: 'Admin Panels ',
    items: [
      {
        name: 'Dashboards',
        icon: SmartToyTwoToneIcon,
        link: '/accent-sidebar/dashboards',
        items: [
          {
            name: 'Reports',
            link: 'dashboards/reports',
            badge: '',
            badgeTooltip: 'Reports Dashboard - version 3.0'
          },
          {
            name: 'Expenses',
            link: 'dashboards/expenses',
            badge: '',
            badgeTooltip: 'Expenses Dashboard - version 3.0'
          },
          {
            name: 'Products',
            link: 'dashboards/products',
            badge: '',
            badgeTooltip: 'Products Dashboard - version 3.0'
          },
          {
            name: 'Statistics',
            link: 'dashboards/statistics',
            badge: '',
            badgeTooltip: 'Statistics Dashboard - version 3.0'
          },
          {
            name: 'Automation',
            link: 'dashboards/automation'
          },
          {
            name: 'Analytics',
            link: 'dashboards/analytics'
          },
          {
            name: 'Banking',
            link: 'dashboards/banking'
          },
          {
            name: 'Commerce',
            link: 'dashboards/commerce'
          },
          {
            name: 'Crypto',
            link: 'dashboards/crypto'
          },
          {
            name: 'Finance',
            link: 'dashboards/finance'
          },
          {
            name: 'Fitness',
            link: 'dashboards/fitness'
          },
          {
            name: 'Healthcare',
            link: '/accent-sidebar/dashboards/healthcare',
            items: [
              {
                name: 'Doctors',
                link: 'dashboards/healthcare/doctor'
              },
              {
                name: 'Hospital',
                link: 'dashboards/healthcare/hospital'
              }
            ]
          },
          {
            name: 'Helpdesk',
            link: 'dashboards/helpdesk'
          },
          {
            name: 'Learning',
            link: 'dashboards/learning'
          },
          {
            name: 'Monitoring',
            link: 'dashboards/monitoring'
          },
          {
            name: 'Tasks',
            link: 'dashboards/tasks'
          }
        ]
      }
    ]
  }
];

export default menuItems;
