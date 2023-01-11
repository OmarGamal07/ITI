#ifndef LIST_H
#define LIST_H
#include<iostream>
using namespace std;
template < class T>
class list
{
    public:
        list()
        {
            size=10;
            arr=new T[size];
            length=-1;
        }
        T getlast()
        {
            if(length<0)
                {
                    throw "array empty";
                }
            return arr[length];
        }
        T getbyindex(int index)
        {
            if(index>length || index<0)
            {
                throw "index out length";
            }
            return arr[index];
        }
        void add(T item)
        {
            if(length==size-1)
            {
                extend();
            }
            length++;
            arr[length]=item;
        }
        void display()
        {
             if(length<0)
                {
                    throw "array empty";
                }
            for(int i=0;i<=length;i++)
            {
                cout<<arr[i]<<endl;
            }
        }
        T remove(int index)
        {
            if(index>length || index<0)
            {
                throw "index out length";
            }
            T temp=arr[index];
            for(int i=index;i<length;i++)
            {
                arr[i]=arr[i+1];
            }
            length--;
            return temp;
        }

    protected:

    private:

        int size;
        T*arr;
        int length;
        void extend()
        {
            T*temp=new T(size*2);
            for(int i=0;i<size;i++)
            {
                temp[i]=arr[i];
            }
            delete(arr);
            arr=temp;
            size*=2;
        }


};

#endif // LIST_H

