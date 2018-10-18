import React from "react";
import Enzyme, {shallow, mount} from "enzyme";
import App from "./index";
import Adapter from "enzyme-adapter-react-16";
import Search from "../../component/Search/index";

Enzyme.configure({adapter: new Adapter()});

jest.mock("../../api/");

describe("Search component", () => {
    test("renders", () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.exists()).toBe(true);
    });
    test("should render Search component", () => {
        const wrapper = mount(<App/>);

        expect(wrapper.children(Search).length).toEqual(0);
    });

    test("should update articles state", () => {
        const wrapper = mount(<App/>);

        expect(wrapper.state().articles).toEqual([]);

        const { performSearch } = wrapper.find(Search).props();

        return performSearch().then(() => {
            expect(wrapper.state().articles).toHaveLength(10);
        })
    })
});