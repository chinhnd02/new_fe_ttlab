import dashboardRouters from '@/features/dashboard/routers';
import authRouters from '../../features/auth/routers';
import homeRouters from '../../features/home/routers';

export const routers = [...authRouters, ...dashboardRouters, ...homeRouters];
