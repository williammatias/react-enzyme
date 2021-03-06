import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchResults from "./index";

Enzyme.configure({adapter: new Adapter()});

const mockArticles = [
    {
        webUrl: "http://google.com",
        webTitle: "This is Google"
    }
];

describe("SearchResults component", () => {
    test("renders", () => {
        const wrapper = shallow(<SearchResults articles={mockArticles}/>);

        expect(wrapper).toMatchSnapshot();
    });
    test("return the default empty array when there is no data to map through", () => {
        const wrapper = shallow(<SearchResults />);

        expect(wrapper).toMatchSnapshot();
    });
    test("doesn't break without articles", () => {
        const wrapper = shallow(<SearchResults />);

        expect(wrapper.find("li")).toHaveLength(0);
    })

    test("doesn't break with an empty array", () => {
        const wrapper = shallow(<SearchResults articles={[]}/>);
        expect(wrapper.find("li")).toHaveLength(0);
    })
});