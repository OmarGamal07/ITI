#include<iostream>
using namespace std;
class fraction
{
private:
    int top,bottom;
public:
    int *value;
    fraction()
    {
        top=0;
        bottom=1;
        value=new int[10];
    }
    fraction(int top1,int bottom1)
    {
        set_top(top1);
        set_bottom(bottom1);
        value=new int[10];

    }
    fraction(int bottom1)
    {
        top=0;
        bottom=bottom1;
        value=new int[10];
    }
    void set_top(int top1)
    {
        top=top1;

    }
    void set_bottom(int bottom1)
    {
        if(bottom1!=0)
        {
            bottom=bottom1;
        }
        else
        {
            bottom=1;
        }
    }
    int get_top()
    {
        return top;
    }
    int get_bottom()
    {
        return bottom;
    }

    void display()
    {
        cout<<"fraction "<<top<<"/"<<bottom<<" = "<< (float)top/bottom<<"first value ="<<value[0]<<endl;
    }
    fraction add(fraction f)
    {
        fraction newfraction;
        newfraction.top= top*f.get_bottom()+bottom*f.get_top();
        newfraction.bottom=bottom*f.get_bottom();
        return newfraction;
    }
    fraction operator+(fraction f)
    {
        fraction newfraction;
        newfraction.top= top*f.get_bottom()+bottom*f.get_top();
        newfraction.bottom=bottom*f.get_bottom();
        return newfraction;

    }
     fraction operator-(fraction f)
    {
        fraction newfraction;
        newfraction.top= top*f.get_bottom()-bottom*f.get_top();
        newfraction.bottom=bottom*f.get_bottom();
        return newfraction;

    }
    fraction operator=(fraction f)
    {
        this->top=f.top;
        this->bottom=f.bottom;
        this->value=new int[10];
        for(int i=0;i<10;i++)
        {
            this->value[i]=f.value[i];
        }
        return *this;
    }
};
int main()
{
    fraction f1(2),f2(2,3),f3,f4,f5;
    cout << "first fraction ";
    f1.display();
    cout<<endl;
    cout<<"second fraction " ;
    f2.display();
    cout<<endl;
    cout<<"third fraction ";
     f3.display();
    cout<<endl;

    f3=f1.add(f2);
    cout<<"third fraction" ;
    f3.display();
    cout<<endl;
    f4=f1+f2+f3;
    cout<<"four fraction" ;
    f4.display();
    cout<<endl;
    f5=f1-f2-f3;
    cout<<"five fraction" ;
    f5.display();
    cout<<endl;
    f5.value[0]=200;
    f4=f5;
    cout<<"equal fraction f4= " ;
    f4.display();
    cout<<"f5= "<<endl;
    f5.display();
    cout<<endl;

    return 0;
}
