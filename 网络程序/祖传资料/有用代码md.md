    void Application_Start(object sender, EventArgs e) 
    {
        // 在应用程序启动时运行的代码

        Application["ApplicationName"] = "畅想网络学院";
        Application["PageSize"] = "18";
        Application["OnlinePersonTotal"] = 0;
        Application["OnlinePersons"] = "";

    }

    void Session_Start(object sender, EventArgs e) 
    {
        // 在新会话启动时运行的代码
        Session["REMOTE_ADDR"] = Request.ServerVariables["REMOTE_ADDR"].ToString();

        Application["OnlinePersonTotal"] =(int)Application["OnlinePersonTotal"]+ 1;
    }

    void Session_End(object sender, EventArgs e) 


    {

       Application["OnlinePersonTotal"] = (int)Application["OnlinePersonTotal"] - 1;
        // 在会话结束时运行的代码。 
        // 注意: 只有在 Web.config 文件中的 sessionstate 模式设置为
        // InProc 时，才会引发 Session_End 事件。如果会话模式设置为 StateServer 
        // 或 SQLServer，则不会引发该事件。

    }
