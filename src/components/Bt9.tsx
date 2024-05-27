import { EditFilled, FileTextFilled, HomeFilled, LayoutFilled, LogoutOutlined, MoonFilled, PictureFilled, RobotFilled, SettingFilled, ShoppingFilled, ToolFilled, WechatFilled } from "@ant-design/icons";


export default function Bt9() {
  return (
    <>
    Bài tập 9
    <div className="w-[300px] h-92 bg-blue-900 rounded" >
        <div className="pt-7 pl-6"><img className='w-[42px] h-[42px] rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8BTjV6RPYQOqPJ78PAQQJ_yO815BFhs2DxV7Sdlo4ubr1jf0kY4rl-O0dBeK6toHsJP8&usqp=CAU" alt="" /></div>
        <div className="pl-12 pt-12 text-white flex flex-col gap-4 ">
            <div className="flex gap-5 text-[21px]">
            <HomeFilled />
              <p>Dashboard</p></div>   

            <div className="flex gap-5 text-[21px]">
            <EditFilled />
              <p>Posts</p></div>

              <div className="flex gap-5 text-[21px]">
            <PictureFilled />
            <p>Media</p></div>

            <div className="flex gap-5 text-[21px]">
            <FileTextFilled />
            <p>Pages</p></div>

            <div className="flex gap-5 text-[21px]">
            <WechatFilled />
            <p>Comments</p></div>

            <div className="flex gap-5 text-[21px]">
            <LayoutFilled />
            <p>Appearance</p></div>

            <div className="flex gap-5 text-[21px]">
            <ShoppingFilled />
            <p>Plugins</p></div>

            <div className="flex gap-5 text-[21px]">
            <RobotFilled />
            <p>Users</p></div>

            <div className="flex gap-5 text-[21px]">
            <SettingFilled />
            <p>Settings</p></div>

            <div className="flex gap-5 text-[21px]">
            <ToolFilled />
            <p>Tools</p></div>
        </div>

        <div className="pt-[100px] pl-12 text-white">
          <div className="flex gap-6">
            <div className="flex gap-4 text-[21px] "><MoonFilled /><p>Light Mode</p></div>
            <div className="flex items-center gap-3 bg-slate-600 rounded-2xl pl-2 pr-2"><div className="rounded-full h-[15px] w-[15px] bg-gray-300"></div>on</div>
          </div>
          <div className="flex gap-5 text-[21px]"><LogoutOutlined />Logout</div>
        </div>
    </div>
    </>   
  )
}
