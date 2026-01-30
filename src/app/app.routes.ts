import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Gallery } from './pages/gallery/gallery';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home | ECAI'
    },
    {
        path: 'about-us',
        component: About,
        title: 'About Us | ECAI'
    },
    {
        path: 'annual-conference',
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/conference/conference').then(m => m.Conference),
                title: 'Annual Conference | ECAI'
            },
            {
                path: 'delhi-meet-2024',
                loadComponent: () => import('./pages/conference/delhi-meet-2024/delhi-meet-2024').then(m => m.DelhiMeet2024),
                title: 'Delhi Meet 2024 | ECAI'
            },
            {
                path: 'bangalore-meet-2025',
                loadComponent: () => import('./pages/conference/bangalore-meet-2025/bangalore-meet-2025').then(m => m.BangaloreMeet2025),
                title: 'Bangalore Meet 2025 | ECAI'
            },
            {
                path: 'jammu-meet-2026',
                loadComponent: () => import('./pages/conference/jammu-meet-2026/jammu-meet-2026').then(m => m.JammuMeet2026),
                title: 'Jammu Meet 2026 | ECAI'
            }
        ]
    },
    {
        path: 'membership',
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/membership/membership').then(m => m.Membership),
                title: 'Membership | ECAI'
            },
            {
                path: 'criteria',
                loadComponent: () => import('./pages/membership/criteria/criteria').then(m => m.Criteria),
                title: 'Membership Criteria | ECAI'
            },
            {
                path: 'apply',
                loadComponent: () => import('./pages/membership/apply/apply').then(m => m.Apply),
                title: 'Apply Membership | ECAI'
            }
        ]
    },
    {
        path: 'edu-carnival-expo',
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/expo/expo').then(m => m.Expo),
                title: 'EDU Carnival Expo | ECAI'
            },
            {
                path: 'fair-details',
                loadComponent: () => import('./pages/expo/details/details').then(m => m.Details),
                title: 'Education Fair Details | ECAI'
            },
            {
                path: 'exhibitor-registration',
                loadComponent: () => import('./pages/expo/registration/registration').then(m => m.Registration),
                title: 'Exhibitor Registration | ECAI'
            }
        ]
    },
    {
        path: 'gallery',
        component: Gallery,
        title: 'Gallery | ECAI'
    },
    {
        path: 'contact-us',
        component: Contact,
        title: 'Contact Us | ECAI'
    },
    { path: '**', redirectTo: '' }
];
