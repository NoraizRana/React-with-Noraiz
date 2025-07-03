import { useState, useCallback, memo } from "react";
import React from "react";

function Child(){
    return(
        console.log("Child Component Rendered")
    )
}

export default memo(Child);