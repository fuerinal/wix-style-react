/* eslint-disable */
/* tslint:disable */
/*
 * DO NOT EDIT THIS FILE!
 * YOUR CHANGES WILL BE OVERWRITTEN!
 * FILE IS BASED ON .wuf/testkits/vanilla.template.ejs
 * AND GENERATED BY `wuf export-teskits`
 */
import {
  testkitFactoryCreator,
  uniTestkitFactoryCreator,
} from 'wix-ui-test-utils/vanilla';

import tooltipDriverFactory from '../src/Tooltip/Tooltip.driver';
import { tooltipDriverFactory as tooltipNextDriverFactory } from '../src/Tooltip/TooltipNext/Tooltip.uni.driver';

export const tooltipTestkitFactory = testkitFactoryCreator(
  tooltipDriverFactory,
);

export const TooltipTestkit = uniTestkitFactoryCreator(
  tooltipNextDriverFactory,
);

const load = module => {
  const MODULE_META_KEYS = ['__esModule'];

  const moduleFields = Object.keys(module).reduce((total, key) => {
    if (!MODULE_META_KEYS.includes(key)) {
      return total.concat(module[key]);
    }
    return total;
  }, []);

  let defaultOrFirstExport;
  if (module.default) {
    defaultOrFirstExport = module.default;
  } else if (moduleFields.length === 1) {
    defaultOrFirstExport = moduleFields[0];
  } else {
    defaultOrFirstExport = module;
  }
  return defaultOrFirstExport;
};

export const accordionTestkitFactory = uniTestkitFactoryCreator(load(require('../src/Accordion/Accordion.uni.driver')));
export const addItemTestkitFactory = testkitFactoryCreator(load(require('../src/AddItem/AddItem.driver')));
export const autoCompleteTestkitFactory = testkitFactoryCreator(load(require('../src/AutoComplete/AutoComplete.driver')));
export const autoCompleteCompositeTestkitFactory = testkitFactoryCreator(load(require('../src/AutoCompleteComposite/AutoCompleteComposite.driver')));
export const avatarTestkitFactory = uniTestkitFactoryCreator(load(require('../src/Avatar/Avatar.uni.driver')));
export const badgeTestkitFactory = testkitFactoryCreator(load(require('../src/Badge/Badge.driver')));
export const badgeSelectTestkitFactory = testkitFactoryCreator(load(require('../src/BadgeSelect/BadgeSelect.driver')));
export const boxTestkitFactory = uniTestkitFactoryCreator(load(require('../src/Box/Box.uni.driver')));
export const breadcrumbsTestkitFactory = testkitFactoryCreator(load(require('../src/Breadcrumbs/Breadcrumbs.driver')));
export const buttonTestkitFactory = uniTestkitFactoryCreator(load(require('../src/Button/Button.uni.driver')));
export const calendarTestkitFactory = testkitFactoryCreator(load(require('../src/Calendar/Calendar.driver')));
export const calendarPanelTestkitFactory = testkitFactoryCreator(load(require('../src/CalendarPanel/CalendarPanel.driver')));
export const calendarPanelFooterTestkitFactory = uniTestkitFactoryCreator(load(require('../src/CalendarPanelFooter/CalendarPanelFooter.uni.driver')));
export const cardGalleryItemTestkitFactory = uniTestkitFactoryCreator(load(require('../src/CardGalleryItem/CardGalleryItem.uni.driver')));
export const carouselTestkitFactory = testkitFactoryCreator(load(require('../src/Carousel/Carousel.driver')));
export const checkboxTestkitFactory = testkitFactoryCreator(load(require('../src/Checkbox/Checkbox.driver')));
export const circularProgressBarTestkitFactory = testkitFactoryCreator(load(require('../src/CircularProgressBar/CircularProgressBar.driver')));
export const closeButtonTestkitFactory = uniTestkitFactoryCreator(load(require('../src/CloseButton/CloseButton.uni.driver')));
export const colorInputTestkitFactory = uniTestkitFactoryCreator(load(require('../src/ColorInput/ColorInput.uni.driver')));
export const colorPickerTestkitFactory = testkitFactoryCreator(load(require('../src/ColorPicker/ColorPicker.driver')));
export const contactItemBuilderTestkitFactory = testkitFactoryCreator(load(require('../src/ContactItemBuilder/ContactItemBuilder.driver')));
export const counterBadgeTestkitFactory = testkitFactoryCreator(load(require('../src/CounterBadge/CounterBadge.driver')));
export const dataTableTestkitFactory = testkitFactoryCreator(load(require('../src/DataTable/DataTable.driver')));
export const dateInputTestkitFactory = uniTestkitFactoryCreator(load(require('../src/DateInput/DateInput.uni.driver')));
export const datePickerTestkitFactory = testkitFactoryCreator(load(require('../src/DatePicker/DatePicker.driver')));
export const dropdownTestkitFactory = testkitFactoryCreator(load(require('../src/Dropdown/Dropdown.driver')));
export const dropdownBaseTestkitFactory = uniTestkitFactoryCreator(load(require('../src/DropdownBase/DropdownBase.uni.driver')));
export const dropdownLayoutTestkitFactory = testkitFactoryCreator(load(require('../src/DropdownLayout/DropdownLayout.driver')));
export const editableSelectorTestkitFactory = testkitFactoryCreator(load(require('../src/EditableSelector/EditableSelector.driver')));
export const editableTitleTestkitFactory = uniTestkitFactoryCreator(load(require('../src/EditableTitle/EditableTitle.uni.driver')));
export const emptyStateTestkitFactory = testkitFactoryCreator(load(require('../src/EmptyState/EmptyState.driver')));
export const errorIndicatorTestkitFactory = uniTestkitFactoryCreator(load(require('../src/ErrorIndicator/ErrorIndicator.uni.driver')));
export const filePickerTestkitFactory = testkitFactoryCreator(load(require('../src/FilePicker/FilePicker.driver')));
export const floatingHelperTestkitFactory = testkitFactoryCreator(load(require('../src/FloatingHelper/FloatingHelper.driver')));
export const floatingNotificationTestkitFactory = uniTestkitFactoryCreator(load(require('../src/FloatingNotification/FloatingNotification.uni.driver')));
export const formFieldTestkitFactory = testkitFactoryCreator(load(require('../src/FormField/FormField.driver')));
export const genericModalLayoutTestkitFactory = testkitFactoryCreator(load(require('../src/GenericModalLayout/GenericModalLayout.driver')));
export const googleAddressInputWithLabelTestkitFactory = testkitFactoryCreator(load(require('../src/GoogleAddressInputWithLabel/GoogleAddressInputWithLabel.driver')));
export const googlePreviewTestkitFactory = uniTestkitFactoryCreator(load(require('../src/GooglePreview/GooglePreview.uni.driver')));
export const headingTestkitFactory = testkitFactoryCreator(load(require('../src/Heading/Heading.driver')));
export const highlighterTestkitFactory = testkitFactoryCreator(load(require('../src/Highlighter/Highlighter.driver')));
export const iconButtonTestkitFactory = uniTestkitFactoryCreator(load(require('../src/IconButton/IconButton.uni.driver')));
export const toggleButtonTestkitFactory = uniTestkitFactoryCreator(load(require('../src/ToggleButton/ToggleButton.uni.driver')));
export const imageViewerTestkitFactory = testkitFactoryCreator(load(require('../src/ImageViewer/ImageViewer.driver')));
export const inputTestkitFactory = testkitFactoryCreator(load(require('../src/Input/Input.driver')));
export const inputAreaTestkitFactory = testkitFactoryCreator(load(require('../src/InputArea/InputArea.driver')));
export const inputWithOptionsTestkitFactory = testkitFactoryCreator(load(require('../src/InputWithOptions/InputWithOptions.driver')));
export const labelTestkitFactory = testkitFactoryCreator(load(require('../src/Label/Label.driver')));
export const linearProgressBarTestkitFactory = testkitFactoryCreator(load(require('../src/LinearProgressBar/LinearProgressBar.driver')));
export const listItemActionTestkitFactory = uniTestkitFactoryCreator(load(require('../src/ListItemAction/ListItemAction.uni.driver')));
export const loaderTestkitFactory = testkitFactoryCreator(load(require('../src/Loader/Loader.driver')));
export const modalTestkitFactory = testkitFactoryCreator(load(require('../src/Modal/Modal.driver')));
export const modalSelectorLayoutTestkitFactory = testkitFactoryCreator(load(require('../src/ModalSelectorLayout/ModalSelectorLayout.driver')));
export const multiSelectTestkitFactory = testkitFactoryCreator(load(require('../src/MultiSelect/MultiSelect.driver')));
export const multiSelectCheckboxTestkitFactory = testkitFactoryCreator(load(require('../src/MultiSelectCheckbox/MultiSelectCheckbox.driver')));
export const multiSelectCompositeTestkitFactory = testkitFactoryCreator(load(require('../src/MultiSelectComposite/MultiSelectComposite.driver')));
export const nestableListTestkitFactory = testkitFactoryCreator(load(require('../src/NestableList/NestableList.driver')));
export const noBorderInputTestkitFactory = testkitFactoryCreator(load(require('../src/NoBorderInput/NoBorderInput.driver')));
export const notificationTestkitFactory = testkitFactoryCreator(load(require('../src/Notification/Notification.driver')));
export const numberInputTestkitFactory = uniTestkitFactoryCreator(load(require('../src/NumberInput/NumberInput.uni.driver')));
export const pageTestkitFactory = testkitFactoryCreator(load(require('../src/Page/Page.driver')));
export const pageHeaderTestkitFactory = testkitFactoryCreator(load(require('../src/PageHeader/PageHeader.driver')));
export const popoverTestkitFactory = testkitFactoryCreator(load(require('../src/Popover/Popover.driver')));
export const popoverMenuTestkitFactory = testkitFactoryCreator(load(require('../src/PopoverMenu/PopoverMenu.driver')));
export const proportionTestkitFactory = uniTestkitFactoryCreator(load(require('../src/Proportion/Proportion.uni.driver')));
export const radioGroupTestkitFactory = testkitFactoryCreator(load(require('../src/RadioGroup/RadioGroup.driver')));
export const rangeTestkitFactory = testkitFactoryCreator(load(require('../src/Range/Range.driver')));
export const richTextInputAreaTestkitFactory = uniTestkitFactoryCreator(load(require('../src/RichTextInputArea/RichTextInputArea.uni.driver')));
export const searchTestkitFactory = testkitFactoryCreator(load(require('../src/Search/Search.driver')));
export const sectionHelperTestkitFactory = testkitFactoryCreator(load(require('../src/SectionHelper/SectionHelper.driver')));
export const segmentedToggleTestkitFactory = uniTestkitFactoryCreator(load(require('../src/SegmentedToggle/SegmentedToggle.uni.driver')));
export const selectorTestkitFactory = testkitFactoryCreator(load(require('../src/Selector/Selector.driver')));
export const sidebarTestkitFactory = uniTestkitFactoryCreator(load(require('../src/Sidebar/Sidebar.uni.driver')));
export const sidebarSectionTitleTestkitFactory = uniTestkitFactoryCreator(load(require('../src/SidebarSectionTitle/SidebarSectionTitle.uni.driver')));
export const skeletonTestkitFactory = testkitFactoryCreator(load(require('../src/Skeleton/Skeleton.driver')));
export const sliderTestkitFactory = testkitFactoryCreator(load(require('../src/Slider/Slider.driver')));
export const socialPreviewTestkitFactory = uniTestkitFactoryCreator(load(require('../src/SocialPreview/SocialPreview.uni.driver')));
export const sortableListTestkitFactory = testkitFactoryCreator(load(require('../src/SortableList/SortableList.driver')));
export const statsWidgetTestkitFactory = testkitFactoryCreator(load(require('../src/StatsWidget/StatsWidget.driver')));
export const stepperTestkitFactory = uniTestkitFactoryCreator(load(require('../src/Stepper/Stepper.uni.driver')));
export const swatchesTestkitFactory = uniTestkitFactoryCreator(load(require('../src/Swatches/Swatches.uni.driver')));
export const tableTestkitFactory = testkitFactoryCreator(load(require('../src/Table/Table.driver')));
export const tableActionCellTestkitFactory = testkitFactoryCreator(load(require('../src/TableActionCell/TableActionCell.driver')));
export const tabsTestkitFactory = testkitFactoryCreator(load(require('../src/Tabs/Tabs.driver')));
export const tagTestkitFactory = testkitFactoryCreator(load(require('../src/Tag/Tag.driver')));
export const textTestkitFactory = testkitFactoryCreator(load(require('../src/Text/Text.driver')));
export const textButtonTestkitFactory = uniTestkitFactoryCreator(load(require('../src/TextButton/TextButton.uni.driver')));
export const thumbnailTestkitFactory = uniTestkitFactoryCreator(load(require('../src/Thumbnail/Thumbnail.uni.driver')));
export const timeInputTestkitFactory = testkitFactoryCreator(load(require('../src/TimeInput/TimeInput.driver')));
export const toggleSwitchTestkitFactory = testkitFactoryCreator(load(require('../src/ToggleSwitch/ToggleSwitch.driver')));
export const sidebarSectionItemTestkitFactory = uniTestkitFactoryCreator(load(require('../src/SidebarSectionItem/SidebarSectionItem.uni.driver')));
export const sidebarDividerTestkitFactory = uniTestkitFactoryCreator(load(require('../src/SidebarDivider/SidebarDivider.uni.driver')));
export const sidebarBackButtonTestkitFactory = uniTestkitFactoryCreator(load(require('../src/SidebarBackButton/SidebarBackButton.uni.driver')));
export const sidebarHeaderTestkitFactory = uniTestkitFactoryCreator(load(require('../src/SidebarHeader/SidebarHeader.uni.driver')));
export const modalPreviewLayoutTestkitFactory = uniTestkitFactoryCreator(load(require('../src/ModalPreviewLayout/ModalPreviewLayout.uni.driver')));
export const statisticsWidgetTestkitFactory = uniTestkitFactoryCreator(load(require('../src/StatisticsWidget/StatisticsWidget.uni.driver')));
export const composerHeaderTestkitFactory = uniTestkitFactoryCreator(load(require('../src/ComposerHeader/ComposerHeader.uni.driver')));
export const fillPreviewTestkitFactory = uniTestkitFactoryCreator(load(require('../src/FillPreview/FillPreview.uni.driver')));
export const fillButtonTestkitFactory = uniTestkitFactoryCreator(load(require('../src/FillButton/FillButton.uni.driver')));
export const barChartTestkitFactory = uniTestkitFactoryCreator(load(require('../src/BarChart/BarChart.uni.driver')));
export const inputWithLabelTestkitFactory = uniTestkitFactoryCreator(load(require('../src/InputWithLabel/InputWithLabel.uni.driver')));
export const autoCompleteWithLabelTestkitFactory = uniTestkitFactoryCreator(load(require('../src/AutoCompleteWithLabel/AutoCompleteWithLabel.uni.driver')));
export const dividerTestkitFactory = uniTestkitFactoryCreator(load(require('../src/Divider/Divider.uni.driver')));
export const labelledElementTestkitFactory = uniTestkitFactoryCreator(load(require('../src/LabelledElement/LabelledElement.uni.driver')));
export const previewWidgetTestkitFactory = uniTestkitFactoryCreator(load(require('../src/PreviewWidget/PreviewWidget.uni.driver')));
export const modalMobileLayoutTestkitFactory = uniTestkitFactoryCreator(load(require('../src/ModalMobileLayout/ModalMobileLayout.uni.driver')));
export const mediaOverlayTestkitFactory = uniTestkitFactoryCreator(load(require('../src/MediaOverlay/MediaOverlay.uni.driver')));
export const infoIconTestkitFactory = uniTestkitFactoryCreator(load(require('../src/InfoIcon/InfoIcon.uni.driver')));
export const socialButtonTestkitFactory = uniTestkitFactoryCreator(load(require('../src/SocialButton/SocialButton.uni.driver')));
export const verticalTabsTestkitFactory = uniTestkitFactoryCreator(load(require('../src/VerticalTabs/VerticalTabs.uni.driver')));
export const verticalTabsItemTestkitFactory = uniTestkitFactoryCreator(load(require('../src/VerticalTabsItem/VerticalTabsItem.uni.driver')));
export const mobilePreviewWidgetTestkitFactory = uniTestkitFactoryCreator(load(require('../src/MobilePreviewWidget/MobilePreviewWidget.uni.driver')));
export const listItemSectionTestkitFactory = uniTestkitFactoryCreator(load(require('../src/ListItemSection/ListItemSection.uni.driver')));
export const browserPreviewWidgetTestkitFactory = uniTestkitFactoryCreator(load(require('../src/BrowserPreviewWidget/BrowserPreviewWidget.uni.driver')));
export const listItemSelectTestkitFactory = uniTestkitFactoryCreator(load(require('../src/ListItemSelect/ListItemSelect.uni.driver')));
export const timeTableTestkitFactory = uniTestkitFactoryCreator(load(require('../src/TimeTable/TimeTable.uni.driver')));
export const marketingLayoutTestkitFactory = uniTestkitFactoryCreator(load(require('../src/MarketingLayout/MarketingLayout.uni.driver')));
export const paletteTestkitFactory = uniTestkitFactoryCreator(load(require('../src/Palette/Palette.uni.driver')));
export const warningIndicatorTestkitFactory = uniTestkitFactoryCreator(load(require('../src/WarningIndicator/WarningIndicator.uni.driver')));
export const variableInputTestkitFactory = uniTestkitFactoryCreator(load(require('../src/VariableInput/VariableInput.uni.driver')));
export const sidePanelTestkitFactory = uniTestkitFactoryCreator(load(require('../src/SidePanel/SidePanel.uni.driver')));
export const sideMenuDrillTestkitFactory = testkitFactoryCreator(load(require('../src/Deprecated/SideMenu/DrillView/DrillView.driver')));
export const headerTestkitFactory = testkitFactoryCreator(load(require('../src/Card/Header/Header.driver')));
export const sideMenuTestkitFactory = testkitFactoryCreator(load(require('../src/Deprecated/SideMenu/core/SideMenu.driver')));
export const draggableTestkitFactory = testkitFactoryCreator(load(require('../src/DragAndDrop/Draggable/Draggable.driver')));
export const editableRowTestkitFactory = testkitFactoryCreator(load(require('../src/EditableSelector/EditableRow/EditableRow.driver')));
export const fieldLabelAttributesTestkitFactory = testkitFactoryCreator(load(require('../src/FieldLabelAttributes/FieldLabelAttributes.driver')));
export const fieldWithSelectionCompositeTestkitFactory = testkitFactoryCreator(load(require('../src/Composite/FieldWithSelectionComposite/FieldWithSelectionComposite.driver')));
export const radioButtonTestkitFactory = testkitFactoryCreator(load(require('../src/RadioGroup/RadioButton/RadioButton.driver')));
export const messageBoxMarketerialLayoutTestkitFactory = testkitFactoryCreator(load(require('../src/MessageBox/MarketerialLayout/MessageBoxMarketerialLayout.driver')));
export const messageBoxFunctionalLayoutTestkitFactory = testkitFactoryCreator(load(require('../src/MessageBox/FunctionalLayout/MessageBoxFunctionalLayout.driver')));
export const cardSubheaderTestkitFactory = uniTestkitFactoryCreator(load(require('../src/Card/Subheader/Subheader.uni.driver')));
