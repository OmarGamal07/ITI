#ifndef MULTI_H
#define MULTI_H
#include <iostream>
using namespace std;
class grandparent
{
    public:
       void displaygrandpublic()
        {
            cout << "iam grand parent public" << endl;
            //cout<<"iam grand parent public";
        }
        grandparent() {}

    protected:
      void  displaygrandprotected()
        {
            cout<<"iam grand parent protected"<<endl;
        }

    private:
       void displaygrandprivate()
        {
            cout<<"iam grand parent private"<<endl;
        }
};
class parent:private grandparent
{
    public:
       void displayparentpublic()
        {
            cout<<"iam parent  public"<<endl;
        }

    protected:
      void  displayparentprotected()
        {
            cout<<"iam parent  protected"<<endl;
        }

    private:
      void  displayparentprivate()
        {
            cout<<"iam parent  private"<<endl;
        }
};

class child:public parent
{
    public:
       void displaychildpublic()
        {
            cout<<"iam child parent public"<<endl;
        }



    protected:
       void displaychildprotected()
        {
            cout<<"iam child  protected"<<endl;
        }

    private:
       void displaychildprivate()
        {
            cout<<"iam child  private"<<endl;
        }
};
#endif // MULTI_H
