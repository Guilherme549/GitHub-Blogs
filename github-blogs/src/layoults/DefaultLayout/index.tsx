import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { OutletContainer } from "./styles";

export function DefaultLayout(){
    return (
        <div>
            <Header />
            <OutletContainer>
                <Outlet />
            </OutletContainer>
        </div>
    )
}