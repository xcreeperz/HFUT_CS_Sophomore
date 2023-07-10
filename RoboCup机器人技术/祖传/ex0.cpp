#include<iostream>
#define MAXLEN 300 
#include<string>
using namespace std; 

//采用单链表存储see的信息 
typedef struct see
{
	char time[5];  //存储周期信息 
	char obj[30];  //存储对象信息 
	char distance[20]; //存储相对距离信息 
	char direction[20]; //存储相对方向信息 
	char distchng[20]; //存储距离相对变化信息 
	char dirchng[20]; //存储方向相对变化信息 
	char bodydir[20]; //存储相对身体角度信息 
	char headdir[20]; //存储相对头部角度信息 
	int len;  //存储see表长度 
}see ;

//采用单链表存储hear的信息 
typedef struct hear
{
	char time[5]; //存储周期信息 
	bool is_direction; //判断是否是其他球员发送的信息 
	bool is_first; //判断第一个信息是否是hear信息  
	char direction[10]; //存储方向信息 
	string sender; //存储发送者信息 
	char message[MAXLEN]; //存储消息信息 
}hear ;

//初始化指令存储 
void info_initial(char info[])
{
	for(int i=0;info[i]!=0;i++)
		info[i]='\0';
}

//构建输出函数，输出解析后的指令 
void ch_print(see *s,hear *h)
{
	if(h[0].is_first==true)
	{
		cout<<"在 "<<h[1].time<<" 周期 hear 从 ";
		if(h[1].is_direction!=false)
		{
			cout<<h[1].direction<<" 方向 ";
		}
		
		else
		{
			cout<<h[1].sender<<" ";
		}
		cout<<"听到了 "<<h[1].message<<";"<<endl;
		
	}
	
	int i;
	cout<<"在 "<<s[1].time<<" 周期 see ";
	for(i=1;i<=s[0].len;i++)
	{
		if(s[i].obj[12]=='1')
		{
			cout<<"队友";
			for(int q=1;s[i].obj[q+1]!='\0';q++)
			{
				if(q==12) continue;
				cout<<s[i].obj[q]; 
			} 
		}
		else if(s[i].obj[12]=='2')
		{
			cout<<"对手";
			for(int t=1;s[i].obj[t+1]!='\0';t++)
			{
				if(t==12) continue;
				cout<<s[i].obj[t];
			}
		}
		else
		{
			for(int r=1;s[i].obj[r+1]!='\0';r++)
			{
				cout<<s[i].obj[r];
			}
		}
		cout<<" ";
		if(s[i].distance[0]!='\0')
		{
			cout<<"距离我的 Distance 是 "<<s[i].distance;
			if(s[i].direction[0]!='\0') 
			{
				cout<<", Direaction 是 "<<s[i].direction;
				if(s[i].distchng[0]!='\0')
				{
					cout<<", DistChng 是 "<<s[i].distchng;
					if(s[i].dirchng[0]!='\0')
					{
						cout<<", DirChng 是 "<<s[i].dirchng;
						if(s[i].bodydir[0]!='\0')
						{
							cout<<", 它的 BodyDir 是 "<<s[i].bodydir;
							if(s[i].headdir[0]!='\0')
							{
								cout<<", 它的 HeadDir 是 "<<s[i].headdir;
							}
						}
					}
				}
			}	
		} 
		cout<<";";
	}
	cout<<"。";
}

int main()
{
	char strhear[4]={'h','e','a','r'};//用于判断是否hear信息 
    char strsee[3]={'s','e','e'};//用于判断是否是see信息 
	char info[300];//存储输入的指令
	hear h[MAXLEN];//存储hear指令信息 
	see  s[MAXLEN]; //存储see指令信息 
	
	//采用do-while循环进行重复读取并处理数据 
	do
	{
		int k=0;//用于记录当前信息位置 
		int count=0;//count计数器用于记录每个hear/see指令长度 
		int flag=1;//当flag为1时,为hear指令；当flag为0时，为see指令;当flag为-1时不是指令跳过 
		int sc=1;
		info_initial(info); 
		cout<<"请输入指令:";
		cin.getline(info,800);
		cin.clear();
		if(info[k]=='\0') 
		{
			cout<<"输入指令错误!"<<endl;
			break;; 
		}

		while(info[k]!='\0')
		{
			
			if(info[k]=='('||info[k]==')'||info[k]==' ') 
			{
				k++;
				continue;
			} 
			count=0;
			for(int k1=k;info[k1]!=' ';k1++)//判断是否为hear指令 
			{
			
				if(strhear[count]!=info[k1]) 
				{
					flag=-1;
					break;
				}
				else
				{
					flag=1;
					count++;
				} 
			}
			
			count=0;
			if(flag!=1)
			{
				for(int k2=k;info[k2]!=' ';k2++)//判断是否为see指令 
				{
					if(strsee[count]!=info[k2])
					{
						flag=-1;
						break;
					}
					else
					{
						flag=0;
						count++;
					} 
						
				}	
			}
					
			if(flag==-1)
			{
				k++;
				continue;
			}
		
			if(flag==1)//当指令为hear指令时 
			{
				k = k+5;
				h[0].is_first=true;
				count=0;
				for(int k3=k;info[k3]!=' ';k3++)
				{
					h[1].time[count]=info[k3];
					count++;
				}
				h[1].time[count]='\0';
				k = k+count+1;
				count=0;
				
				if(info[k]>='a'&&info[k]<='z')
				{
					h[1].is_direction=false;
					switch(info[k])
					{
						case 's':
									h[1].sender="self";	
									k = k+5;
									break;								
									
						case 'r':
									h[1].sender="referee";
									k = k+8;
									break;
									
						case 'o':
									if(info[k+13]=='l')
									{
										h[1].sender="online_coach_left";
										k = k+18;
									}
									else
									{
										h[1].sender="online_coach_right";
										k = k+19;
									}
									break;
						
						default:
									cout<<"指令格式错误!"<<endl;
									break;
						
					}
				}
				
				else
				{
					h[1].is_direction=true;
					for(int k4=k;info[k4]!=' ';k4++)
					{
						h[1].direction[count]=info[k4];
						count++;
					}

					k = k+count+1;
				}
				count=0;
				for(int k5=k;info[k5]!='('&&info[k5]!=')';k5++)
				{
					h[1].message[count]=info[k5];
					count++;
				}
				if(info[k+count]=='(')//判断hear中message信息是否含有坐标 
				{
					for(;info[k+count-1]!=')';)
					{
						h[1].message[count]=info[k+count];
						count++;
					} 
				}
				k = k+count+2;	
			}
				
			count=0;
			
			if(flag==0)//对see指令进行处理 
			{
				k = k+4;
				for(int j1=k;info[j1]!=' ';j1++)
				{
					s[1].time[count]=info[j1];
					count++; 
				}
				k = k+count+1;
				
				while(info[k]=='('&&info[k+1]=='(')
				{
					count=0;
					k = k+1;
					for(int j2=k;info[j2]!=')';j2++)
					{
						s[sc].obj[count]=info[j2];
						count++;
					}
					
					s[sc].obj[count]=')';
					k = k+count+2;
					count=0;
					while(info[k]!=')')
					{
						for(;info[k]!=' '&&info[k]!=')';k++)	s[sc].distance[count++]=info[k];
						count=0;
						if(info[k]==')')
						{
							k = k+2;
							break;
						}
						else k++;
						for(;info[k]!=' '&&info[k]!=')';k++)	s[sc].direction[count++]=info[k];
						count=0;
						if(info[k]==')')
						{
							k = k+2;
							break;
						}
						else k++;
						for(;info[k]!=' '&&info[k]!=')';k++)	s[sc].distchng[count++]=info[k];
						count=0;
						if(info[k]==')')
						{
							k = k+2;
							break;
						}
						else k++;
						for(;info[k]!=' '&&info[k]!=')';k++)	s[sc].dirchng[count++]=info[k];
						count=0;
						if(info[k]==')')
						{
							k = k+2;
							break;
						}
						else k++;
						for(;info[k]!=' '&&info[k]!=')';k++)	s[sc].bodydir[count++]=info[k];
						count=0;
						if(info[k]==')')
						{
							k = k+2;
							break;
						}
						else k++;
						for(;info[k]!=')';k++)	s[sc].headdir[count++]=info[k];
						count=0;
						if(info[k]==')')
						{
							k = k+2;
							break;
						}
					}
					sc++;
				}
				
				s[0].len=sc-1;
			}
		}	
		ch_print(s,h);
		cout<<endl;
	}while(1);
	
	return 0;
}


