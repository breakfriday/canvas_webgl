import React from 'react';
import createRenderer from 'react-reconciler';

const TYPES = {
  CLIPPING_RECTANGLE: 'ClippingRectangle',
  GROUP: 'Group',
  SHAPE: 'Shape',
  TEXT: 'Text',
};

const hostConfig = {
  // 获取根容器的上下文
  createInstance(type, props, internalInstanceHandle) {
    let instance;

    switch (type) {
      case TYPES.CLIPPING_RECTANGLE:
        instance = Mode.ClippingRectangle();
        instance._applyProps = applyClippingRectangleProps;
        break;
      case TYPES.GROUP:
        instance = Mode.Group();
        instance._applyProps = applyGroupProps;
        break;
      case TYPES.SHAPE:
        instance = Mode.Shape();
        instance._applyProps = applyShapeProps;
        break;
      case TYPES.TEXT:
        instance = Mode.Text(
          props.children,
          props.font,
          props.alignment,
          props.path,
        );
        instance._applyProps = applyTextProps;
        break;
      default: '';
    }

    invariant(instance, 'ReactART does not support the type "%s"', type);

    instance._applyProps(instance, props);

    return instance;
  },

};
const CanvasRenderer = createRenderer({
  // 创建实例，将一个元素添加到根容器中
  createInstance(type: string, props: any, rootContainerInstance: any, hostContext: any) {
    const element = document.createElement(type); // 创建元素
    Object.assign(element, props); // 将属性赋给元素
    rootContainerInstance.appendChild(element); // 将元素添加到根容器中
    return element;
  },

  // 更新实例，更新元素的属性
  updateInstance(instance, type, oldProps, newProps) {
    Object.assign(instance, newProps);
  },

  // 将子元素添加到父元素中
  appendInitialChild(parentInstance: any, child) {
    parentInstance.appendChild(child);
  },

  // 确定是否需要初始化该实例的子元素
  finalizeInitialChildren(instance, type, props) {
    return false;
  },

  // 获取根容器的上下文
  getRootHostContext() {
    return {};
  },

  // 获取子容器的上下文
  getChildHostContext() {
    return {};
  },

  // 将子元素添加到容器中
  appendChildToContainer(container: any, child) {
    container.appendChild(child);
  },

  // 从容器中移除子元素
  removeChildFromContainer(container: any, child) {
    container.removeChild(child);
  },
});


export default CanvasRenderer;
