import { useMemo } from "react";
import { Box, Card, IconButton, Divider, Tooltip } from "@mui/material";

import getActions from "./actions";

const EditorToolbar = ({ editor }) => {
  if (!editor) return null;

  const ACTIONS = useMemo(() => getActions(editor), [editor]);

  const actions = [
    ACTIONS.toggleBold,
    ACTIONS.toggleItalic,
    ACTIONS.toggleUnderline,
    ACTIONS.toggleStrikethrough,
    ACTIONS.toggleSuperscript,
    ACTIONS.toggleSubscript,
    ACTIONS.toggleHighlight,
    ACTIONS.setColor,
    ACTIONS.unsetColor,
    ACTIONS.toggleInlineCode,
    ACTIONS.insertLink,

    ACTIONS.sep,

    ACTIONS.toggleHeading1,
    ACTIONS.toggleHeading2,
    ACTIONS.toggleHeading3,

    ACTIONS.sep,

    ACTIONS.alignLeft,
    ACTIONS.alignCenter,
    ACTIONS.alignRight,

    ACTIONS.sep,

    ACTIONS.toggleBulletList,
    ACTIONS.toggleOrderedList,
    ACTIONS.increaseListLevel,
    ACTIONS.decreaseListLevel,
    ACTIONS.toggleTaskList,

    ACTIONS.sep,

    ACTIONS.toggleQuoteBlock,
    ACTIONS.toggleCodeBlock,
    ACTIONS.insertHorizontalRule,
    ACTIONS.insertImage,
    ACTIONS.insertEmbed,
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
