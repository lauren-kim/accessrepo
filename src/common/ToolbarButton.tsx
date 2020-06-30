import * as React from "react";

import {
    Button,
    ButtonProps,
    styled
} from "@material-ui/core";

import {
    Link as RouterLink,
    LinkProps as RouterLinkProps
} from "react-router-dom";

/**
 * A Button for use in a Toolbar.
 *
 * Provides a RouterLink and inherits colors (i.e., from the Toolbar).
 */
const ToolbarButton = styled(
    (props: ButtonProps & RouterLinkProps) => (
        <Button component={RouterLink} color='inherit' {...props} />
    ),
)({
});

export default ToolbarButton;
