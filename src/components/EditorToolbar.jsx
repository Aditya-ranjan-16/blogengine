import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";

// Toolbar icons
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import CodeIcon from "@mui/icons-material/Code";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import ImageIcon from "@mui/icons-material/Image";
import TaskIcon from "@mui/icons-material/Task";
import LinkIcon from "@mui/icons-material/Link";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import SuperscriptIcon from "@mui/icons-material/Superscript";
import SubscriptIcon from "@mui/icons-material/Subscript";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import FormatColorResetIcon from "@mui/icons-material/FormatColorReset";
import DataObjectIcon from "@mui/icons-material/DataObject";

const EditorToolbar = ({ editor }) => {
  if (!editor) return null;

  const sep = { sep: true };

  // Having all actions in the component is ugly but necessary...
  // Maybe can refactor in the future by binding editor to this

  const toggleQuoteBlock = {
    label: "toggle quote",
    icon: FormatQuoteIcon,
    action: () => editor.chain().focus().toggleBlockquote().run(),
    valid: () => editor.can().toggleBlockquote(),
    active: () => editor.isActive("blockquote"),
  };

  const toggleBulletList = {
    label: "toggle bullets",
    icon: FormatListBulletedIcon,
    action: () => editor.chain().focus().toggleBulletList().run(),
    valid: () => editor.can().toggleBulletList(),
    active: () => editor.isActive("bulletList"),
  };

  const toggleOrderedList = {
    label: "toggle numbers",
    icon: FormatListNumberedIcon,
    action: () => editor.chain().focus().toggleOrderedList().run(),
    valid: () => editor.can().toggleOrderedList(),
    active: () => editor.isActive("orderedList"),
  };

  const increaseListLevel = {
    label: "increase bullet level",
    icon: FormatIndentIncreaseIcon,
    action: () => editor.chain().focus().sinkListItem("listItem").run(),
    valid: () => editor.can().sinkListItem("listItem"),
  };

  const decreaseListLevel = {
    label: "decrease bullet level",
    icon: FormatIndentDecreaseIcon,
    action: () => editor.chain().focus().liftListItem("listItem").run(),
    valid: () => editor.can().liftListItem("listItem"),
  };

  const toggleCodeBlock = {
    label: "toggle code block",
    icon: CodeIcon,
    action: () => editor.chain().focus().toggleCodeBlock().run(),
    valid: () => editor.can().toggleCodeBlock(),
    active: () => editor.isActive("codeBlock"),
  };

  const toggleHeading1 = {
    label: "toggle heading 1",
    icon: LooksOneIcon,
    action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    valid: () => editor.can().toggleHeading({ level: 1 }),
    active: () => editor.isActive("heading", { level: 1 }),
  };

  const toggleHeading2 = {
    label: "toggle heading 2",
    icon: LooksTwoIcon,
    action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    valid: () => editor.can().toggleHeading({ level: 2 }),
    active: () => editor.isActive("heading", { level: 2 }),
  };

  const toggleHeading3 = {
    label: "toggle heading 3",
    icon: Looks3Icon,
    action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    valid: () => editor.can().toggleHeading({ level: 3 }),
    active: () => editor.isActive("heading", { level: 3 }),
  };

  const insertHorizontalRule = {
    label: "horizontal rule",
    icon: HorizontalRuleIcon,
    action: () =>
      editor.chain().focus().setHorizontalRule().createParagraphNear().run(),
    valid: () =>
      editor.can().chain().setHorizontalRule().createParagraphNear().run(),
  };

  const insertImage = {
    label: "add image",
    icon: ImageIcon,
    action: () => {
      const url = window.prompt("Enter url for image: ");
      if (!url) return;
      editor.chain().focus().setImage({ src: url }).createParagraphNear().run();
    },
    valid: () => editor.can().setImage(),
  };

  const toggleTaskList = {
    label: "add task list",
    icon: TaskIcon,
    action: () => editor.chain().focus().toggleTaskList().run(),
    valid: () => editor.can().toggleTaskList(),
    active: () => editor.isActive("taskList"),
  };

  const insertLink = {
    label: "link",
    icon: LinkIcon,
    action: () => {
      if (editor.isActive("link")) {
        editor.chain().focus().unsetLink().run();
        return;
      }

      const url = window.prompt("Enter URL: ");
      if (!url) return;

      editor.chain().focus().setLink({ href: url }).run();
    },
    active: () => editor.isActive("link"),
  };

  const toggleStrikethrough = {
    label: "toggle strikethrough",
    icon: StrikethroughSIcon,
    action: () => editor.chain().focus().toggleStrike().run(),
    valid: () => editor.can().toggleStrike(),
    active: () => editor.isActive("strike"),
  };

  const toggleSuperscript = {
    label: "toggle superscript",
    icon: SuperscriptIcon,
    action: () => editor.chain().focus().toggleSuperscript().run(),
    valid: () => editor.can().toggleSuperscript(),
    active: () => editor.isActive("superscript"),
  };

  const toggleSubscript = {
    label: "toggle subscript",
    icon: SubscriptIcon,
    action: () => editor.chain().focus().toggleSubscript().run(),
    valid: () => editor.can().toggleSubscript(),
    active: () => editor.isActive("subscript"),
  };

  const toggleUnderline = {
    label: "toggle underline",
    icon: FormatUnderlinedIcon,
    action: () => editor.chain().focus().toggleUnderline().run(),
    valid: () => editor.can().toggleUnderline(),
    active: () => editor.isActive("underline"),
  };

  const toggleItalic = {
    label: "toggle italics",
    icon: FormatItalicIcon,
    action: () => editor.chain().focus().toggleItalic().run(),
    valid: () => editor.can().toggleItalic(),
    active: () => editor.isActive("italic"),
  };

  const toggleBold = {
    label: "toggle bold",
    icon: FormatBoldIcon,
    action: () => editor.chain().focus().toggleBold().run(),
    valid: () => editor.can().toggleBold(),
    active: () => editor.isActive("bold"),
  };

  const toggleInlineCode = {
    label: "toggle code",
    icon: CodeIcon,
    action: () => editor.chain().focus().toggleCode().run(),
    valid: () => editor.can().toggleCode(),
    active: () => editor.isActive("code"),
  };

  const toggleHighlight = {
    label: "toggle highlight",
    icon: FormatColorFillIcon,
    action: () => editor.chain().focus().toggleHighlight().run(),
    valid: () => editor.can().toggleHighlight(),
    active: () => editor.isActive("highlight"),
  };

  const alignLeft = {
    label: "align left",
    icon: FormatAlignLeftIcon,
    action: () => {
      if (editor.isActive({ textAlign: "left" })) {
        editor.chain().focus().unsetTextAlign().run();
        return;
      }
      editor.chain().focus().setTextAlign("left").run();
    },
    valid: () => editor.can().setTextAlign("left"),
    active: () => editor.isActive({ textAlign: "left" }),
  };

  const alignRight = {
    label: "align right",
    icon: FormatAlignRightIcon,
    action: () => {
      if (editor.isActive({ textAlign: "right" })) {
        editor.chain().focus().unsetTextAlign().run();
        return;
      }
      editor.chain().focus().setTextAlign("right").run();
    },
    valid: () => editor.can().setTextAlign("right"),
    active: () => editor.isActive({ textAlign: "right" }),
  };

  const alignCenter = {
    label: "align center",
    icon: FormatAlignCenterIcon,
    action: () => {
      if (editor.isActive({ textAlign: "center" })) {
        editor.chain().focus().unsetTextAlign().run();
        return;
      }
      editor.chain().focus().setTextAlign("center").run();
    },
    valid: () => editor.can().setTextAlign("center"),
    active: () => editor.isActive({ textAlign: "center" }),
  };

  const setColor = {
    label: "set color",
    icon: FormatColorTextIcon,
    action: () => {
      const color = window.prompt("Enter color name or use any CSS format: ");
      if (!color) return;

      if (editor.isActive("textStyle", { color })) {
        editor.chain().focus().unsetColor();
        return;
      }

      editor.chain().focus().setColor(color).run();
    },
    valid: () => editor.can().setColor(),
  };

  const unsetColor = {
    label: "clear colors",
    icon: FormatColorResetIcon,
    action: () => {
      editor.chain().focus().unsetColor().run();
    },
    valid: () => editor.can().unsetColor(),
  };

  const insertEmbed = {
    label: "insert embed",
    icon: DataObjectIcon,
    action: () => {
      const url = window.prompt("URL");

      if (url) {
        editor
          .chain()
          .focus()
          .setIframe({ src: url })
          .createParagraphNear()
          .run();
      }
    },
    valid: () => editor.can().setIframe(),
  };

  const actions = [
    toggleBold,
    toggleItalic,
    toggleUnderline,
    toggleStrikethrough,
    toggleSuperscript,
    toggleSubscript,
    toggleHighlight,
    setColor,
    unsetColor,
    toggleInlineCode,
    insertLink,

    sep,

    toggleHeading1,
    toggleHeading2,
    toggleHeading3,

    sep,

    alignLeft,
    alignCenter,
    alignRight,

    sep,

    toggleBulletList,
    toggleOrderedList,
    increaseListLevel,
    decreaseListLevel,
    toggleTaskList,

    sep,

    toggleQuoteBlock,
    toggleCodeBlock,
    insertHorizontalRule,
    insertImage,
    insertEmbed,
  ];

  const actionCallback = (item, index) => {
    // Need to rename icon to IconElement as JSX only emits
    // React.createElement for variables starting with capital letter
    const { sep, label, icon: IconElement, action, valid, active } = item;

    if (sep) {
      return (
        <Divider orientation="vertical" variant="middle" key={index} flexItem />
      );
    }

    return (
      <Tooltip title={label} key={label} arrow placement="bottom">
        {/* Disabled buttons cannot show tooltips, so we use box as wrapper */}
        <Box>
          <IconButton
            aria-label={label}
            onClick={action}
            disableRipple={action ? false : true}
            key={label}
            disabled={valid && !valid()}
            color={active && active() ? "primary" : "default"}
          >
            <IconElement />
          </IconButton>
        </Box>
      </Tooltip>
    );
  };

  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      {actions.map(actionCallback)}
    </Card>
  );
};

export default EditorToolbar;
