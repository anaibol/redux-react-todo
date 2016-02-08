import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TodoItem from '../app/components/TodoItem';
import TodoList from '../app/components/TodoList';

describe('<TodoApp />', () => {

    it('should render three <TodoItem /> components', () => {
        const wrapper = shallow(<TodoItem />)
        console.log(wrapper.find(TodoItem))
        //expect(wrapper.find(TodoItem)).to.have.length(1)
    })

    //it('should render an `.icon-star`', () => {
    //    const wrapper = shallow(<MyComponent />);
    //    expect(wrapper.find('.icon-star')).to.have.length(1);
    //});
    //
    //it('should render children when passed in', () => {
    //    const wrapper = shallow(
    //        <MyComponent>
    //            <div className="unique" />
    //        </MyComponent>
    //    );
    //    expect(wrapper.contains(<div className="unique" />)).to.be.true;
    //});
    //
    //it('simulates click events', () => {
    //    const onButtonClick = sinon.spy();
    //    const wrapper = shallow(
    //        <Foo onButtonClick={onButtonClick} />
    //    );
    //    wrapper.find('button').simulate('click');
    //    expect(onButtonClick.calledOnce).to.be.true;
    //});

})



//import {
//    describeWithDOM,
//    mount,
//    spyLifecycle,
//} from 'enzyme';
//
//describeWithDOM('<TodoApp />', () => {
//
//    //it('calls componentDidMount', () => {
//    //    spyLifecycle(Foo);
//    //    const wrapper = mount(<Foo />);
//    //    expect(Foo.prototype.componentDidMount.calledOnce).to.be.true;
//    //});
//    //
//    //it('allows us to set props', () => {
//    //    const wrapper = mount(<Foo bar="baz" />);
//    //    expect(wrapper.props().bar).to.equal("baz");
//    //    wrapper.setProps({ bar: "foo" });
//    //    expect(wrapper.props().bar).to.equal("foo");
//    //});
//
//    it('simulates click events', () => {
//        const onButtonClick = sinon.spy();
//        const wrapper = mount(
//            <Foo onButtonClick={onButtonClick} />
//        );
//        wrapper.find('button').simulate('click');
//        expect(onButtonClick.calledOnce).to.be.true;
//    });
//
//});