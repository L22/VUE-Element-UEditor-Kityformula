import Vue from 'vue'

//elementUI  按需引入
import {
  Form,
  FormItem,
  Input,
  Button,
  Checkbox,
  Message,
  MessageBox,
  Container,
  Header,
  Main,
  Menu,
  MenuItem,
  Collapse,
  CollapseItem,
  Select,
  Option,
  CheckboxGroup,
  Tree,
  Radio,
  RadioGroup,
  Icon,
  Table,
  TableColumn,
  Popover,
  Tag,
  Pagination,
  Progress,
  Dialog,
  Upload,
  RadioButton,
  Aside,
  DatePicker,
  Cascader,
  Scrollbar,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Tooltip,
  carousel,
  CarouselItem,
  Row,
  Col,
  BreadcrumbItem,
  Breadcrumb,
  Switch,
  InfiniteScroll,
  Tabs,
  TabPane,
  Rate
} from "element-ui"
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Tree)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Icon)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Popover)
Vue.use(Tag)
Vue.use(Pagination)
Vue.use(Progress)
Vue.use(Dialog)
Vue.use(Upload)
Vue.use(RadioButton)
Vue.use(Aside)
Vue.use(DatePicker)
Vue.use(Cascader)
Vue.use(Scrollbar)
Vue.use(Tooltip)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(carousel)
Vue.use(CarouselItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)
Vue.use(Switch)
Vue.use(InfiniteScroll)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Rate)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;

//表单验证
import validate from '../utils/validate';
Vue.use(validate);