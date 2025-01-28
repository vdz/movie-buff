import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useManualHydration(action: any, selector: (state: RootState) => any) {
    const dispatch = useDispatch();
    const rqStatus = useSelector(selector);

    // in case titles fetch query were not intialized prior to 
    //this component build, let it ask to hydrate itself
    useEffect(() => {
        if (rqStatus === 'idle') {
            dispatch(action());
        }
    }, []);
}