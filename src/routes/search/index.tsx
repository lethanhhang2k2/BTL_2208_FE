import React from "react";
import AuthLayout from "@layouts/AuthLayout"
import Feed from "@components/Feed"
import User from "@components/User"
import { UserExample, AvatarSize } from "@AppTypes/user";
import QuickRedirect from "@components/QuickRedirect";
import { MotelProperty, MotelExampleList } from "@AppTypes/motel"
import TagSearch from "./components/tag_search";
import IconButton from "@components/IconButton";
import Icons, { IconName } from "@components/Icons";


const feeds: MotelProperty[] = MotelExampleList;

const Districts = [
    "Thanh Xuân",
    "Cầu Giấy",
    "Ba Đình",
    "Hai Bà Trưng",
];

interface IState {
    isTypingFilterAddress: boolean;
    addressFilter: string[];
    addressTyping: string;
    priceFilter: {
        title: string;
        isCheck: boolean;
    }[],
    keyword: string;
}
export default class SearchPage extends React.Component<{}, IState> {
    constructor(prop: any) {
        super(prop);
        this.state = {
            keyword: "",
            addressTyping: "",
            isTypingFilterAddress: false,
            addressFilter: [],
            priceFilter: [
                {
                    title: "Dưới 4tr",
                    isCheck: false
                },
                {
                    title: "Từ 2 - 4tr",
                    isCheck: false
                },
                {
                    title: "Trên 4tr",
                    isCheck: false
                }
            ]
        }
    }
    componentDidMount() {
        var url = new URL(window.location.href);
        var q = (url.searchParams.get("q")) ? url.searchParams.get("q") : "";
        this.setState({ keyword: q as string });
    }

    find():void {
        console.log("find");
    }

    render() {
        return (
            <AuthLayout>
                <div className="pt-16 flex flex-col items-center">
                    <div className="text-5xl font-bold text-gray-600 mb-14">{"Kết quả tìm kiếm của " + this.state.keyword} </div>
                    <div className="max-w-[950px] w-full rounded-lg bg-indigo-50 mb-5 p-4">
                        <div className="flex mb-3 items-center">
                            <p className="font-semibold mr-3 min-w-fit">Xem kết quả tại</p>
                            {this.state.addressFilter.map((item) => <TagSearch
                                key={item}
                                content={item} isChecked
                                onClick={() => {
                                    this.setState({
                                        addressFilter: [...this.state.addressFilter.filter(item_ => item_ != item)]
                                    })
                                }} />)}
                            <div className="relative">
                                <div className="flex relative z-50">
                                    <IconButton onClick={() => { this.setState({ isTypingFilterAddress: false }) }} className={(this.state.isTypingFilterAddress ? "" : "hidden") + " mx-1"}>
                                        <Icons iconName={IconName.CrossCircle} stroke="red" />
                                    </IconButton>
                                    <IconButton onClick={() => { this.setState({ isTypingFilterAddress: true }) }} className="mx-1">
                                        <Icons iconName={IconName.PlusCircle} />
                                    </IconButton>
                                </div>
                                <div className={"flex flex-wrap " + (this.state.isTypingFilterAddress ? "absolute -top-3 left-0" : "hidden opacity-0")}>
                                    <div className="bg-white rounded-lg p-2">
                                        <input
                                            type="text"
                                            placeholder="Địa chỉ"
                                            className="bg-transparent outline-none m-1 pl-14"
                                            value={this.state.addressTyping}
                                            onChange={(event) => { this.setState({ addressTyping: event.target.value }) }} />
                                        <div className="max-h-20 overflow-auto">
                                            {Districts.filter((item) => {
                                                return this.state.addressFilter.indexOf(item) == -1 && item.toLowerCase().includes(this.state.addressTyping);
                                            }).map(item =>
                                                <p
                                                    key={item}
                                                    onClick={() => {
                                                        this.setState({
                                                            addressFilter: (this.state.addressFilter.indexOf(item) != -1)
                                                                ? [...this.state.addressFilter]
                                                                : [...this.state.addressFilter, item]
                                                        })
                                                    }}
                                                    className="select-none hover:bg-gray-50 p-1 cursor-pointer rounded-md hover:font-semibold">
                                                    {item}
                                                </p>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <p className="font-semibold mr-3 min-w-fit">Giá tiền</p>
                            <div className="flex flex-wrap">
                                {this.state.priceFilter.map((item, index) =>
                                    <TagSearch
                                        key={index}
                                        content={item.title}
                                        isChecked={item.isCheck}
                                        onClick={
                                            () => {
                                                var tmp = this.state.priceFilter;
                                                tmp[index].isCheck = !tmp[index].isCheck;
                                                this.setState({ priceFilter: tmp })
                                            }} />)
                                }
                            </div>
                        </div>
                        <button
                            className="rounded-xl bg-blue-200 m-1 mt-4 px-4 w-fit py-1 font-semibold hover:bg-blue-300"
                            onClick={this.find.bind(this)}>
                            Lọc
                        </button>
                    </div>
                    <div className="max-w-[950px] w-full flex flex-col lg:flex-row justify-center items-center lg:items-start relative">
                        <div className="mr-0 max-w-[596px] lg:mr-[32px] w-full">
                            <div className="font-semibold text-gray-600 text-xl mb-8">
                                Bài viết liên quan
                            </div>
                            <div>
                                {feeds.map(feed => {
                                    return (
                                        <Feed
                                            key={feed.id}
                                            data={feed}
                                        />
                                    )
                                })}
                            </div>
                        </div>

                        <div className="w-full max-w-[350px]">
                            <div className="font-semibold text-gray-600 text-xl mb-8">
                                Tài khoản liên quan
                            </div>

                            <a href="#" className="mb-[20px] bg-white rounded-lg border-2 border-gray-200 p-2 py-4 cursor-pointer block">
                                <User user={UserExample} sizeAvt={AvatarSize.Medium} showName={true} twoLine={true} />
                            </a>
                            <a href="#" className="mb-[20px] bg-white rounded-lg border-2 border-gray-200 p-2 py-4 cursor-pointer block">
                                <User user={UserExample} sizeAvt={AvatarSize.Medium} showName={true} twoLine={true} />
                            </a>
                        </div>
                    </div>
                    <QuickRedirect />
                </div>
            </AuthLayout >
        )
    }
} 