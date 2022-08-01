//Layouts
import { HeaderOnly } from '../Layout';

//pages
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';

// publicRoutes: Không cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null}
];

// privateRoutes: Phải đăng nhập mới xem được, Nếu không đăng nhập mà bấm vào thì nó sẽ chuyển sang trang log in
const privateRoutes = [];

export { publicRoutes, privateRoutes };
